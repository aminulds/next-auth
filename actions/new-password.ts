"use server"
import * as z from "zod"
import {NewPasswordSchema} from "@/schemas";
import {getPasswordResetTokenByToken} from "@/data/password-reset-token";
import {getUserByEmail} from "@/data/user";
import bcrypt from "bcryptjs";
import {db} from "@/lib/db";

export const newPassword = async (
    values: z.infer<typeof NewPasswordSchema> ,
    token?: string | null,
) => {
    console.log("Token:", token);
    if (!token) return {error: "Missing token!"}

    const validatedFields = NewPasswordSchema.safeParse(values);
    if (!validatedFields.success) return {error: "Invalid fields!"}

    const {password} = validatedFields.data;

    const existingToken = await getPasswordResetTokenByToken(token);
    if (!existingToken) return {error: "Invalid token!"}
    console.log("Existing Token:", existingToken);

    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) return {error: "Token has expired!"}

    console.log("Has expired:", hasExpired);

    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) return {error: "Email does not exist!"}

    console.log("Existing User:", existingUser);

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.update({
        where: {id: existingUser.id},
        data: {password: hashedPassword}
    });

    await db.passwordResetToken.delete({
        where: {id: existingToken.id}
    });

    console.log("Success");

    return {success: "Password updated"}
}
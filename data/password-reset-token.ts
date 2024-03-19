import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
    try {
        return await db.passwordResetToken.findFirst({
            where: { token }
        });
    } catch (error) {
        console.error("Error retrieving password reset token:", error);
        return null;
    }
}

export const getPasswordResetTokenByEmail = async (email: string) => {
    try {
        return await db.passwordResetToken.findFirst({
            where: {email}
        })
    } catch {
        return null
    }
}
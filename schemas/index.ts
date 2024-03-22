import * as z from "zod";
import {UserRole} from "@prisma/client";

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
}).refine((data) => {
    return !(data.password && !data.newPassword);

}, {
    message: "New password is required!",
    path: ["newPassword"]
}).refine((data) => {
    return !(data.newPassword && !data.password);

}, {
    message: "Password is required!",
    path: ["password"]
});

export const NewPasswordSchema = z.object({
    password: z.string().min(1, "Password is required.")
});

export const ResetSchema = z.object({
    email: z.string().email().min(1, "Email is required.")
});

export const LoginSchema = z.object({
    email: z.string().email().min(1, "Email is required."),
    password: z.string().min(1, "Password is required."),
    code: z.optional(z.string())
});

export const RegisterSchema = z.object({
    name: z.string().min(1, "Name is required."),
    email: z.string().email().min(1, "Email is required."),
    password: z.string().min(6, "Password must 6 character long.")
});
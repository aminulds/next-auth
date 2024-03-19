import * as z from "zod";

export const NewPasswordSchema = z.object({
    password: z.string().min(1, "Password is required.")
});

export const ResetSchema = z.object({
    email: z.string().email().min(1, "Email is required.")
});

export const LoginSchema = z.object({
    email: z.string().email().min(1, "Email is required."),
    password: z.string().min(1, "Password is required.")
});

export const RegisterSchema = z.object({
    name: z.string().min(1, "Name is required."),
    email: z.string().email().min(1, "Email is required."),
    password: z.string().min(6, "Password must 6 character long.")
});
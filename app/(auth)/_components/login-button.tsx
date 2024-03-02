"use client"
import {useRouter} from "next/navigation";
import React from "react";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({children, mode, asChild}: LoginButtonProps) => {
    const {push} = useRouter()

    const onClick = () => {
        push("/login");
    }

    if (mode === "modal") {
        return (
            <span>TODO: Implement modal</span>
        )
    }
    return <span onClick={onClick} className="cursor-pointer">{children}</span>
};
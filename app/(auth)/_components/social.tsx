"use client"

import {Button} from "@/components/ui/button";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {signIn} from "next-auth/react";
import {DEFAULT_LOGIN_REDIRECT} from "@/constants/routes";

export const Social = () => {
    const handleSignIn = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }

    return (
        <div className="flex items-center w-full gap-x-2">
            <Button onClick={() => handleSignIn("google")} size="lg" variant="outline" className="w-full">
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button onClick={() => handleSignIn("github")} size="lg" variant="outline" className="w-full">
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
    );
};
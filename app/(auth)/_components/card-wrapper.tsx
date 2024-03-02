import React from 'react';
import {Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import {Header} from "@/app/(auth)/_components/header";
import {Social} from "@/app/(auth)/_components/social";
import {BackButton} from "@/app/(auth)/_components/back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}
export const CardWrapper = ({children, headerLabel, backButtonLabel, backButtonHref, showSocial}: CardWrapperProps) => {
    return (
        <Card className="w-[300px] sm:w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}
            <CardFooter>
                <BackButton href={backButtonHref} label={backButtonLabel}/>
            </CardFooter>
        </Card>
    );
};
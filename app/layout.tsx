import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";
import {Toaster} from "@/components/ui/sonner";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Authentication App",
    description: "Your Authentication Solution",
};

export default async function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    return (
        <SessionProvider session={session}>
            <html lang="en">
                <body className={`${inter.className} no-scrollbar`}>
                    {children}
                    <Toaster />
                </body>
            </html>
        </SessionProvider>
    );
}

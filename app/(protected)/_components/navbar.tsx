"use client";
import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {usePathname} from "next/navigation";
import UserButton from "@/app/(auth)/_components/user-button";

const Navbar = () => {
    const pathname = usePathname();
    const routes = [
        {name: "Server", link: "/server"},
        {name: "Client", link: "/client"},
        {name: "Admin", link: "/admin"},
        {name: "Settings", link: "/settings"},
    ]
    return (
        <nav className="bg-secondary flex justify-between items-center py-4 px-8 fixed top-0 w-full">
            <div className="flex gap-x-2">
                {routes.map((route) =>
                    <Button key={route.name} asChild variant={pathname === route.link ? "default" : "outline"}>
                        <Link href={route.link}>{route.name}</Link>
                    </Button>
                )}
            </div>

            <div>
                <UserButton />
            </div>
        </nav>
    );
};

export default Navbar;
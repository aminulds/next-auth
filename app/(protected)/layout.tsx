import React from 'react';
import Navbar from "@/app/(protected)/_components/navbar";
interface ProtectedLayoutProps {
    children: React.ReactNode;
}
const ProtectedLayout = ({children}: ProtectedLayoutProps) => {
    return (
        <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gradient-primary">
            <Navbar />
            <div className="px-8">
                {children}
            </div>
        </div>
    );
};

export default ProtectedLayout;
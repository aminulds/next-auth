import React from 'react';
import {logout} from "@/actions/logout";
interface LogoutButtonProps {
    children?: React.ReactNode
}
const LogoutButton = ({children}: LogoutButtonProps) => {
    const handleLogout = () => {
        logout();
    }
    return (
        <span onClick={handleLogout} className="cursor-pointer">
            {children}
        </span>
    );
};

export default LogoutButton;
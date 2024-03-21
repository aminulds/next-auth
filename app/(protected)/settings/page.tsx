"use client";
import React from 'react';
import {logout} from "@/actions/logout";
import {useCurrentUser} from "@/hooks/use-current-user";

const SettingPage = () => {
    const user = useCurrentUser();
    const handleSignOut = () => {
        logout();
    }

    return (
        <div className="bg-white p-4 rounded-sm">
            <button onClick={handleSignOut} type="submit">Sign Out</button>
        </div>
    );
};

export default SettingPage;
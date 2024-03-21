"use client"
import React from 'react';
import UserInfo from "@/app/(protected)/_components/user-info";
import {useCurrentUser} from "@/hooks/use-current-user";

const ClientPage = () => {
    const user = useCurrentUser();
    return (
        <div>
            <UserInfo user={user} label="Server component"/>
        </div>
    );
};

export default ClientPage;
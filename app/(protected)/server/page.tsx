import React from 'react';
import {currentUser} from "@/lib/current-user";
import UserInfo from "@/app/(protected)/_components/user-info";

const ServerPage = async () => {
    const user = await currentUser();
    return (
        <div>
            <UserInfo user={user} label="Server component" />
        </div>
    );
};

export default ServerPage;
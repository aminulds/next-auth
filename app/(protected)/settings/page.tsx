import React from 'react';
import {auth, signOut} from "@/auth";

const SettingPage = async () => {
    const session = await auth();
    const user = JSON.stringify(session?.user);
    session?.user

    return (
        <div>
            <div>{user}</div>

            <form action={async () => {
                "use server"
                await signOut();
            }
            }>
                <button type="submit">Sign Out</button>
            </form>
        </div>
    );
};

export default SettingPage;
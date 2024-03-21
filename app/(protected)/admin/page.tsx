"use client";
import React from 'react';
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import RoleGate from "@/app/(auth)/_components/role-gate";
import {FormSuccess} from "@/components/form-success";
import {UserRole} from "@prisma/client";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {admin} from "@/actions/admin";

const AdminPage = () => {
    const onServerActionClick = () => {
        admin().then((data) => {
            if (data.error) {
                toast.error(data.error);
            }
            if (data.success) {
                toast.success(data.success);
            }
        })
    }
    const onApiRouteClick = () => {
        fetch("/api/admin")
            .then((response) => {
                if (response.ok) {
                    toast.success("You are allow this content!");
                } else {
                    toast.error("Your are not allow this content!");
                }
            })
    }
    return (
        <Card className="min-w-[360px] max-w-[500px] max shadow-md">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">Admin</p>
            </CardHeader>
            <CardContent className="space-y-2">
                <RoleGate allowedRole={UserRole.ADMIN}>
                    <FormSuccess message="Your are allowed to see this content!"/>
                </RoleGate>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 font-medium">
                    <p>Admin only API Route</p>
                    <Button onClick={onApiRouteClick}>Click to test</Button>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 font-medium">
                    <p>Admin only server action</p>
                    <Button onClick={onServerActionClick}>Click to test</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default AdminPage;
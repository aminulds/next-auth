import React from 'react';
import {CardWrapper} from "@/app/(auth)/_components/card-wrapper";
import {ExclamationTriangleIcon} from "@radix-ui/react-icons";

const ErrorCard = () => {
    return (
        <CardWrapper headerLabel="Oops! Something went wrong1" backButtonLabel="Back to login" backButtonHref="/login" >
            <div className="w-full flex items-center justify-center">
                <ExclamationTriangleIcon className="text-destructive" />
            </div>
        </CardWrapper>
    );
};

export default ErrorCard;
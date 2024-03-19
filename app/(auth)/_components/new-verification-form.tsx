"use client"
import React, {useCallback, useEffect, useState} from 'react';
import {CardWrapper} from "@/app/(auth)/_components/card-wrapper";
import {BeatLoader} from "react-spinners";
import {useSearchParams} from "next/navigation";
import {newVerification} from "@/actions/new-verification";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";

const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    
    const onSubmit = useCallback(() => {
        if (!token) {
            setError("Missing token!");
        }

        if (token) {
            newVerification(token).then((data) => {
                setSuccess(data.success);
                setError(data.error);
            }).catch(() => {
                setError("Something went wrong!")
            });
        }
    }, [token]);
    
    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <CardWrapper
            headerLabel="Confirming your verfication"
            backButtonLabel="Back to Login"
            backButtonHref="/login"
        >
            <div className="flex items-center justify-center">
                {!success && !error ?
                    <BeatLoader color="rgb(99 102 241)" /> : null
                }
                <FormError message={error}/>
                <FormSuccess message={success} />
            </div>
        </CardWrapper>
    );
};

export default NewVerificationForm;
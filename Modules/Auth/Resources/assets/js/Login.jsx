import Form from "@/Components/Form"
import FormGroup from "@/Components/FormGroup"
import CheckForm from "@/Components/Forms/CheckForm"
import FormLabel from "@/Components/Forms/FormLabel"
import PasswordForm from "@/Components/Forms/PasswordForm"
import TextForm from "@/Components/Forms/TextForm"
import __ from "@/helpers/__"
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react"
import { useState } from "react"

export default function Login({ errors }) {
    const { data, setData, post } = useForm({
        email: '',
        password: '',
        remember: false
    })

    const [open, setOpen] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        post('/login')
    }

    return (
        <>
          
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormLabel>Email</FormLabel>
                            <TextForm
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                error={errors.email}
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>Password</FormLabel>
                            <PasswordForm
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                error={errors.password}
                            />
                        </FormGroup>

                        <div className="flex items-center justify-between">
                            <div>
                                <CheckForm
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', !data.remember)}
                                    id="remember"
                                >
                                    Remember me
                                </CheckForm>
                            </div>
                        </div>

                        <div className="text-sm leading-6">
                            <Link>
                                Forgot Password
                            </Link>
                        </div>
                        <div>
                        <button
                                            className="mt-4 flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"

                                            type="submit"

                                        >
                                            {__('Sign In')}
                                        </button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
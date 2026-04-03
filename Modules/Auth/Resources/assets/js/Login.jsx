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
        <Head title="Login" />

        <div className="min-h-screen flex">
            {/* LEFT - FORM */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 px-6">
                <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl">

                    {/* HEADER */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Welcome Back 👋
                        </h2>
                        <p className="text-sm text-gray-500">
                            Sign in to continue to your dashboard
                        </p>
                    </div>

                    {/* FORM */}
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormLabel>Email Address</FormLabel>
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

                        {/* REMEMBER + FORGOT */}
                        <div className="flex items-center justify-between mt-4">
                            <CheckForm
                                checked={data.remember}
                                onChange={() => setData('remember', !data.remember)}
                                id="remember"
                            >
                                Remember me
                            </CheckForm>

                            <Link
                                href="/forgot-password"
                                className="text-sm text-sky-600 hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* BUTTON */}
                        <button
                            className="mt-6 flex w-full justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-sky-500 transition"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </Form>
                </div>
            </div>

            {/* RIGHT - IMAGE */}
            <div className="hidden lg:flex w-1/2 relative">
                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    alt="Login Visual"
                    className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-sky-900/70 flex items-center justify-center">
                    <div className="text-center text-white px-10">
                        <h1 className="text-3xl font-bold mb-4">
                            Professional Management System 🚀
                        </h1>
                        <p className="text-sm opacity-90">
                            Manage your data faster, safer, and more efficiently.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}
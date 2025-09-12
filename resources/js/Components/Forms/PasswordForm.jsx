import classNames from "@/helpers/classNames";
import { EyeIcon, EyeSlashIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
export default function PasswordForm({ value, onChange, id, name, placeholder = "", error = null }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className="flex rounded-md shadow-sm">
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon
                            className="w-5 text-gray-400"
                        />
                    </div>
                    <input
                        type={showPassword ? "text" : "password"}
                        name={name}
                        id={id}
                        value={value}
                        onChange={onChange}
                        className={classNames(error ? "border-red-600" : "border-gray-300", "block w-full rounded-none rounded-l-md  pl-10 focus:border-sky-500 focus:ring-sky-500 ")}
                        placeholder={placeholder}
                    />
                </div>
                <button
                    type="button"
                    className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    onClick={() => {
                        setShowPassword(!showPassword);
                    }}
                >
                    {
                        showPassword ? (
                            <EyeIcon className="w-5 text-gray-400" />
                        ) : (
                            <EyeSlashIcon className="w-5 text-gray-400" />
                        )
                    }
                </button>
            </div>
            {error && (
                <p className="mt-1 text-xs text-red-600">{error}</p>
            )}
        </>
    )
}
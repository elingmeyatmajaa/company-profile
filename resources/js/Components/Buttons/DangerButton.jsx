import { Link } from "@inertiajs/react";
import React from "react";
export default function DangerButton({ children, className, onClick, href = null, type = "button" }) {
    if (href) {
        return (
            <Link
                className={`w-full inline-flex justify-center sm:w-auto bg-red-600 hover:bg-red-700 px-4 py-3 rounded-md  text-white font-semibold ${className} text-center`}
                href={href}
                type={type}
            >
                {children}
            </Link>
        )
    }
    return (
        <button
            className={`w-full inline-flex justify-center sm:w-auto bg-red-600 hover:bg-red-700 px-4 py-3 rounded-md  text-white font-semibold ${className} text-center`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}
const Light = ({ children, className, onClick, href, type = "button" }) => {
    if (href) {
        return (
            <Link
                className={`w-full inline-flex justify-center sm:w-auto bg-red-200 hover:bg-red-600 px-4 py-3 rounded-md hover:text-white text-red-600 font-semibold ${className} text-center`}
                href={href}
                type={type}
            >
                {children}
            </Link>
        )
    }
    return (
        <button
            className={`w-full inline-flex justify-center sm:w-auto bg-red-200 hover:bg-red-600 px-4 py-3 rounded-md hover:text-white text-red-600 font-semibold ${className} text-center`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}
DangerButton.Light = Light;
import { Link } from "@inertiajs/react";
import React from "react";
export default function Button({ children, className, onClick = () => {}, href = null, type = 'button' }) {
    if (href) {
        return (
            <Link
                className={`w-full inline-flex justify-center sm:w-auto bg-sky-600 hover:bg-sky-700 px-4 py-3 rounded-md  text-white font-semibold ${className} text-center`}
                href={href}
            >
                {children}
            </Link>
        )
    }
    return (
        <button
            className={`w-full inline-flex justify-center sm:w-auto bg-sky-600 hover:bg-sky-700 px-4 py-3 rounded-md  text-white font-semibold ${className} text-center`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}
const Light = ({ children, className, onClick = () => {}, href, type }) => {
    if (href) {
        return (
            <Link
                className={`w-full inline-flex justify-center sm:w-auto bg-sky-200 hover:bg-sky-600 px-4 py-3 rounded-md hover:text-white text-sky-600 font-semibold ${className} text-center`}
                href={href}
            >
                {children}
            </Link>
        )
    }
    return (
        <button
            className={`w-full inline-flex justify-center sm:w-auto bg-sky-200 hover:bg-sky-600 px-4 py-3 rounded-md hover:text-white text-sky-600 font-semibold ${className} text-center`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}
Button.Light = Light;
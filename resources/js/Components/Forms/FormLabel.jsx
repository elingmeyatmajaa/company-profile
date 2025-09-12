import React from "react";
export default function FormLabel({ 
    htmlFor,
    children,
    required,
    className = ""
}) {
    return (
        <label
            className={`block text-sm font-medium text-gray-700  ${className}`}
            htmlFor={htmlFor}
        >
            {children}
            {required ? (
                <span className="text-red-600 ml-2">*</span>
            ) : null}
        </label>
    )
}
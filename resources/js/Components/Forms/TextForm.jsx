import classNames from "@/helpers/classNames";
import React, { useEffect, useRef } from "react";
export default function TextForm({ value,
    onChange,
    id,
    name,
    error = null,
    focus = false,
    placeholder = "",
}) {
    const inputRef = useRef(null);
    useEffect(() => {
        if (focus) {
            inputRef.current.focus();
        }
    }, [inputRef, focus])
    return (
        <>
            <input
                type="text"
                className={classNames(error ? "border-red-600" : "border-gray-300", "rounded-md w-full shadow-sm focus:border-sky-500 focus:ring-sky-500")}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                ref={inputRef}
                placeholder={placeholder}
            />
            {
                error && (
                    <p className="mt-1 text-xs text-red-600">{error}</p>
                )
            }
        </>


    )
}
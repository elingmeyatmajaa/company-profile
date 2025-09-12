import classNames from "@/helpers/classNames";
import React from "react";

export default function AreaForm({ value, onChange, id, name, error = null, placeholder = "" }) {
    return (
        <>
            <textarea
                id={id}
                className={classNames(error ? "border-red-600" : "border-gray-300", "rounded-md w-full shadow-sm focus:border-sky-500 focus:ring-sky-500")}
                name={name}
                value={value}
                onChange={onChange}
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
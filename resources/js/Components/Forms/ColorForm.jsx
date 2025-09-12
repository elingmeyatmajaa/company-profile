import classNames from "@/helpers/classNames";
import React from "react";
export default function ColorForm({ value, onChange, id, name, error = null }) {
    return (
        <>
            <input
                type="color"
                className={classNames(error ? "border-red-600" : "border-gray-300", "rounded-md w-full shadow-sm focus:border-violet-500 focus:ring-violet-500")}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
            {
                error && (
                    <p className="mt-1 text-xs text-red-600">{error}</p>
                )
            }
        </>


    )
}
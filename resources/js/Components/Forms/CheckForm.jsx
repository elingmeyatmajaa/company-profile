import classNames from "@/helpers/classNames";
import React from "react";
export default function CheckForm({ checked, onChange, id, name, error = null, children }) {
    return (
        <>
            <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                    <input
                        id={id}
                        name={name}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                        onChange={onChange}
                        checked={checked}
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor={id} className="font-medium text-gray-700">
                        {children}
                    </label>
                </div>
            </div>
            {
                error && (
                    <p className="mt-1 text-xs text-red-600">{error}</p>
                )
            }
        </>


    )
}
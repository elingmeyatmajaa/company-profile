import React from "react";
import classNames from "@/helpers/classNames";

export default function FormSelect({value, onChange,id, option, error = null}) {
    return (
        <>
            <select
                id={id}
                option={option}
                className={classNames(error ? "border-red-600" : "border-gray-300", "rounded-md  shadow-sm focus:border-violet-500 focus:ring-violet-500")}
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
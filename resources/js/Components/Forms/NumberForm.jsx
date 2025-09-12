import classNames from "@/helpers/classNames";
import React, { useEffect, useRef } from "react";
import CurrencyInput from "react-currency-input-field";
export default function NumberForm({
    value,
    onChange,
    id,
    name,
    error = null,
    focus = false,
    placeholder = "",
    prefix = ""
}) {
    const inputRef = useRef(null);
    useEffect(() => {
        if (focus) {
            inputRef.current.focus();
        }
    }, [inputRef, focus])
    return (
        <>
            <CurrencyInput
                type="text"
                className={classNames(error ? "border-red-600" : "border-gray-300", "rounded-md w-full shadow-sm focus:border-violet-500 focus:ring-violet-500 text-end")}
                id={id}
                name={name}
                value={value}
                onValueChange={(value, name) => onChange({ target: { value, name } })}
                ref={inputRef}
                placeholder={placeholder}
                onClick={e => inputRef.current.select()}
                prefix={prefix}
            />
            {
                error && (
                    <p className="mt-1 text-xs text-red-600">{error}</p>
                )
            }
        </>


    )
}
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef } from "react";
export default function SearchForm({ value, onChange, id, name, error = null, placeholder = "Search", focus = false, width = "w-[250px]" }) {
    const ref = useRef(null)
    useEffect(() => {
        if (focus) {
            ref.current.focus()
        }
    }, [focus])
    return (
        <div className="flex items-center relative my-1">
            <span className="absolute ml-6">
                <MagnifyingGlassIcon
                    style={{ height: 24, width: 24 }}
                    className="text-gray-400"
                />
            </span>
            <input
                type="text"
                className={`bg-gray-50 focus:bg-gray-100 pl-14  px-0 py-2 bg-clip-padding border border-solid border-gray-50 appearance-none rounded-md focus:border-gray-100 focus:outline-none focus:ring-0 text-gray-700 font-semibold leading-6 ${width}`}
                placeholder={placeholder}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => { ref.current.select()}}
                ref={ref}
            />
        </div>
    )
}
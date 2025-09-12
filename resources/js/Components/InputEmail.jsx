import React from "react";
export default function InputEmail({value, onChange = () => {}}) {
    return (
        <input 
            id="email" 
            name="email" 
            type="email" 
            autoComplete="email"
            value={value}
            onChange={onChange} 
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
    )
}
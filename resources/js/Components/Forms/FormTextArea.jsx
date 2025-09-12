import React from "react";

export default function FormTextArea({ value, onChange, id, name, error = null }) {
    return(
        <>
         <textarea
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
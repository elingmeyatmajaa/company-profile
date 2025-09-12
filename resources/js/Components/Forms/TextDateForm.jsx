import React from "react";
export default function TextDateForm({ value, onChange, id,  selected }) {
    <>
        <input
            type="date"
            id={id}
            value={value}
            selected={selected}
            onChange={onChange}

        />
       
    </>

}
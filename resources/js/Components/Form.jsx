import React from "react";
export default function Form({ method = 'POST', children, onSubmit }) {
    return (
        <form method={method} onSubmit={onSubmit}>
            {children}
        </form>
    )
}
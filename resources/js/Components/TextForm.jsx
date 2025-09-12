import React from "react";

export default function TextForm({
    label,
    name,
    value,
    placeholder,
    type = "text",
    onChange = () => { },
    onBlur = () => { },
    error = null,
    fomrControlSize = "",
    size = "",
    feedback = true,
    disabled = false

}) {
    return (
        <>
            {label != null && (<label className="form-label">{label}</label>)}
            <input
                name={name}
                type={type}
                className={`form-control form-control-${fomrControlSize}` + `${error ? 'is-invalid' : ''}`}
                placeholder={placeholder}
                autoComplete="off"
                value={value}
                disabled={disabled}
                size={size}
                onChange={(e) => {
                    onChange(e.target.value)
                }}
                onBlur={(e) => {
                    onBlur(e.target.value)
                }}
            />
            {feedback && <span className="invalid-feedback">{error ? error : ''}</span>}
        </>
    )
}

function Sm(props) {
    return <TextForm fomrControlSize="sm" {...props}/>
    
}

TextForm.Sm = Sm;
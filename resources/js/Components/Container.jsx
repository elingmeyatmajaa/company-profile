import React from "react";
export default function Container({children}){
    return (
        <div className="py-6 px-8">
            {children}
        </div>
    )
}
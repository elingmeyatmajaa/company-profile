import React from "react";  
export default function Grid({children, className = "", cols = 3}){
    let gridColsClassName = "";
    if(cols == 1) gridColsClassName = "md:grid-cols-1";
    if(cols == 2) gridColsClassName = "md:grid-cols-2";
    if(cols == 3) gridColsClassName = "md:grid-cols-3";
    if(cols == 4) gridColsClassName = "md:grid-cols-4";
    if(cols == 5) gridColsClassName = "md:grid-cols-5";
    if(cols == 6) gridColsClassName = "md:grid-cols-6";
    return (
        <div className={`grid ${gridColsClassName} gap-4 ${className}`}>
            {children}
        </div>
    )
}
const Span1 = ({children}) => {
    return (
        <div className="md:col-span-1">{children}</div>
    )
}
const Span2 = ({children}) => {
    return (
        <div className="md:col-span-2">{children}</div>
    )
}
const Span3 = ({children}) => {
    return (
        <div className="md:col-span-3">{children}</div>
    )
}
Grid.Span1 = Span1;
Grid.Span2 = Span2;
Grid.Span3 = Span3;
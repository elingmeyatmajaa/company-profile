import React from "react";
export default function Card({ children, className }) {
    return (
        <div className={`relative flex flex-col rounded-lg bg-white shadow-sm ${className}`}>
            {children}
        </div>
    )
}
const Header = ({ children, className = "" }) => {
    return (
        <div className={`flex justify-between items-stretch flex-wrap  px-6 pt-4 mb-0 ${className}`}>
            {children}
        </div>
    )
}
const Title = ({ children, className = "" }) => {
    return (
        <div className={`mb-0 ${className}`}>
            {children}
        </div>
    )
}
const Toolbar = ({ children, className = "" }) => {
    return (
        <div className={`flex items-center my-0 ${className}`}>
            {children}
        </div>
    )
}
const Body = ({ children, className = "" }) => {
    return (
        <div className={`flex flex-col px-6 py-4 ${className}`}>
            {children}
        </div>
    )
}
Card.TitleText = ({ children, className = "" }) => {
    return (
        <h2 className={`text-2xl mb-0 ${className}`}>
            {children}
        </h2>
    )
}
Card.TitleDescription = ({ children, className = "" }) => {
    return (
        <p className={`mt-1 max-w-2xl text-sm text-gray-500 ${className}`}>
            {children}
        </p>
    )
}

Card.Header = Header;
Card.Title = Title;
Card.Toolbar = Toolbar;
Card.Body = Body;
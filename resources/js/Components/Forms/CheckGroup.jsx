import classNames from "@/helpers/classNames";
import React from "react";
export default function CheckGroup({ error, children }) {
    return (
        <div className={classNames(error ? "border border-red-500 rounded-md" : "" , "p-4")}>
            {children}
        </div>
    );
}
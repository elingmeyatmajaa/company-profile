import react from "react";
import { Children } from "react/cjs/react.development";
export default function Container() {
    return (
        <>
           <div className="max-w-7xl mx-auto p-8 justify-center">
                {Children}
            </div>
        </>
    )
}
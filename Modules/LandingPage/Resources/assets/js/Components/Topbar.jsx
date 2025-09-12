import { Link } from "@inertiajs/react";

export default function Topbar() {
    return (
        <div>
            <Link href="#" className="z-10 w-10 h-10 bg-black text-black hover:bg-black rounded-full flex fixed bottom-10 right-10 cursor-pointer scroll-smooth">
                <a className="text-xl m-auto"> ↑ </a>
            </Link>
        </div>
    )
}
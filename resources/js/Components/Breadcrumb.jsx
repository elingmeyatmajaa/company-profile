import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import React from "react";

const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
]
export default function Breadcrumb({ title, items }) {
    return (
        <div className="flex justify-between items-center ">
            <div className="mb-3">
                <h1 className="text-2xl font-semibold text-gray-900">
                    {title}
                </h1>
            </div>
            <nav className="flex mb-6" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-4">
                    {items.map((page, key) => (
                        <li key={page.name}>
                            <div className="flex items-center">
                                {key !== 0 && (

                                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                )}
                                <Link
                                    href={page.href}
                                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                    aria-current={page.current ? 'page' : undefined}
                                >
                                    {page.name}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    )
}
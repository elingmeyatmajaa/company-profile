import classNames from "@/helpers/classNames";
import __ from "@/helpers/__";
import { Menu, Transition } from "@headlessui/react";
import { ArchiveBoxIcon, ArrowRightCircleIcon, ChevronDownIcon, DocumentDuplicateIcon, DocumentMagnifyingGlassIcon, HeartIcon, PencilIcon, PencilSquareIcon, TrashIcon, UserPlusIcon, ViewColumnsIcon } from "@heroicons/react/20/solid";
import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
export default function Datatable({ children, className }) {
    return (
        <div className={`relative overflow-x-auto ${className}`}>
            <table className="min-w-full mb-24">
                {children}
            </table>
        </div>
    )
}
const Thead = ({ children }) => {
    return (
        <thead className="text-gray-400 uppercase font-bold ">
            {children}
        </thead>
    )
}

const Tr = ({ children }) => {
    return (
        <tr
            className="text-start  border-b border-dashed border-gray-200">
            {children}
        </tr>
    )
}

const Th = ({ children, className }) => {
    return (
        <th scope="col" className={`px-3 pt-5 pb-5 ${className} text-start`}>
            {children}
        </th>
    )
}
const Tbody = ({ children, className }) => {
    return (
        <tbody className={`text-gray-600 ${className}`}>
            {children}
        </tbody>
    )
}
const Td = ({ children, className = "" }) => {
    return (
        <td className={`px-3 py-4 text-sm font-medium ${className}`}>
            {children}
        </td>
    )
}
const Actions = ({ detail = null, edit = null, destroy = null }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none hover:text-sky-600 ">
                    {__('Actions')}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {
                        edit && (
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'group flex items-center px-4 py-2 text-sm w-full'
                                            )}
                                            onClick={() => edit()}

                                        >
                                            <PencilSquareIcon
                                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                            {__('Edit')}
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        )
                    }

                    {
                        destroy
                        && (
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'group flex items-center px-4 py-2 text-sm w-full'
                                            )}
                                            onClick={() => destroy()}
                                        >
                                            <TrashIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                            {__('Delete')}
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        )
                    }
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
const Pagination = ({ data }) => {
    return (
        <div className="flex items-center justify-between bg-white py-3 mt-2">

            <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        {__('Showing')} <span className="font-medium">{data.from}</span> {__('to')} <span className="font-medium">{data.to}</span> {__('of')}{' '}
                        <span className="font-medium">{data.total}</span> {__('results')}
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        {data.links.map((link, index) => {
                            if (index === 0) {
                                return (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: link.label }}></span>
                                    </Link>
                                )
                            } else if (index === data.links.length - 1) {
                                return (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: link.label }}></span>
                                    </Link>
                                )
                            }
                            if (link.active) {
                                return (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className="relative z-10 inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-sky-600 focus:z-20"
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: link.label }}></span>
                                    </Link>
                                )
                            }
                            return (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className="relative z-10 inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 focus:z-20"
                                >
                                    <span dangerouslySetInnerHTML={{ __html: link.label }}></span>
                                </Link>
                            )
                        })}

                    </nav>
                </div>
            </div>
        </div>
    )
}

Datatable.Actions = Actions;
Datatable.Thead = Thead;
Datatable.Tbody = Tbody;
Datatable.Tr = Tr;
Datatable.Th = Th;
Datatable.Td = Td;
Datatable.Actions = Actions;
Datatable.Pagination = Pagination;

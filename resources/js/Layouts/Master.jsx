import React, { useEffect, useRef } from "react";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition, Disclosure } from "@headlessui/react";
import {
    ArrowLeftOnRectangleIcon,
    Bars3BottomLeftIcon,
    BellIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    ExclamationTriangleIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Head, Link, router, usePage } from "@inertiajs/react";
import _route from "@/helpers/_route";
import DeleteModal from "@/Components/Modals/DeleteModal";
import { useRecoilValue } from "recoil";
import deleteModalState from "@/States/deleteModalState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import __ from "@/helpers/__";
import can from "@/helpers/can";
import saySomething from "@/helpers/saySomething";
import ContainerModal from "@/Components/Modals/ContainerModal";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Master({ children }) {
    const { main, errors } = usePage().props;
    // const { mainSetting, errors } = usePage().props;

    useEffect(() => {
        if (errors.message) {
            saySomething(errors.message, "error");
        }
    }, [errors]);

    const cancelButtonRef = useRef(null);
    const [showSignOutModal, setShowSignOutModal] = useState(false);
    const navigation = [
        {
            name: "Dashboard",
            href: _route("admin.dashboard.index"),
            current: true,
            permission: ["read-dashboard"],
        },
        {
            name: "Landing Page",
            href: _route("admin.introduction.index"),
            permission: [
                "read-setting",
                "read-introduction",
                "read-about",
                "read-about-point",
                "read-category-blog",
                "read-blog-title",
                "read-blog",
                "read-service-title",
                "read-service",
                "read-product-title",
                "read-product",
                "read-sosial-media",
                "read-page",
                "read-contact"

            ],

            current: false,
            children: [
                 {
                    name: __("Contact"),
                    permission: 'read-contact',
                    href: _route("admin.contact.index"),
                },
                {
                    name: __("Setting"),
                    permission: 'read-setting',
                    href: _route("admin.main-setting.index"),
                },
                {
                    name: __("Introduction"),
                    permission: 'read-introduction',
                    href: _route("admin.introduction.index"),
                },

                {
                    name: __("About"),
                    permission: 'read-about',
                    href: _route("admin.about.index"),
                },

                {
                    name: __("About Point"),
                    permission: 'read-about-point',
                    href: _route("admin.about-point.index"),
                },
                {
                    name: __("Category Blog"),
                    permission: 'read-category-blog',
                    href: _route("admin.category-blog.index"),
                },

                {
                    name: __("Header Blog"),
                    permission: 'read-blog-title',
                    href: _route("admin.blog-title.index"),
                },

                {
                    name: __("Blog"),
                    permission: 'read-blog',
                    href: _route("admin.blog.index"),
                },
                {
                    name: __("Header Service"),
                    permission: 'read-service-title',
                    href: _route("admin.service-title.index"),
                },
                {
                    name: __("Service"),
                    permission: 'read-service',
                    href: _route("admin.service.index"),
                },
                {
                    name: __("Header Product"),
                    permission: 'read-product-title',
                    href: _route("admin.product-title.index"),
                },
                {
                    name: __("Product"),
                    permission: 'read-product',

                    href: _route("admin.product.index"),
                },
                {
                    name: __("Sosial Media"),
                    permission: 'read-sosial-media',
                    href: _route("admin.sosial-media.index"),
                },
                {
                    name: __("Page"),
                    permission: 'read-page',
                    href: _route("admin.page.index"),
                },
            ],
        },

        {
            name: "Authorization",
            permission: [
                "read-action",
                "read-module",
                "read-role",
                "read-user",
            ],

            current: false,

            children: [
                {
                    name: __("User"),
                    href: _route("admin.user.index"),
                    permission: "read-user",
                },
                {
                    name: __("Action"),
                    href: _route("admin.action.index"),
                    permission: "read-action",
                },
                {
                    name: __("Module"),
                    href: _route("admin.module.index"),
                    permission: "read-module",
                },
                {
                    name: __("Role"),
                    href: _route("admin.role.index"),
                    permission: "read-role",
                },
            ],
        },
    ];

    const userNavigation = [
        { name: "Your Profile", href: _route("admin.profile.index") },
        // { name: 'Settings', href:  "#"},
        {
            name: "Sign out",
            href: "/logout",
            onClick: (e) => {
                e.preventDefault();
                setShowSignOutModal(true);
            },
        },
    ];

    async function signOut() {
        router.delete(_route("admin.auth.logout"));
    }

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Head title={main.title}>
                <link rel="icon" href={main.favicon} />
            </Head>
            <div>
                <Transition.Root show={sidebarOpen}>
                    <Dialog
                        as="div"
                        className="relative z-40 md:hidden"
                        onClose={setSidebarOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() =>
                                                    setSidebarOpen(false)
                                                }
                                            >
                                                <span className="sr-only">
                                                    Close sidebar
                                                </span>
                                                <XMarkIcon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex flex-shrink-0 items-center px-4">
                                        <img
                                            className="h-8 w-auto"
                                            src={main.logo}
                                            alt={main.title}
                                        />
                                    </div>
                                    <div className="mt-5 h-0 flex-1 overflow-y-auto">
                                        <nav className="space-y-1 px-2">
                                            {navigation.map((item) => {
                                                if (!can(item.permission))
                                                    return;
                                                return !item.children ? (
                                                    <div key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                                                "group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md"
                                                            )}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </div>
                                                ) : (
                                                    <Disclosure
                                                        as="div"
                                                        key={item.name}
                                                        className="space-y-1"
                                                    >
                                                        {({ open }) => (
                                                            <>
                                                                <Disclosure.Button
                                                                    className={classNames(
                                                                        item.current
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                                                        "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                                                                    )}
                                                                >
                                                                    <svg
                                                                        className={classNames(
                                                                            open
                                                                                ? "text-gray-400 rotate-90"
                                                                                : "text-gray-300",
                                                                            "mr-2 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400"
                                                                        )}
                                                                        viewBox="0 0 20 20"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            d="M6 6L14 10L6 14V6Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                    {item.name}
                                                                </Disclosure.Button>
                                                                <Disclosure.Panel className="space-y-1">
                                                                    {item.children.map(
                                                                        (
                                                                            subItem
                                                                        ) => {
                                                                            if (
                                                                                !can(
                                                                                    subItem.permission
                                                                                )
                                                                            )
                                                                                return;

                                                                            return (
                                                                                <Link
                                                                                    key={
                                                                                        subItem.name
                                                                                    }
                                                                                    as="a"
                                                                                    href={
                                                                                        subItem.href
                                                                                    }
                                                                                    className="group flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                                                >
                                                                                    {
                                                                                        subItem.name
                                                                                    }
                                                                                </Link>
                                                                            );
                                                                        }
                                                                    )}
                                                                </Disclosure.Panel>
                                                            </>
                                                        )}
                                                    </Disclosure>
                                                );
                                            })}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div
                                className="w-14 flex-shrink-0"
                                aria-hidden="true"
                            >
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
                        <div className="flex flex-shrink-0 items-center px-4">
                            <img
                                className="h-8 w-auto"
                                src={main.logo}
                                alt={main.title}
                            />
                        </div>
                        <div className="mt-5 flex flex-grow flex-col">
                            <nav
                                className="flex-1 space-y-1 bg-white px-2"
                                aria-label="Sidebar"
                            >
                                {navigation.map((item) => {
                                    if (!can(item.permission)) return;
                                    return !item.children ? (
                                        <div key={item.name}>
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                                    "group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md"
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        </div>
                                    ) : (
                                        <Disclosure
                                            as="div"
                                            key={item.name}
                                            className="space-y-1"
                                        >
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button
                                                        className={classNames(
                                                            item.current
                                                                ? "bg-gray-100 text-gray-900"
                                                                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                                            "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                                                        )}
                                                    >
                                                        <svg
                                                            className={classNames(
                                                                open
                                                                    ? "text-gray-400 rotate-90"
                                                                    : "text-gray-300",
                                                                "mr-2 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400"
                                                            )}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M6 6L14 10L6 14V6Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        {item.name}
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="space-y-1">
                                                        {item.children.map(
                                                            (subItem) => {
                                                                if (
                                                                    !can(
                                                                        subItem.permission
                                                                    )
                                                                )
                                                                    return;
                                                                return (
                                                                    <Link
                                                                        key={
                                                                            subItem.name
                                                                        }
                                                                        as="a"
                                                                        href={
                                                                            subItem.href
                                                                        }
                                                                        className="group flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                                    >
                                                                        {
                                                                            subItem.name
                                                                        }
                                                                    </Link>
                                                                );
                                                            }
                                                        )}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col md:pl-64">
                    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                        <button
                            type="button"
                            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3BottomLeftIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
                        <div className="flex flex-1 justify-between px-4">
                            <div className="flex flex-1"></div>
                            <div className="ml-4 flex items-center md:ml-6">
                                <button
                                    type="button"
                                    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <BellIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
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
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <Link
                                                            href={item.href}
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                            onClick={
                                                                item.onClick
                                                            }
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    {children}
                </div>
            </div>
            <DeleteModal />
            <ToastContainer />
            <Transition.Root show={showSignOutModal} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setShowSignOutModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ArrowLeftOnRectangleIcon
                                                    className="h-6 w-6 text-red-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    {__("Sign out?")}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        {__(
                                                            "Are you sure you want to sign out?"
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => {
                                                setShowSignOutModal(false);
                                                signOut();
                                            }}
                                        >
                                            {__("Sign out")}
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() =>
                                                setShowSignOutModal(false)
                                            }
                                            ref={cancelButtonRef}
                                        >
                                            {__("Cancel")}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}

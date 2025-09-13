import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Footer() {
    const { sosialMedias, mainSetting } = usePage().props;
    const navigation = {
        main: [
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Services", href: "/service" },
            { name: "Product", href: "/product" },
            { name: "Contact", href: "/contact" },

        ],
    };
    return (
        <>
            <footer
                className="mt-32 bg-gray-900 sm:mt-56"
                aria-labelledby="footer-heading"
            >
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>

                <div className="mx-auto max-w-7xl overflow-hidden px-6 ">
                    <nav
                        className="mt-10 -mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12 grid grid-cols-1 justify-items-center md:grid-cols-2 gap-4 px-3"
                        aria-label="Footer"
                    >
                        {navigation.main.map((item) => (
                            <div key={item.name} className="pb-6">
                                <Link
                                    href={item.href}
                                    className="text-lg leading-6 text-white "
                                >
                                    {item.name}
                                </Link>
                            </div>
                        ))}
                    </nav>
                </div>

                <div>
                    <p className="text-3xl font-bold text-center mt-10 text-gray-400">
                        Horizon Tech
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-6 pb-8 pt-10  lg:px-8 ">
                    <div className="mt-10 flex justify-center ">
                        <div className="flex space-x-6 md:order-2">
                            {sosialMedias.map((item) => (
                                <a href={item.link}>
                                    <img
                                        className="h-10 w-10 flex-none filter-grayscale"
                                        src={item.image}
                                        alt=""
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8  pt-8 md:flex md:items-center md:justify-between">
                        <div className="flex space-x-6 md:order-2">
                            <p className="mt-8 text-xs leading-5 text-white md:order-1 md:mt-0">
                                &copy; Designed by Horizon Tech
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

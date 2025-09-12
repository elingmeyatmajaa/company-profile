import react from "react";
import { Link, usePage } from "@inertiajs/react";
import Button from "@/Components/Buttons/Button";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { FadeIn, FadeInStagger } from "@/Components/FadeIn";
export default function IntroHomePage() {
    const { introduction } = usePage().props;
    return (
        // <div className="text-center mt-10">
        //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        //             <div ></div>
        //             <div>
        //                 <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
        //                     <h1 className="mt-4 text-3xl font-bold">
        //                         {introduction.title}
        //                     </h1>
        //                 </div>
        //                 <p
        //                     className="mt-3 text-lg leading-8 text-gray-600 text-justify"
        //                     dangerouslySetInnerHTML={{
        //                         __html: introduction.body,
        //                     }}
        //                 ></p>
        //                 <div className="mt-10 flex items-center gap-x-6">
        //                     <Link
        //                         href="#"
        //                         className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        //                     >
        //                         <Button>Get started</Button>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="mt-5 ">
        //             <img
        //                 className="h-auto w-auto rounded-xl"
        //                 src={introduction.image}
        //                 alt={introduction.title}
        //             />
        //         </div>
        //     </div>
        // </div>

        // <div className="mx-auto max-w-7xl">
        //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        //         <div>
        //             <h1 className="mt-4 max-w-lg font-bold text-gray-900 text-3xl">
        //                 {introduction.title}
        //             </h1>
        //             <p
        //                 className="mt-3 text-base leading-8 text-gray-600 text-justify"
        //                 dangerouslySetInnerHTML={{
        //                     __html: introduction.body,
        //                 }}
        //             ></p>
        //             <div className="mt-10 flex items-center gap-x-6">
        //                 <Link
        //                     href="#"
        //                     className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        //                 >
        //                     <Button>Get started</Button>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="mt-5 ">
        //             <img
        //                 className="h-auto w-auto rounded-xl"
        //                 src={introduction.image}
        //                 alt={introduction.title}
        //             />
        //         </div>
        //     </div>
        // </div>
        <div className="mx-auto max-w-7xl">
            <div className="relative isolate pt-14">
                <div className="mx-auto max-w-7xl  lg:flex lg:items-center  ">
                    <FadeIn>
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            {introduction.title}
                        </h1>
                        <p
                            className="mt-5 text-base leading-8 text-gray-600 text-justify"
                            dangerouslySetInnerHTML={{
                                __html: introduction.body,
                            }}
                        ></p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                    </FadeIn>
                    <FadeInStagger faster>
                        <FadeIn>
                        <img
                            className="h-auto w-auto"
                            src={introduction.image}
                            alt={introduction.title}
                        />
                        </FadeIn>
                       
                    </FadeInStagger>

                </div>
            </div>
        </div>
    );
}

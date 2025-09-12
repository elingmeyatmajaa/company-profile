import React from "react";
import moment from "moment";
import react from "react";
import { Link, usePage } from "@inertiajs/react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

export default function Slug() {
    const { page } = usePage().props;

    return (
        <>
            <NavBar />
            {/* <div className='mx-auto max-w-7xl px-8 justify-center'>
                    <h1 className='mt-20 text-center'>{page.title}</h1>
                    <p
                                        className="mt-20 text-lg leading-8 text-gray-600"
                                        dangerouslySetInnerHTML={{
                                            __html: page.body,
                                        }}
                                    ></p>
                    </div>
                     */}

            <div className="bg-slate-100		 px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-4xl">
                        {page.title}
                    </h2>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-8 justify-center">
            <p
                className="mt-20 text-center text-lg leading-8 text-gray-600"
                dangerouslySetInnerHTML={{
                    __html: page.body,
                }}
            ></p>
            </div>
           
            <Footer />
        </>
    );
}

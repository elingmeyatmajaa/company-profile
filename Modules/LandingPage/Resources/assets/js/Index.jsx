import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
    ArrowPathIcon,
    ChevronRightIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

import { Head, usePage, Link } from "@inertiajs/react";
import IntroHomePage from "./Components/IntroHomePage";
import AboutHomePage from "./Components/AboutHomePage";
import BlogHomePage from "./Components/BlogHomePage";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";
import ServiceHomePage from "./Components/ServiceHomePage";
import ProductHomePage from "./Components/ProductHomePage";
import Topbar from "./Components/Topbar";
import ContactHomePage from "./Components/ContactHomePage";

export default function Index() {
    const { main, errors } = usePage().props;
    
    return (
        <>
            <Head title={main?.title}>
                <link rel="icon" href={main?.favicon} />
            </Head>
            <NavBar />

            <div className="mx-auto max-w-7xl px-8 justify-center">
                <IntroHomePage />

                <AboutHomePage />

                <BlogHomePage />

                <ServiceHomePage />

                <ProductHomePage />



            </div>

            <Footer />
        </>
    );
}

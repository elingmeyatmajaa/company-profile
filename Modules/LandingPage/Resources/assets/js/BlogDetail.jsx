import react from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import moment from "moment";
import NavBar from "./Components/NavBar";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Footer from "./Components/Footer";
import Badge from "@/Components/Badge";
import { FadeIn, FadeInStagger } from "@/Components/FadeIn";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function BlogDetail() {
    const { blog, otherBlogs, categoryName } = usePage().props;

    return (
        <>
            <NavBar />

            <div className="">
                <div className="mt-10 mx-auto max-w-7xl px-8 justify-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 text-center mb-20 mt-15">
                        {blog.title}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 mt-10">
                        <div className="lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden object-cover object-right">
                            <FadeIn>
                                <img
                                    className="object-cover sm:w-96 sm:h-full rounded-lg lg:w-full"
                                    src={blog.image}
                                    alt=""
                                />
                            </FadeIn>
                        </div>
                        <div className="text-base leading-7 text-gray-700 lg:max-w-lg text-justify">
                            <FadeIn>
                                <p className="text-sm text-gray-500">
                                    <time dateTime={blog.created_at}>
                                        {moment(blog.created_at).format("LLL")}
                                    </time>
                                </p>

                                <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                                    <p className="text-sm">{categoryName}</p>
                                </span>

                                <div className="max-w-xl text-black">
                                    <p
                                        className="mt-6"
                                        dangerouslySetInnerHTML={{
                                            __html: blog.body,
                                        }}
                                    ></p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    <div className="container px-6 pt-10 mx-auto mt-8 md:mt-16">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            Informasi Lainnya
                        </h1>

                        <FadeInStagger>
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 sm:gap-2">
                                {otherBlogs.map((otherBlog) => (
                                    <FadeIn>
                                        <div className="flex min-w-0 gap-x-4 mt-5">
                                            <img
                                                className="object-cover w-20 h-20 rounded-lg "
                                                src={otherBlog.image}
                                                alt={otherBlog.slug}
                                            />
                                            <div className="min-w-0 flex-auto ml-4">
                                                <div className="flex flex-col justify-between lg:mx-6 px-6">
                                                    <Link
                                                        href={`/blog/${otherBlog.slug}`}
                                                        className="text-xl font-semibold text-gray-800 hover:underline hover:text-gray-600"
                                                    >
                                                        {" "}
                                                        {otherBlog.title}{" "}
                                                    </Link>
                                                    <span className="mt-5 text-sm text-gray-500 dark:text-gray-300">
                                                        <time
                                                            dateTime={
                                                                otherBlog.created_at
                                                            }
                                                        >
                                                            {moment(
                                                                otherBlog.created_at
                                                            ).format("LLL")}
                                                        </time>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </FadeInStagger>

                    </div>
                </div>
            </div>
            <div className="mt-10"></div>
            <Footer />
        </>
    );
}

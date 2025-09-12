import react from "react";
import { Link, usePage } from "@inertiajs/react";
import moment from "moment";
import { FadeIn, FadeInStagger } from "@/Components/FadeIn";

export default function BlogHomePage() {
    const { blogs, blogTitles } = usePage().props;

    return (
        <>
            <div className=" py-20 sm:py-30">
                <div className="text-center">
                    <FadeIn>
                        <h2 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {blogTitles.title}
                        </h2>

                        <p
                            className="mt-2 text-lg leading-8 text-gray-600"
                            dangerouslySetInnerHTML={{
                                __html: blogTitles.body,
                            }}
                        ></p>
                    </FadeIn>
                </div>
                <FadeInStagger>
                <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-4 px-1 mb-3">
                    {blogs.data.map((blog) => (
                        <article key={blog.id} className="p-10">
                            <Link href={`/blog/${blog.slug}`}>
                                <div className="relative w-full ">
                                    <FadeIn>
                                    <img
                                        src={blog.image}
                                        alt=""
                                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    />
                                    </FadeIn>
                                    
                                </div>
                            </Link>

                            <div className="max-w-xl">
                                <div className="mt-3 flex items-center gap-x-4 text-xs">
                                    <time
                                        dateTime={blog.created_at}
                                        className="text-gray-500"
                                    >
                                        {moment(blog.created_at).format("LLL")}
                                    </time>
                                </div>
                                <FadeIn>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <Link href={`/blog/${blog.slug}`}>
                                            <span className="absolute inset-0" />
                                            {blog.title}
                                        </Link>
                                    </h3>

                                    <p
                                        className="mt-3 text-lg leading-8 text-gray-600"
                                        dangerouslySetInnerHTML={{
                                            __html: blog.body,
                                        }}
                                    ></p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4 text-[#24326d]">
                                    <img
                                        src={blog.image}
                                        alt=""
                                        className="h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <div className="text-sm leading-6">
                                        <Link href={`/blog/${blog.slug}`}>
                                            Baca Selanjutnya &rarr;
                                        </Link>
                                    </div>
                                </div>
                                </FadeIn>

                            </div>
                        </article>
                    ))}
                </div>
                </FadeInStagger>
                {/* <div class="flex justify-between">
                    {blogs.data.map((blog) => (
                        <article key={blog.id} className="p-10" >
                            <Link href={`/blog/${blog.slug}`}>
                                <div className="relative w-full ">
                                    <img
                                        src={blog.image}
                                        alt=""
                                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    />
                                </div>
                            </Link>

                            <div className="max-w-xl">
                                <div className="mt-3 flex items-center gap-x-4 text-xs">
                                    <time
                                        dateTime={blog.created_at}
                                        className="text-gray-500"
                                    >
                                        {moment(blog.created_at).format("LLL")}
                                    </time>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <Link href={`/blog/${blog.slug}`}>
                                            <span className="absolute inset-0" />
                                            {blog.title}
                                        </Link>
                                    </h3>

                                    <p
                                        className="mt-3 text-lg leading-8 text-gray-600"
                                        dangerouslySetInnerHTML={{
                                            __html: blog.body,
                                        }}
                                    ></p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4 text-[#ab0e1c]">
                                    <img
                                        src={blog.image}
                                        alt=""
                                        className="h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <div className="text-sm leading-6">
                                        <Link href={`/blog/${blog.slug}`}>
                                            Baca Selanjutnya &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div> */}
                {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-16 lg:max-w-none">
                        {blogs.data.map((blog) => (
                            
                            <Link key={blog.title} href={`/blog/${blog.slug}`} className="flex flex-col">
                                <div className="relative w-full">
                                    <img
                                        src={blog.image}
                                        alt=""
                                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    />

                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>

                            </Link>
                        ))}
                    </dl>
                </div> */}
                {/* <div className=" mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {blogs.data.map((blog) => (
                        <article
                            key={blog.id}
                            className="flex flex-col items-start justify-between"
                        >
                            <Link href={`/blog/${blog.slug}`}>
                                <div className="relative w-full ">
                                    <img
                                        src={blog.image}
                                        alt=""
                                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                            </Link>

                            <div className="max-w-xl">
                                <div className="mt-3 flex items-center gap-x-4 text-xs">
                                    <time
                                        dateTime={blog.created_at}
                                        className="text-gray-500"
                                    >
                                        {moment(blog.created_at).format("LLL")}
                                    </time>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <Link href={`/blog/${blog.slug}`}>
                                            <span className="absolute inset-0" />
                                            {blog.title}
                                        </Link>
                                    </h3>

                                    <p
                                        className="mt-3 text-lg leading-8 text-gray-600"
                                        dangerouslySetInnerHTML={{
                                            __html: blog.body,
                                        }}
                                    ></p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4 text-[#ab0e1c]">
                                    <img
                                        src={blog.image}
                                        alt=""
                                        className="h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <div className="text-sm leading-6">
                                        <Link href={`/blog/${blog.slug}`}>
                                            Baca Selanjutnya &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div> */}
            </div>
        </>
    );
}

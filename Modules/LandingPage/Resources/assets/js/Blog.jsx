import moment from "moment";
import react from "react";
import { Link, usePage } from "@inertiajs/react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { FadeIn, FadeInStagger } from "@/Components/FadeIn";

export default function Blog() {
    const { blogs } = usePage().props;
    return (
        <>
            <NavBar />
            <div className="" id="blog">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="px-4 sm:px-6 lg:px-0">
                        {/* judul */}
                        <div className="text-left mt-10">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-6 mt-12">
                                <span className="text-[#24326d]">Blog</span> Terkini
                            </h2>
                            <p className="font-medium">Kumpulan blog terkini</p>
                        </div>

                        {/* Blog */}
                        <FadeInStagger>
                        <div className="pt-3 sm-pt-6 pb-10 sm:pb-10 ">
                            <div className="mx-auto max-w-7xl ">
                                <div className="mx-auto  grid grid-cols-1 justify-items-center md:grid-cols-3 gap-4 px-3 mb-3">
                                    {blogs.data.map((blog) => (
                                        <FadeIn>
                                            <article key={blog.id} className="mt-10 flex flex-col items-start justify-between border border-zinc-400 rounded-2xl bg-zinc-100 pb-2">
                                            <Link href={`/blog/${blog.slug}`}>
                                            <div className="relative w-full">
                                                <img
                                                    src={blog.image}
                                                    alt=""
                                                    className="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                                />
                                            </div>
                                            </Link>
                                            
                                            <div className="max-w-xl px-2">
                                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                                    <time dateTime={blog.created_at} className="text-gray-500">
                                                        {moment(blog.created_at).format('LLL')}
                                                    </time>
                                                    <a
                                                        href='#'
                                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                                    >
                                                        {blog.category}
                                                    </a>
                                                </div>
                                                <div className="group relative">
                                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                        <Link href={`/blog/${blog.slug}`}>
                                                            <span className="absolute inset-0" />
                                                            {blog.title}
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <div className="flex items-center flex-wrap mt-6">
                                                    <Link href={`/blog/${blog.slug}`} className=" text-base text-[#24326d] font-semibold shadow-sm e-gray-900 hover:scale-105 transition-all duration-300"> Baca Selanjutnya &rarr;</Link>
                                                </div>
                                            </div>
                                        </article>
                                        </FadeIn>
                                        
                                    ))}
                                </div>
                            </div>
                        </div>
                        </FadeInStagger>
                       
                    </div>
                </div>
            </div>
            <Footer/>
        </>
       
    );
}
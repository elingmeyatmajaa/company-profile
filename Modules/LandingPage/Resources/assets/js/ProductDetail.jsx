import react from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Head, Link, usePage } from "@inertiajs/react";
import { FadeIn } from "@/Components/FadeIn";

export default function ProductDetail() {
    const { product } = usePage().props;

    return (
        <>
            <NavBar />
                <div className="mt-10 mx-auto max-w-7xl px-8 justify-center">
                    <FadeIn>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 text-center mb-20 mt-15">
                        {product.title}
                    </h2>

                    </FadeIn>
                    
                    <div className="mt-10 mx-auto max-w-7xl px-6 lg:px-8">
                        <FadeIn>
                        <div className="grid md:grid-cols-2 gap-4 mt-10">
                            <div className="lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden object-cover object-right">
                                <img
                                    className="object-cover md:w-96 sm:h-full rounded-2xl lg:w-full"
                                    src={product.image}
                                    alt=""
                                />
                            </div>

                            <div className="text-base leading-7 text-gray-700 lg:max-w-lg text-justify">
                                <div className="max-w-xl text-black">
                                    <p
                                        className="mt-6"
                                        dangerouslySetInnerHTML={{
                                            __html: product.body,
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>
                        </FadeIn>
                        
                        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32 mt-10" />

                    </div>
                </div>
            <div className="mt-10"></div>

            <Footer />
            
        </>
    );
}

import react from "react";
import { Link, usePage } from "@inertiajs/react";
import { FadeIn, FadeInStagger } from "@/Components/FadeIn";

export default function AboutHomePage() {
    const { about, aboutPoints } = usePage().props;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <div className="mt-5 ">
                    <FadeIn>
                        <img
                            className="h-auto w-auto rounded-xl"
                            src={about.image}
                            alt={about.title}
                        />
                    </FadeIn>
                </div>
                <FadeInStagger faster>
                <div>          
                    <FadeIn>
                    <h1 className="mt-4 max-w-lg font-bold text-gray-900 text-2xl">
                        {about.title}
                    </h1>
                    <p
                        className="mt-3 text-base leading-8 text-gray-600 text-justify"
                        dangerouslySetInnerHTML={{
                            __html: about.body,
                        }}
                    ></p>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-4 mt-1">
                        {aboutPoints.map((item) => (
                            <FadeIn>
                                <div className="flex min-w-0 gap-x-4">
                                <img
                                    className="h-12 w-12 flex-none "
                                    src={item.image}
                                    alt=""
                                />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                        {item.title}
                                    </p>
                                    <p
                                        className=" text-base leading-8 text-gray-600 text-justify"
                                        dangerouslySetInnerHTML={{
                                            __html: item.body,
                                        }}
                                    ></p>
                                </div>
                            </div>
                            </FadeIn>
                            
                        ))}
                    </div>
                </div>
                </FadeInStagger>
               
            </div>
        </>
    );
}

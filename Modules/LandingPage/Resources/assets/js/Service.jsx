import react from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Link, usePage } from "@inertiajs/react";
import __ from "@/helpers/__";
import { FadeIn, FadeInStagger } from "@/Components/FadeIn";

export default function Service() {
    const { services, serviceTitles } = usePage().props;

    return (
        <>
            <NavBar />

            <div className="mt-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {serviceTitles.title}
                    </h2>

                    <p
                        className="mt-2 text-lg leading-8 text-gray-600"
                        dangerouslySetInnerHTML={{
                            __html: serviceTitles.body,
                        }}
                    ></p>
                </div>
                <FadeInStagger>
                    <div className="">
                        <div className="grid grid-cols-1 justify-items-center md:grid-cols-4 gap-4 px-3 mb-3">
                            {services.data.map((service) => (
                               <FadeIn>
                                <Link
                                    key={service.id}
                                    href={`/service/${service.slug}`}
                                    className="group"
                                >
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 mt-10">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900">
                                        {service.title}
                                    </h3>

                                    <p
                                        className="mt-1 text-lg leading-8 text-gray-600"
                                        dangerouslySetInnerHTML={{
                                            __html: service.body,
                                        }}
                                    ></p>
                                </Link>
                               </FadeIn>
                               
                            ))}
                        </div>
                    </div>
                </FadeInStagger>
            </div>

            <Footer />
        </>
    );
}

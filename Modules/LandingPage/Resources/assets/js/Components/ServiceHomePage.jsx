import react from "react";
import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/react";
import { FadeIn, FadeInStagger } from "@/Components/FadeIn";

export default function ServiceHomePage() {
    const { services, serviceTitles } = usePage().props;

    return (
        <>
            <div className="py-10 sm:py-30">
                <div className="text-center">
                    <FadeIn>
                    <h2 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {serviceTitles.title}
                    </h2>
                    <p
                        className="mt-2 text-lg leading-8 text-gray-600"
                        dangerouslySetInnerHTML={{
                            __html: serviceTitles.body,
                        }}
                    ></p>
                    </FadeIn>
                </div>
                <FadeInStagger>
                <div className="grid grid-cols-1 justify-items-center md:grid-cols-4 gap-4 px-1 mb-3">
                    {services.map((service) => (
                        <FadeIn>
                            <Link
                            key={service.title}
                            href={`/service/${service.slug}`}
                            className="flex flex-col mt-"
                        >
                            <div className="relative w-full">
                                <img
                                    src={service.image}
                                    alt=""
                                    className="mt-10"
                                />
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                {service.title}
                            </h3>

                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p
                                    className="mt-3 text-lg leading-8 text-gray-600"
                                    dangerouslySetInnerHTML={{
                                        __html: service.body,
                                    }}
                                ></p>
                            </dd>
                        </Link>
                        </FadeIn>
                        
                    ))}
                </div>
                </FadeInStagger>
               

                
            </div>
            
            
        </>
    );
}

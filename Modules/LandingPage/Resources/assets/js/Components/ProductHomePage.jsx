import react from "react";
import { Link, usePage } from "@inertiajs/react";
import Button from "@/Components/Buttons/Button";
import _route from "@/helpers/_route";
import __ from "@/helpers/__";
import { FadeIn, FadeInStagger } from "@/Components/FadeIn";

export default function ProductHomePage() {
    const { products, productTitles } = usePage().props;

    return (
        <div className="py-20 sm:py-30">
            <div className="text-center">
                <FadeIn>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {productTitles.title}
                    </h2>

                    <p
                        className="mt-2 text-lg leading-8 text-gray-600"
                        dangerouslySetInnerHTML={{
                            __html: productTitles.body,
                        }}
                    ></p>
                </FadeIn>
            </div>
            <FadeInStagger>
                <div className="mt-10">
                    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-4 px-3 mb-3">
                        {products.data.map((product) => (
                            <FadeIn>
                                <Link
                                    key={product.id}
                                    href={`/product/${product.slug}`}
                                    className="group"
                                >
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                        {product.title}
                                    </h3>

                                    <p
                                        className="mt-1 text-lg text-gray-600"
                                        dangerouslySetInnerHTML={{
                                            __html: product.body,
                                        }}
                                    ></p>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </FadeInStagger>
        </div>
    );
}

import moment from "moment";
import react from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { FadeIn, FadeInStagger } from "@/Components/FadeIn";
import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
   const { data, setData, post, processing, reset, errors } = useForm({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      message: "",
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      post(route("landing.page.contact.store"), {
        onSuccess: () => reset(),
      });
    };
     
        
    return (
        <>
            <NavBar />
            <div className="" id="blog">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="px-4 sm:px-6 lg:px-0">
                        <div className="text-left mt-10">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-6 mt-12">
                                <span className="text-[#24326d]">Contact</span>
                            </h2>
                        </div>

                        <FadeInStagger>
                            <div className="relative isolate bg-white">
                                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                                    <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
                                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                                            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
                                                >
                                                    <defs>
                                                        <pattern
                                                            x="100%"
                                                            y={-1}
                                                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                                            width={200}
                                                            height={200}
                                                            patternUnits="userSpaceOnUse"
                                                        >
                                                            <path
                                                                d="M130 200V.5M.5 .5H200"
                                                                fill="none"
                                                            />
                                                        </pattern>
                                                    </defs>
                                                    <rect
                                                        width="100%"
                                                        height="100%"
                                                        strokeWidth={0}
                                                        className="fill-white"
                                                    />
                                                    <svg
                                                        x="100%"
                                                        y={-1}
                                                        className="overflow-visible fill-gray-50"
                                                    >
                                                        <path
                                                            d="M-470.5 0h201v201h-201Z"
                                                            strokeWidth={0}
                                                        />
                                                    </svg>
                                                    <rect
                                                        fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                                                        width="100%"
                                                        height="100%"
                                                        strokeWidth={0}
                                                    />
                                                </svg>
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute top-[calc(100%-13rem)] -left-56 hidden transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
                                                >
                                                    <div
                                                        style={{
                                                            clipPath:
                                                                "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                                                        }}
                                                        className="aspect-1155/678 w-288.75 bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-10"
                                                    />
                                                </div>
                                            </div>
                                            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                                Get in touch
                                            </h2>
                                            <p className="mt-6 text-lg/8 text-gray-600">
                                                Proin volutpat consequat
                                                porttitor cras nullam gravida
                                                at. Orci molestie a eu arcu. Sed
                                                ut tincidunt integer elementum
                                                id sem. Arcu sed malesuada et
                                                magna.
                                            </p>
                                            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                                                <div className="flex gap-x-4">
                                                    <dt className="flex-none">
                                                        <span className="sr-only">
                                                            Address
                                                        </span>
                                                        <BuildingOffice2Icon
                                                            aria-hidden="true"
                                                            className="h-7 w-6 text-gray-400"
                                                        />
                                                    </dt>
                                                    <dd>
                
                                                        Yogyakarta
                                                    </dd>
                                                </div>
                                                <div className="flex gap-x-4">
                                                    <dt className="flex-none">
                                                        <span className="sr-only">
                                                            Telephone
                                                        </span>
                                                        <PhoneIcon
                                                            aria-hidden="true"
                                                            className="h-7 w-6 text-gray-400"
                                                        />
                                                    </dt>
                                                    <dd>
                                                        <a
                                                            href="tel:+1 (555) 234-5678"
                                                            className="hover:text-gray-900"
                                                        >
                                                            +628123456
                                                        </a>
                                                    </dd>
                                                </div>
                                                <div className="flex gap-x-4">
                                                    <dt className="flex-none">
                                                        <span className="sr-only">
                                                            Email
                                                        </span>
                                                        <EnvelopeIcon
                                                            aria-hidden="true"
                                                            className="h-7 w-6 text-gray-400"
                                                        />
                                                    </dt>
                                                    <dd>
                                                        <a
                                                            href="mailto:hello@example.com"
                                                            className="hover:text-gray-900"
                                                        >
                                                            hello@example.com
                                                        </a>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
                                    >
                                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-900">
                                                        First name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        value={data.first_name}
                                                        onChange={(e) =>
                                                            setData(
                                                                "first_name",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mt-2 block w-full rounded-md border px-3 py-2"
                                                    />
                                                    {errors.first_name && (
                                                        <div className="text-red-500 text-sm">
                                                            {errors.first_name}
                                                        </div>
                                                    )}
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-900">
                                                        Last name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        value={data.last_name}
                                                        onChange={(e) =>
                                                            setData(
                                                                "last_name",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mt-2 block w-full rounded-md border px-3 py-2"
                                                    />
                                                    {errors.last_name && (
                                                        <div className="text-red-500 text-sm">
                                                            {errors.last_name}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="sm:col-span-2">
                                                    <label className="block text-sm font-semibold text-gray-900">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={data.email}
                                                        onChange={(e) =>
                                                            setData(
                                                                "email",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mt-2 block w-full rounded-md border px-3 py-2"
                                                    />
                                                    {errors.email && (
                                                        <div className="text-red-500 text-sm">
                                                            {errors.email}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="sm:col-span-2">
                                                    <label className="block text-sm font-semibold text-gray-900">
                                                        Phone number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="phone_number"
                                                        value={
                                                            data.phone_number
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "phone_number",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mt-2 block w-full rounded-md border px-3 py-2"
                                                    />
                                                    {errors.phone_number && (
                                                        <div className="text-red-500 text-sm">
                                                            {
                                                                errors.phone_number
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="sm:col-span-2">
                                                    <label className="block text-sm font-semibold text-gray-900">
                                                        Message
                                                    </label>
                                                    <textarea
                                                        name="message"
                                                        rows={4}
                                                        value={data.message}
                                                        onChange={(e) =>
                                                            setData(
                                                                "message",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mt-2 block w-full rounded-md border px-3 py-2"
                                                    ></textarea>
                                                    {errors.message && (
                                                        <div className="text-red-500 text-sm">
                                                            {errors.message}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="mt-8 flex justify-end">
                                                <button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="rounded-md bg-indigo-600 px-4 py-2 text-white disabled:opacity-50"
                                                >
                                                    {processing
                                                        ? "Sending..."
                                                        : "Send message"}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </FadeInStagger>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

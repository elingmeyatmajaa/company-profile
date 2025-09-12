import ApplicationLogo from '@/Components/ApplicationLogo';
import __ from '@/helpers/__';
import { Link, usePage } from '@inertiajs/react';

export default function Guest({ children }) {
    const { main } = usePage().props;

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-r from-indigo-500 ">
                <img className="mx-auto h-12 w-auto" src={"/storage/" + main.logo} alt={main.title} />

                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    {__('SIMPADU SIANTAR')}

                </h2>

            {/* <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div> */}

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}

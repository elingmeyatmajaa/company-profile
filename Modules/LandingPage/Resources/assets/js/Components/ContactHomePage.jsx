import { useForm } from "@inertiajs/react";

export default function ContactHomePage() {
  const { data, setData, post, processing, reset, errors } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("contact.store"), {
      onSuccess: () => reset(),
    });
  };

  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Informasi Kontak */}
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Silakan hubungi kami melalui form di samping.
            </p>
          </div>
        </div>

        {/* Form */}
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
                  onChange={(e) => setData("first_name", e.target.value)}
                  className="mt-2 block w-full rounded-md border px-3 py-2"
                />
                {errors.first_name && (
                  <div className="text-red-500 text-sm">{errors.first_name}</div>
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
                  onChange={(e) => setData("last_name", e.target.value)}
                  className="mt-2 block w-full rounded-md border px-3 py-2"
                />
                {errors.last_name && (
                  <div className="text-red-500 text-sm">{errors.last_name}</div>
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
                  onChange={(e) => setData("email", e.target.value)}
                  className="mt-2 block w-full rounded-md border px-3 py-2"
                />
                {errors.email && (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Phone number
                </label>
                <input
                  type="text"
                  name="phone_number"
                  value={data.phone_number}
                  onChange={(e) => setData("phone_number", e.target.value)}
                  className="mt-2 block w-full rounded-md border px-3 py-2"
                />
                {errors.phone_number && (
                  <div className="text-red-500 text-sm">{errors.phone_number}</div>
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
                  onChange={(e) => setData("message", e.target.value)}
                  className="mt-2 block w-full rounded-md border px-3 py-2"
                ></textarea>
                {errors.message && (
                  <div className="text-red-500 text-sm">{errors.message}</div>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={processing}
                className="rounded-md bg-indigo-600 px-4 py-2 text-white disabled:opacity-50"
              >
                {processing ? "Sending..." : "Send message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

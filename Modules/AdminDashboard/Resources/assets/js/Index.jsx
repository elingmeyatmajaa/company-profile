import Breadcrumb from "@/Components/Breadcrumb";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import number from "@/Components/Formaterrs/number";
import Grid from "@/Components/Grid";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import react from "react";

export default function Index({blogs, products, services}) {

   
  return (
    <>
        <Container>
            {/* HEADER */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Dashboard Overview 👋
                </h1>
                <p className="text-sm text-gray-500">
                    Welcome back! Here's what's happening today.
                </p>
            </div>

            {/* BREADCRUMB */}
            <Breadcrumb
                title={__("Dashboard")}
                items={[
                    {
                        name: __("Dashboard"),
                        href: _route('admin.dashboard.index')
                    },
                ]}
            />

            {/* STATS */}
            <Grid cols={3}>
                {/* BLOG */}
                <Grid.Span1>
                    <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-indigo-500 to-indigo-700 text-white">
                        <Card.Body>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm opacity-80">Total Blogs</div>
                                    <div className="text-3xl font-bold">
                                        {number(blogs)}
                                    </div>
                                </div>
                                <div className="text-4xl opacity-80">
                                    📝
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Grid.Span1>

                {/* PRODUCT */}
                <Grid.Span1>
                    <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
                        <Card.Body>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm opacity-80">Total Products</div>
                                    <div className="text-3xl font-bold">
                                        {number(products)}
                                    </div>
                                </div>
                                <div className="text-4xl opacity-80">
                                    📦
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Grid.Span1>

                {/* SERVICE */}
                <Grid.Span1>
                    <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-sky-500 to-sky-700 text-white">
                        <Card.Body>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm opacity-80">Total Services</div>
                                    <div className="text-3xl font-bold">
                                        {number(services)}
                                    </div>
                                </div>
                                <div className="text-4xl opacity-80">
                                    ⚙️
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Grid.Span1>
            </Grid>

            {/* EXTRA SECTION */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* RECENT ACTIVITY */}
                <Card className="rounded-2xl shadow-md">
                    <Card.Body>
                        <h3 className="text-lg font-semibold mb-4">
                            Recent Activity
                        </h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>✔ New blog created</li>
                            <li>✔ Product updated</li>
                            <li>✔ Service added</li>
                        </ul>
                    </Card.Body>
                </Card>

                {/* QUICK ACTION */}
                <Card className="rounded-2xl shadow-md">
                    <Card.Body>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Actions
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#"
                                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-500"
                            >
                                + Add Blog
                            </a>

                            <a
                                href="#"
                                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-500"
                            >
                                + Add Product
                            </a>

                            <a
                                href="#"
                                className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm hover:bg-sky-500"
                            >
                                + Add Service
                            </a>
                        </div>
                    </Card.Body>
                </Card>

            </div>
        </Container>
    </>
)
}


Index.layout =(page) => <Master children={page}/>
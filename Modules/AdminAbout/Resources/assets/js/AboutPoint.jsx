import Breadcrumb from "@/Components/Breadcrumb";
import Master from "@/Layouts/Master";
import _route from "@/helpers/_route";
import react from "react";
export default function AboutPoint() {
    return (
        <>
            <Container>
            <Breadcrumb
                    title={__('About Point')}
                    items={[
                        {
                            name: __('Home'),
                            href: "_route('admin.dashboard.index')",
                            current: false,
                        },
                        {
                            name: __("Main Setting"),
                            href: _route("admin.about.point"),
                            current: true,
                        },
                    ]}
                />
            </Container>
        </>
        
    );
}

AboutPoint.layout = (page) => <Master children={page}/>;

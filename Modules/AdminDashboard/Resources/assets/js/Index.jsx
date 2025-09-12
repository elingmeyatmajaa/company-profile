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
            <Breadcrumb
                title={__("Dashboard")}
                items={[
                    {
                        name: __("Dashboard"),
                        href: _route('admin.dashboard.index')
                    },
                ]}
            />
            <Grid cols={3}>
                <Grid.Span1>
                    <Card>
                        <Card.Body>
                        <div className="text-3xl text-center">{number(blogs)}</div>
                        <div className="text-xl mb-2 text-center">{__('Blog')}</div>
                        </Card.Body>
                    </Card>
                </Grid.Span1>
                <Grid.Span1>
                    <Card>
                        <Card.Body>
                        <div className="text-3xl text-center">{number(products)}</div>
                        <div className="text-xl mb-2 text-center">{__('Product')}</div>
                        </Card.Body>
                    </Card>
                </Grid.Span1>
                <Grid.Span1>
                    <Card>
                        <Card.Body>
                        <div className="text-3xl text-center">{number(services)}</div>
                        <div className="text-xl mb-2 text-center">{__('Service')}</div>
                        </Card.Body>
                    </Card>
                </Grid.Span1>
            </Grid>
            </Container>
        </>
    )
}


Index.layout =(page) => <Master children={page}/>
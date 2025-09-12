import Master from "@/Layouts/Master";
import react from "react";
import { router, useForm } from "@inertiajs/react";
import _route from "@/helpers/_route";
import saySomething from "@/helpers/saySomething";
import Container from "@/Components/Container";
import Breadcrumb from "@/Components/Breadcrumb";
import __ from "@/helpers/__";
import Grid from "@/Components/Grid";
import Form from "@/Components/Form";
import Card from "@/Components/Card";
import FormGroup from "@/Components/FormGroup";
import FormLabel from "@/Components/Forms/FormLabel";
import TextForm from "@/Components/Forms/TextForm";
import Button from "@/Components/Buttons/Button";

export default function Create({ errors, referer, roles }) {
    const { data, setData } = useForm({
        name: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(_route("admin.category-blog.store"), data, {
            onSuccess: () => {
                saySomething();
            },
         });
    }
    return (
        <>
            <Container>
            <Breadcrumb
                    title={__("Category Blog Create")}
                    items={[
                        {
                            name: __("Home"),
                            href: _route("admin.category-blog.index"),
                            current: false,
                        },
                        {
                            name: __("About Point"),
                            href: _route("admin.category-blog.index"),
                            current: false,
                        },
                        {
                            name: __("Create"),
                            href: "_route('admin.category-blog.create')",
                            current: true,
                        },
                    ]}
                />
                <Grid>
                    <Grid.Span1>
                        <Form onSubmit={handleSubmit}>
                        <Card>
                            <Card.Header>
                                <Card.Title></Card.Title>
                            </Card.Header>
                            <Card.Body>
                                

                                <FormGroup>
                                <FormLabel>{__('Name')}</FormLabel>

                                    <TextForm 
                                        name={"name"}
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        error={errors.name}
                                    />
                                </FormGroup>
                                <div className="pt-5">
                                    <div className="flex justify-end">
                                        <Button.Light
                                            className="mr-3"
                                            href={referer}
                                        >
                                            {__('Cancel')}
                                        </Button.Light>
                                        <Button
                                            type="submit"
                                        >
                                            {__('Save')}
                                        </Button>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                        </Form>
                       
                    </Grid.Span1>
                </Grid>
            </Container>
        </>
    );
}

Create.layout = (page) => <Master children={page} />;

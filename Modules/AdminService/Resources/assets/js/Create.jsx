import Breadcrumb from "@/Components/Breadcrumb";
import Container from "@/Components/Container";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import react from "react";
import { router, useForm } from "@inertiajs/react";
import Grid from "@/Components/Grid";
import Form from "@/Components/Form";
import Card from "@/Components/Card";
import FormGroup from "@/Components/FormGroup";
import FormLabel from "@/Components/Forms/FormLabel";
import FileForm from "@/Components/FileForm";
import TextForm from "@/Components/Forms/TextForm";
import HtmlForm from "@/Components/Forms/HtmlForm";
import Button from "@/Components/Buttons/Button";
import saySomething from "@/helpers/saySomething";

export default function Create({ errors, referer, roles }) {
    const { data, setData } = useForm({
        title: "",
        body: "",
        image: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(_route("admin.service.store"), data, {
            onSuccess: () => {
                saySomething();
            },
         });
    }
    return (
        <>
            <Container>
                <Breadcrumb
                    title={__("Service")}
                    items={[
                        {
                            name: __("Home"),
                            href: _route("admin.dashboard.index"),
                            current: false,
                        },
                        {
                            name: __("Service"),
                            href: _route("admin.service.index"),
                            current: false,
                        },
                        {
                            name: __("Create"),
                            href: "_route('admin.service.create')",
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
                                <FormLabel>{__('Image')}</FormLabel>
                                <FileForm 
                                    value={data.image}
                                    onChange={e => setData('image', e.target.value)}
                                    error={errors.image}
                                    id="image"
                                    name="image"
                                />
                                </FormGroup>

                                <FormGroup>
                                <FormLabel>{__('Title')}</FormLabel>

                                    <TextForm 
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        error={errors.title}
                                        id="title"
                                        name="title"
                                    />
                                </FormGroup>

                                <FormGroup>
                                <FormLabel>{__('Body')}</FormLabel>
                                <HtmlForm 
                                    value={data.body}
                                    onChange={e => setData('body', e.target.value)}
                                    error={errors.body}
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

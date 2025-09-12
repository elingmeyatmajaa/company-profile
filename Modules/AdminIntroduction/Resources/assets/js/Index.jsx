import Container from "@/Components/Container";
import react from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import FileForm from "@/Components/FileForm";
import Form from "@/Components/Form";
import FormLabel from "@/Components/Forms/FormLabel";
import Grid from "@/Components/Grid";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import { router, useForm } from "@inertiajs/react";
import FormGroup from "@/Components/FormGroup";
import TextForm from "@/Components/Forms/TextForm";
import HtmlForm from "@/Components/Forms/HtmlForm";
import saySomething from "@/helpers/saySomething";

export default function Index({introduction, errors}) {
    const {data, setData} =useForm({
        ...introduction.data,
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        router.post(_route("admin.introduction.update"),{ ...data, _method: "PUT" },{
            onSuccess: () => {
                saySomething();
            },
        });
    };
    return (
        <>
            <Container>
            <Breadcrumb 
            title={__("Introduction")}
            items={[
                {
                    name: __("Home"),
                    href: _route("admin.dashboard.index"),
                    current: false,
                },
                {
                    name: __("Introduction"),
                    href: _route("admin.introduction.index"),
                    current: true,
                },
               
            ]}
            />
            <Form onSubmit={handleSubmit}>
                <Grid cols={2}>
                    <Grid.Span1>
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
                                <Button type="submit" >{__("Update")}</Button>

                            </Card.Body>
                        </Card>
                    </Grid.Span1>
                </Grid>
            </Form>
        </Container>
        </>
    );
}

Index.layout = (page) => <Master children={page} />;
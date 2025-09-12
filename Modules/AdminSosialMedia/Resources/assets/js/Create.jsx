import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import FileForm from "@/Components/FileForm";
import Form from "@/Components/Form";
import FormGroup from "@/Components/FormGroup";
import FormLabel from "@/Components/Forms/FormLabel";
import SelectForm from "@/Components/Forms/SelectForm";
import TextForm from "@/Components/Forms/TextForm";
import Grid from "@/Components/Grid";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import saySomething from "@/helpers/saySomething";
import { router, useForm } from "@inertiajs/react";
export default function Create({ referer, errors}) {
    
    const { data, setData, reset } = useForm({
        name: '',
        link:  '',
        image: '' 
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(_route("admin.sosial-media.store"), data, {
            onSuccess: () => {
                saySomething();
            },
        });
    };
    return (
        <>
            <Container>
            <Breadcrumb
                name={__('Social Media')}
                items={[
                    { name: __('Home'), href: _route('admin.dashboard.index'), current: false },
                    { name: __('Social Media'), href: _route('admin.sosial-media.index'), current: false },
                    { name: __('Create'), href: "_route('admin.sosial-media.create')", current: true },
                ]}
            />
            <Grid cols={2}>
                    <Grid.Span1 >
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
                                <FormLabel>{__('Name')}</FormLabel>

                                    <TextForm 
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        error={errors.name}
                                        id="name"
                                        name="name"
                                    />
                                </FormGroup>

                                <FormGroup>
                                <FormLabel>{__('Link')}</FormLabel>

                                    <TextForm 
                                        value={data.link}
                                        onChange={e => setData('link', e.target.value)}
                                        error={errors.link}
                                        id="link"
                                        name="link"
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
import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import Form from "@/Components/Form";
import FormGroup from "@/Components/FormGroup";
import FormLabel from "@/Components/Forms/FormLabel";
import TextForm from "@/Components/Forms/TextForm";
import Grid from "@/Components/Grid";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import saySomething from "@/helpers/saySomething";
import { router, useForm } from "@inertiajs/react";

export default function Create({ errors, referer }) {

    const { data, setData, reset } = useForm({
        name: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        router.post(_route('admin.action.store'), data, {
            onSuccess: () => {
                saySomething();
                reset();
            }
        })
    }
    return (
        <>
            <Container>
                <Breadcrumb
                    title={__("Action")}
                    items={[
                        {
                            name: __("Home"),
                            href: "_route('admin.dashboard.index')",
                            current: false,
                        },
                        {
                            name: __("Action"),
                            href: _route("admin.action.index"),
                            current: false,
                        },
                        {
                            name: __("Create"),
                            href: "_route('admin.action.create')",
                            current: true,
                        },
                    ]}
                />

                <Grid>
                    <Grid.Span1>
                        <Form onSubmit={handleSubmit}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <Card.TitleText className="text-2xl mb-0">
                                            {__("Action Create Form")}
                                        </Card.TitleText>
                                        <Card.TitleDescription className="mt-1 max-w-2xl text-sm text-gray-500">
                                            {__("Please fill form below")}
                                        </Card.TitleDescription>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <FormGroup>
                                        <FormLabel>{__("Name")}</FormLabel>
                                        <TextForm
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            error={errors.name}
                                        />
                                    </FormGroup>
                                    <div className="pt-5">
                                        <div className="flex justify-end">
                                            <Button.Light
                                                className="mr-3"
                                                href={referer}
                                            >
                                                {__("Cancel")}
                                            </Button.Light>
                                            <Button type="submit">
                                                {__("Save")}
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

Create.layout = (page) => <Master>{page}</Master>;

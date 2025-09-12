import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import Form from "@/Components/Form";
import FormGroup from "@/Components/FormGroup";
import CheckGroup from "@/Components/Forms/CheckGroup";
import FormLabel from "@/Components/Forms/FormLabel";
import Grid from "@/Components/Grid";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import React from "react";
import { router, useForm } from "@inertiajs/react";
import saySomething from "@/helpers/saySomething";
import CheckForm from "@/Components/Forms/CheckForm";
import TextForm from "@/Components/Forms/TextForm";
import { includes, xor } from "lodash";

export default function Create({ errors, referer, actions }) {

    const { data, setData, reset } = useForm({
        name: '',
        actions: []
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        router.post(_route('admin.module.store'), data, {
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
                    title={__("Module")}
                    items={[
                        {
                            name: __("Home"),
                            href: "_route('admin.dashboard.index')",
                            current: false,
                        },
                        {
                            name: __("Module"),
                            href: _route("admin.module.index"),
                            current: false,
                        },
                        {
                            name: __("Create"),
                            href: "_route('admin.module.create')",
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
                                            {__("Module Create Form")}
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
                                    <FormGroup>
                                        <FormLabel>{__("Actions")}</FormLabel>
                                        <CheckGroup error={errors.actions}>
                                            <Grid>
                                                {actions.map(
                                                    (action, index) => (
                                                        <Grid.Span1 key={index}>
                                                            <CheckForm
                                                                name="actions[]"
                                                                id={`actions-${index}`}
                                                                checked={includes(
                                                                    data.actions,
                                                                    action.id
                                                                )}
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "actions",
                                                                        xor(
                                                                            data.actions,
                                                                            [
                                                                                action.id,
                                                                            ]
                                                                        )
                                                                    )
                                                                }
                                                            >
                                                                {action.name}
                                                            </CheckForm>
                                                        </Grid.Span1>
                                                    )
                                                )}
                                            </Grid>
                                        </CheckGroup>
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


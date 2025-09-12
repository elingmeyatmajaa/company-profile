import Breadcrumb from "@/Components/Breadcrumb";
import Container from "@/Components/Container";
import Datatable from "@/Components/Datatable";
import Form from "@/Components/Form";
import FormGroup from "@/Components/FormGroup";
import CheckForm from "@/Components/Forms/CheckForm";
import FormLabel from "@/Components/Forms/FormLabel";
import TextForm from "@/Components/Forms/TextForm";
import Grid from "@/Components/Grid";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import React from "react";
import { router, useForm } from "@inertiajs/react";
import { includes, xor } from "lodash";
import Card from "@/Components/Card";
import Button from "@/Components/Buttons/Button";
import saySomething from "@/helpers/saySomething";

export default function Create({ errors, modules,referer }) {

    const { data, setData, reset } = useForm({
        name: '',
        permissions: [],
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        router.post(_route('admin.role.store'), data, {
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
                    title={__("Role")}
                    items={[
                        {
                            name: __("Home"),
                            href: "_route('admin.dashboard.index')",
                            current: false,
                        },
                        {
                            name: __("Role"),
                            href: _route("admin.role.index"),
                            current: false,
                        },
                        {
                            name: __("Create"),
                            href: "_route('admin.role.create')",
                            current: true,
                        },
                    ]}
                />

                <Grid>
                    <Grid.Span3>
                        <Form onSubmit={handleSubmit}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <Card.TitleText className="text-2xl mb-0">
                                            {__("Role Create Form")}
                                        </Card.TitleText>
                                        <Card.TitleDescription className="mt-1 max-w-2xl text-sm text-gray-500">
                                            {__("Please fill form below")}
                                        </Card.TitleDescription>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Grid>
                                        <Grid.Span1>
                                            <FormGroup>
                                                <FormLabel>
                                                    {__("Name")}
                                                </FormLabel>
                                                <TextForm
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    error={errors.name}
                                                />
                                            </FormGroup>
                                        </Grid.Span1>
                                    </Grid>
                                    <Grid cols={2}>
                                    <Grid.Span1>
                                            
                                            </Grid.Span1>
                                        <Grid.Span1>
                                            <Datatable>
                                                <Datatable.Thead>
                                                    <Datatable.Tr>
                                                        <Datatable.Th>
                                                            {__("Module")}
                                                        </Datatable.Th>
                                                        <Datatable.Th>
                                                            {__("Actions")}
                                                        </Datatable.Th>
                                                    </Datatable.Tr>
                                                </Datatable.Thead>
                                                <Datatable.Tbody>
                                                    {modules.map(
                                                        (module, index) => (
                                                            <Datatable.Tr
                                                                key={index}
                                                            >
                                                                <Datatable.Td className="!py-2">
                                                                    {
                                                                        module.name
                                                                    }
                                                                </Datatable.Td>
                                                                <Datatable.Td className="!py-2">
                                                                    <Grid>
                                                                        {module.actions.map(
                                                                            (
                                                                                action,
                                                                                index
                                                                            ) => (
                                                                                <Grid.Span1>
                                                                                    <CheckForm
                                                                                        name={`actions[${module.id}][${action.id}]`}
                                                                                        id={`actions-${module.id}-${action.id}`}
                                                                                        checked={includes(
                                                                                            data.permissions,
                                                                                            `${action.name}-${module.slug}`
                                                                                        )}
                                                                                        onChange={(
                                                                                            e
                                                                                        ) =>
                                                                                            setData(
                                                                                                "permissions",
                                                                                                xor(
                                                                                                    data.permissions,
                                                                                                    [
                                                                                                        `${action.name}-${module.slug}`,
                                                                                                    ]
                                                                                                )
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            action.name
                                                                                        }
                                                                                    </CheckForm>
                                                                                </Grid.Span1>
                                                                            )
                                                                        )}
                                                                    </Grid>
                                                                </Datatable.Td>
                                                            </Datatable.Tr>
                                                        )
                                                    )}
                                                </Datatable.Tbody>
                                            </Datatable>
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
                                        </Grid.Span1>
                                    </Grid>
                                </Card.Body>
                            </Card>
                        </Form>
                    </Grid.Span3>
                </Grid>
            </Container>
        </>
    );
}

Create.layout = (page) => <Master>{page}</Master>;

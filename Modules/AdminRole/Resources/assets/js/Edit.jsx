import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import Datatable from "@/Components/Datatable";
import FormGroup from "@/Components/FormGroup";
import FormLabel from "@/Components/Forms/FormLabel";
import TextForm from "@/Components/Forms/TextForm";
import Grid from "@/Components/Grid";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import react from "react";

import { router, useForm } from "@inertiajs/react";
import Form from "@/Components/Form";
import CheckForm from "@/Components/Forms/CheckForm";
import { filter, includes, xor } from "lodash";
import saySomething from "@/helpers/saySomething";

export default function Edit({ role, referer, errors, modules}) {
    const { data, setData } = useForm({
        ...role.data,
        permissions: role.data.permissions.map((permission) => permission.name),
        referer: referer,
        
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        router.put(_route('admin.role.update', data.id), data, {
            onSuccess: () => {
                saySomething();
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
                            name: __("Edit"),
                            href: _route("admin.role.edit", data),
                            current: true,
                        },
                    ]}
                />

                <Grid>
                    <Grid.Span3>
                        <Form method={"PUT"} onSubmit={handleSubmit}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <Card.TitleText className="text-2xl mb-0">
                                            {__("Role Edit Form")}
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
                                                    name={"name"}
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
                                        <Grid.Span1></Grid.Span1>
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
                                                {modules.map((module, index) => (
                                                    <Datatable.Tr key={index}>
                                                        <Datatable.Td className="!py-2">{module.name}</Datatable.Td>
                                                        <Datatable.Td className="!py-2">
                                                            <Grid>
                                                                {module.actions.map((action, index) => (
                                                                    <Grid.Span1>
                                                                        <CheckForm
                                                                            name={`actions[${module.id}][${action.id}]`}
                                                                            id={`actions-${module.id}-${action.id}`}
                                                                            checked={includes(data.permissions, `${action.name}-${module.slug}`)}
                                                                            onChange={e => setData('permissions', xor(data.permissions, [`${action.name}-${module.slug}`]))}
                                                                        >
                                                                            {action.name}
                                                                        </CheckForm>
                                                                    </Grid.Span1>
                                                                ))}
                                                            </Grid>
                                                        </Datatable.Td>
                                                    </Datatable.Tr>
                                                ))}
                                            </Datatable.Tbody>
                                            </Datatable>
                                            <div className="pt-5">
                                                <div className="flex justify-end">
                                                    <Button.Light
                                                        className="mr-3"
                                                        href={data.referer}
                                                    >
                                                        {__("Cancel")}
                                                    </Button.Light>
                                                    <Button type="submit">
                                                        {__("Update")}
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
Edit.layout = (page) => <Master>{page}</Master>;

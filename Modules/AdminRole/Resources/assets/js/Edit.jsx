import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import FormGroup from "@/Components/FormGroup";
import FormLabel from "@/Components/Forms/FormLabel";
import TextForm from "@/Components/Forms/TextForm";
import Grid from "@/Components/Grid";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import React from "react";

import { router, useForm } from "@inertiajs/react";
import Form from "@/Components/Form";
import CheckForm from "@/Components/Forms/CheckForm";
import { includes, xor } from "lodash";
import saySomething from "@/helpers/saySomething";

export default function Edit({ role, referer, errors, modules }) {
    const { data, setData } = useForm({
        ...role.data,
        permissions: role.data.permissions.map((p) => p.name),
        referer: referer,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(_route("admin.role.update", data.id), data, {
            onSuccess: () => saySomething(),
        });
    };

    return (
        <Container>
            <Breadcrumb
                title={__("Role")}
                items={[
                    { name: __("Home"), href: "_route('admin.dashboard.index')" },
                    { name: __("Role"), href: _route("admin.role.index") },
                    {
                        name: __("Edit"),
                        href: _route("admin.role.edit", data),
                        current: true,
                    },
                ]}
            />

            <Grid>
                <Grid.Span3>
                    <Form method="PUT" onSubmit={handleSubmit}>
                        <Card>
                            {/* HEADER */}
                            <Card.Header>
                                <Card.Title>
                                    <Card.TitleText className="text-2xl">
                                        {__("Role Edit Form")}
                                    </Card.TitleText>
                                    <Card.TitleDescription className="text-sm text-gray-500">
                                        {__("Please fill form below")}
                                    </Card.TitleDescription>
                                </Card.Title>
                            </Card.Header>

                            {/* BODY */}
                            <Card.Body className="space-y-6">
                                {/* ROLE NAME */}
                                <div className="max-w-md">
                                    <FormGroup>
                                        <FormLabel>
                                            {__("Role Name")}
                                        </FormLabel>
                                        <TextForm
                                            name="name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            error={errors.name}
                                            placeholder="Enter role name..."
                                        />
                                    </FormGroup>
                                </div>

                                {/* PERMISSIONS */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        Permissions
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                        {modules.map((module, index) => (
                                            <Card
                                                key={index}
                                                className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition h-full"
                                            >
                                                {/* MODULE HEADER */}
                                                <Card.Header className="px-4 py-3 bg-gray-50 border-b rounded-t-xl">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="font-semibold text-gray-800 text-sm">
                                                            {module.name}
                                                        </h4>

                                                        {/* ACTIONS */}
                                                        <div className="flex items-center gap-2">
                                                            {/* SELECT ALL */}
                                                            <button
                                                                type="button"
                                                                className="px-2 py-1 text-xs rounded-full bg-sky-100 text-sky-700 hover:bg-sky-200 transition"
                                                                onClick={() => {
                                                                    const all =
                                                                        module.actions.map(
                                                                            (a) =>
                                                                                `${a.name}-${module.slug}`
                                                                        );
                                                                    setData(
                                                                        "permissions",
                                                                        [
                                                                            ...new Set(
                                                                                [
                                                                                    ...data.permissions,
                                                                                    ...all,
                                                                                ]
                                                                            ),
                                                                        ]
                                                                    );
                                                                }}
                                                            >
                                                                ✓ All
                                                            </button>

                                                            {/* CLEAR */}
                                                            <button
                                                                type="button"
                                                                className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
                                                                onClick={() => {
                                                                    const remove =
                                                                        module.actions.map(
                                                                            (a) =>
                                                                                `${a.name}-${module.slug}`
                                                                        );
                                                                    setData(
                                                                        "permissions",
                                                                        data.permissions.filter(
                                                                            (p) =>
                                                                                !remove.includes(
                                                                                    p
                                                                                )
                                                                        )
                                                                    );
                                                                }}
                                                            >
                                                                ✕ Clear
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Card.Header>

                                                {/* ACTION LIST */}
                                                <Card.Body>
                                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                                        {module.actions.map(
                                                            (action, i) => {
                                                                const key = `${action.name}-${module.slug}`;
                                                                const checked =
                                                                    includes(
                                                                        data.permissions,
                                                                        key
                                                                    );

                                                                return (
                                                                    <div
                                                                        key={i}
                                                                        className={`flex items-center px-2 py-2 rounded-lg border h-[38px] transition ${
                                                                            checked
                                                                                ? "bg-sky-50 border-sky-300"
                                                                                : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                                                                        }`}
                                                                    >
                                                                        <CheckForm
                                                                            name={`actions[${module.id}][${action.id}]`}
                                                                            id={`actions-${module.id}-${action.id}`}
                                                                            checked={
                                                                                checked
                                                                            }
                                                                            onChange={() =>
                                                                                setData(
                                                                                    "permissions",
                                                                                    xor(
                                                                                        data.permissions,
                                                                                        [
                                                                                            key,
                                                                                        ]
                                                                                    )
                                                                                )
                                                                            }
                                                                        >
                                                                            <span className="text-xs text-gray-700 capitalize truncate">
                                                                                {
                                                                                    action.name
                                                                                }
                                                                            </span>
                                                                        </CheckForm>
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                </div>

                                {/* ACTION BUTTON */}
                                <div className="flex justify-end gap-3 pt-4">
                                    <Button.Light href={data.referer}>
                                        {__("Cancel")}
                                    </Button.Light>
                                    <Button type="submit">
                                        {__("Update")}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Form>
                </Grid.Span3>
            </Grid>
        </Container>
    );
}

Edit.layout = (page) => <Master>{page}</Master>;
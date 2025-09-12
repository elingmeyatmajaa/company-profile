import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import SearchForm from "@/Components/Forms/SearchForm";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import React, { useCallback, useEffect, useState } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import {
    ArrowUpTrayIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HomeIcon,
    LinkIcon,
    PlusIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import Datatable from "@/Components/Datatable";
import { router } from "@inertiajs/react";
import { debounce, pickBy } from "lodash";
import deleteModalState from "@/States/deleteModalState";
import { useRecoilState } from "recoil";
import saySomething from "@/helpers/saySomething";
import can from "@/helpers/can";

export default function Index({ contacts, filters }) {

    const [params, setParams] = useState({
        search: filters.search ?? "",
        take: filters.take ?? 10,
        page: filters.page,
    });

    const reload = useCallback(
        debounce((query) => {
            router.get(
                _route("admin.contact.index"),
                pickBy({ ...query }),
                {
                    only: ["contacts"],
                    preserveState: true,
                }
            );
        })
    );
    useEffect(() => reload(params), [params]);
    return (
        <>
            <Container>
                <Breadcrumb
                    title={__("Contact")}
                    items={[
                        {
                            name: __("Home"),
                            href: "_route('admin.dashboard.index')",
                            current: false,
                        },
                        {
                            name: __("Contact"),
                            href: _route("admin.contact.index"),
                            current: true,
                        },
                    ]}
                />

                <Card>
                    <Card.Header>
                        <Card.Title>
                            <SearchForm
                                value={params.search}
                                onChange={(e) =>
                                    setParams({
                                        ...params,
                                        search: e.target.value,
                                    })
                                }
                            />
                        </Card.Title>
                        <Card.Toolbar>
                        {can('create-contact') && (

                            <Button href={_route("admin.contact.create")}>
                                <PlusIcon className="w-6 mr-2" />
                                {__("Add Contact")}
                            </Button>
                        )}

                        </Card.Toolbar>
                    </Card.Header>
                    <Card.Body>
                        <Datatable className="min-h-[500px]">
                            <Datatable.Thead>
                                <Datatable.Tr>
                                    <Datatable.Th >
                                        No.
                                    </Datatable.Th>
                                    <Datatable.Th >
                                        {__("First Name")}
                                    </Datatable.Th>
                                    <Datatable.Th >
                                        {__("Last Name")}
                                    </Datatable.Th>
                                     <Datatable.Th >
                                        {__("Email")}
                                    </Datatable.Th>
                                     <Datatable.Th >
                                        {__("Phone Number")}
                                    </Datatable.Th>
                                    <Datatable.Th >
                                        {__("Message")}
                                    </Datatable.Th>
                                    {can(['update-contact', 'delete-contact']) && (
                                    <Datatable.Th className="w-[15%] text-end">
                                        {__("Action")}
                                    </Datatable.Th>
                                    )}
                                </Datatable.Tr>
                            </Datatable.Thead>
                            <Datatable.Tbody>
                                {contacts.data.map((item, key) => (
                                    <Datatable.Tr key={key}>
                                        <Datatable.Td>
                                            {contacts.from + key}
                                        </Datatable.Td>
                                        <Datatable.Td>
                                            {item.first_name}
                                        </Datatable.Td>
                                        <Datatable.Td>
                                            {item.last_name}
                                        </Datatable.Td>
                                        <Datatable.Td>
                                            {item.email}
                                        </Datatable.Td>
                                        <Datatable.Td>
                                            {item.phone_number}
                                        </Datatable.Td>
                                        <Datatable.Td>{item.message}</Datatable.Td>
                                        {can(['update-contact', 'delete-contact']) && (

                                        <Datatable.Td className="text-end w-20">
                                            <Datatable.Actions
                                                detail={() => {
                                                    router.get(
                                                        _route(
                                                            "admin.contact.show",
                                                            {
                                                                contacts:
                                                                    item.id,
                                                            }
                                                        )
                                                    );
                                                }}
                                                edit={can('update-contact') ? () => {
                                                    router.get(
                                                        _route(
                                                            "admin.contact.edit",
                                                            {
                                                                contacts:
                                                                    item.id,
                                                            }
                                                        )
                                                    );
                                                } : null}
                                                destroy={ can('delete-contact') ? () => {
                                                    setDeleteModal({
                                                        show: true,
                                                        onConfirm: () => {
                                                            router.delete(
                                                                _route(
                                                                    "admin.contact.destroy",
                                                                    {
                                                                        contacts:
                                                                            item.id,
                                                                    }
                                                                )
                                                            );
                                                            setDeleteModal({
                                                                ...deleteModal,
                                                                show: false,
                                                            });
                                                            saySomething();
                                                        },
                                                        onCancel: () => {
                                                            setDeleteModal({
                                                                ...deleteModal,
                                                                show: false,
                                                            });
                                                        },
                                                    });
                                                } : null}
                                            />
                                        </Datatable.Td>
                                        )}
                                    </Datatable.Tr>
                                ))}
                            </Datatable.Tbody>
                        </Datatable>
                        <Datatable.Pagination data={contacts} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

Index.layout = (page) => <Master children={page} />;

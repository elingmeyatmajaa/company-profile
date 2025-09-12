import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import Datatable from "@/Components/Datatable";
import SearchForm from "@/Components/Forms/SearchForm";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import React, { useCallback, useEffect, useState } from "react";

import { debounce, pickBy } from "lodash";
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
import { Link, router } from "@inertiajs/react";
import Badge from "@/Components/Badge";

export default function Index({ users, filters }) {
    const [params, setParams] = useState({
        search: filters.search ?? "",
        take: filters.take ?? 10,
        page: filters.page,
    });
    const reload = useCallback(
        debounce((query) => {
            router.get(_route("admin.user.index"), pickBy({ ...query }), {
                only: ["users"],
                preserveState: true,
            });
        })
    );
    useEffect(() => reload(params), [params]);
    return (
        <>
            <Container>
                <Breadcrumb
                    title={__("User")}
                    items={[
                        {
                            name: __("Home"),
                            href: "_route('admin.dashboard.index')",
                            current: false,
                        },
                        {
                            name: __("User"),
                            href: _route("admin.user.index"),
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
                            <Button href={_route("admin.user.create")}>
                                <PlusIcon className="w-6 mr-2" />
                                {__("Add User")}
                            </Button>
                        </Card.Toolbar>
                    </Card.Header>
                    <Card.Body>
                        <Datatable className="min-h-[500px]">
                            <Datatable.Thead>
                                <Datatable.Tr>
                                    <Datatable.Th className="w-[5%]">
                                        No.
                                    </Datatable.Th>
                                    <Datatable.Th className="w-[35%]">
                                        {__("Name")}
                                    </Datatable.Th>
                                    <Datatable.Th className="w-[30%]">
                                        {__("Email")}
                                    </Datatable.Th>
                                    <Datatable.Th className="w-[15%]">
                                        {__("Role")}
                                    </Datatable.Th>
                                    <Datatable.Th className="w-[15%] text-end">
                                        {__("Action")}
                                    </Datatable.Th>
                                </Datatable.Tr>
                            </Datatable.Thead>
                            <Datatable.Tbody>
                                {users.data.map((item, key) => (
                                    <Datatable.Tr key={key}>
                                        <Datatable.Td>
                                            {users.from + key}
                                        </Datatable.Td>
                                        <Datatable.Td>{item.name}</Datatable.Td>
                                        <Datatable.Td>
                                            {item.email}
                                        </Datatable.Td>
                                        <Datatable.Td>
                                            {item.roles.map((role) => {
                                                return (
                                                    <Link
                                                        href={_route(
                                                            "admin.role.index",
                                                            {
                                                                search: role.name,
                                                            }
                                                        )}
                                                    >
                                                        <Badge>
                                                            {role.name}
                                                            <LinkIcon className="w-4" />
                                                        </Badge>
                                                    </Link>
                                                );
                                            })}
                                        </Datatable.Td>
                                        <Datatable.Td className="text-end w-20">
                                            <Datatable.Actions
                                                detail={() => {
                                                    router.get(
                                                        _route(
                                                            "admin.user.show",
                                                            {
                                                                user: item.id,
                                                            }
                                                        )
                                                    );
                                                }}
                                                edit={() => {
                                                    router.get(
                                                        _route(
                                                            "admin.user.edit",
                                                            {
                                                                user: item.id,
                                                            }
                                                        )
                                                    );
                                                }}
                                                destroy={() => {
                                                    setDeleteModal({
                                                        show: true,
                                                        onConfirm: () => {
                                                            router.delete(
                                                                _route(
                                                                    "admin.user.destroy",
                                                                    {
                                                                        user: item.id,
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
                                                }}
                                            />
                                        </Datatable.Td>
                                    </Datatable.Tr>
                                ))}
                            </Datatable.Tbody>
                        </Datatable>
                        <Datatable.Pagination data={users} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

Index.layout = (page) => <Master children={page} />;

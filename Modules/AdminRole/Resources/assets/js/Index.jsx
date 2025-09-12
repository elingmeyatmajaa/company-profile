import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import Datatable from "@/Components/Datatable";
import SearchForm from "@/Components/Forms/SearchForm";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import { router } from "@inertiajs/react";
import react from "react";
import React, { useCallback, useEffect, useState } from "react";
import { debounce, pickBy } from "lodash";
import {
    ArrowUpTrayIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HomeIcon,
    PlusIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";
import deleteModalState from "@/States/deleteModalState";
import can from "@/helpers/can";
import saySomething from "@/helpers/saySomething";
import { useRecoilState } from "recoil";

export default function Index({ roles, filters }) {
    const [deleteModal, setDeleteModal] = useRecoilState(deleteModalState);

    const [params, setParams] = useState({
        search: filters.search ?? "",
        take: filters.take ?? 10,
        page: filters.page,
    });
    const reload = useCallback(
        debounce((query) => {
            router.get(_route("admin.role.index"), pickBy({ ...query }), {
                only: ["roles"],
                preserveState: true,
            });
        })
    );
    useEffect(() => reload(params), [params]);
    return (
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
                                setParams({ ...params, search: e.target.value })
                            }
                        />
                    </Card.Title>
                    <Card.Toolbar>
                       
                        {can("create-role") && (
                            <Button href={_route("admin.role.create")}>
                                <PlusIcon className="w-6 mr-2" />
                                {__("Add Role")}
                            </Button>
                        )}
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
                                {can(["update-role", "delete-role"]) && (
                                    <Datatable.Th className="w-[15%] text-end">
                                        {__("Actions")}
                                    </Datatable.Th>
                                )}
                            </Datatable.Tr>
                        </Datatable.Thead>
                        <Datatable.Tbody>
                            {roles.data.map((item, key) => (
                                <Datatable.Tr key={key}>
                                    <Datatable.Td>
                                        {roles.from + key}
                                    </Datatable.Td>
                                    <Datatable.Td>{item.name}</Datatable.Td>
                                    {can(["update-role", "delete-role"]) && (
                                        <Datatable.Td className="text-end w-20">
                                            <Datatable.Actions
                                                detail={() => {
                                                    router.get(
                                                        _route(
                                                            "admin.role.show",
                                                            {
                                                                role: item.id,
                                                            }
                                                        )
                                                    );
                                                }}
                                                edit={can('update-role') ? () => {
                                                    router.get(
                                                        _route(
                                                            "admin.role.edit",
                                                            {
                                                                role: item.id,
                                                            }
                                                        )
                                                    );
                                                } : null}
                                                destroy={ can('delete-role') ?() => {
                                                    setDeleteModal({
                                                        show: true,
                                                        onConfirm: () => {
                                                            router.delete(
                                                                _route(
                                                                    "admin.role.destroy",
                                                                    {
                                                                        role: item.id,
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

                    <Datatable.Pagination data={roles} />
                </Card.Body>
            </Card>
        </Container>
    );
}

Index.layout = (page) => <Master children={page} />;

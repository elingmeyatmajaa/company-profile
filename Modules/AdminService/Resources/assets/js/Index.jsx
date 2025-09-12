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
import can from "@/helpers/can";
import deleteModalState from "@/States/deleteModalState";
import { useRecoilState } from "recoil";
import saySomething from "@/helpers/saySomething";

export default function Index({ services, filters }) {
    const [deleteModal, setDeleteModal] = useRecoilState(deleteModalState);

    const [params, setParams] = useState({
        search: filters.search ?? "",
        take: filters.take ?? 10,
        page: filters.page,
    });

    const reload = useCallback(
        debounce((query) => {
            router.get(_route("admin.service.index"), pickBy({ ...query }), {
                only: ["services"],
                preserveState: true,
            });
        })
    );
    useEffect(() => reload(params), [params]);
    return (
        <>
            <Container>
                <Breadcrumb
                    title={__("Service")}
                    items={[
                        {
                            name: __("Home"),
                            href: "_route('admin.dashboard.index')",
                            current: false,
                        },
                        {
                            name: __("Service"),
                            href: _route("admin.service.index"),
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
                            {can("create-service") && (
                                <Button href={_route("admin.service.create")}>
                                    <PlusIcon className="w-6 mr-2" />
                                    {__("Add Service")}
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
                                        {__("Title")}
                                    </Datatable.Th>
                                    <Datatable.Th className="w-[15%]">
                                        {__("Body")}
                                    </Datatable.Th>
                                    {can([
                                        "update-service",
                                        "delete-service",
                                    ]) && (
                                        <Datatable.Th className="w-[15%] text-end">
                                            {__("Action")}
                                        </Datatable.Th>
                                    )}
                                </Datatable.Tr>
                            </Datatable.Thead>
                            <Datatable.Tbody>
                                {services.data.map((item, key) => (
                                    <Datatable.Tr key={key}>
                                        <Datatable.Td>
                                            {services.from + key}
                                        </Datatable.Td>
                                        <Datatable.Td>
                                            {item.title}
                                        </Datatable.Td>
                                        <Datatable.Td>
                                            {item.body.replace(/<\/?p>/g, "")}
                                        </Datatable.Td>
                                        {can([
                                            "update-service",
                                            "delete-service",
                                        ]) && (
                                            <Datatable.Td className="text-end w-20">
                                                <Datatable.Actions
                                                    detail={() => {
                                                        router.get(
                                                            _route(
                                                                "admin.service.show",
                                                                {
                                                                    service:
                                                                        item.id,
                                                                }
                                                            )
                                                        );
                                                    }}
                                                    edit={ can('update-service') ? () => {
                                                        router.get(
                                                            _route(
                                                                "admin.service.edit",
                                                                {
                                                                    service:
                                                                        item.id,
                                                                }
                                                            )
                                                        );
                                                    } : null }
                                                    destroy={ can('delete-service') ? () => {
                                                        setDeleteModal({
                                                            show: true,
                                                            onConfirm: () => {
                                                                router.delete(
                                                                    _route(
                                                                        "admin.service.destroy",
                                                                        {
                                                                            service:
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
                                                    } : null }
                                                />
                                            </Datatable.Td>
                                        )}
                                    </Datatable.Tr>
                                ))}
                            </Datatable.Tbody>
                        </Datatable>
                        <Datatable.Pagination data={services} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

Index.layout = (page) => <Master children={page} />;

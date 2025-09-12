import Breadcrumb from "@/Components/Breadcrumb";
import Container from "@/Components/Container";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import React, { useCallback, useEffect, useState } from "react";
import { debounce, pickBy } from "lodash";
import Card from "@/Components/Card";
import SearchForm from "@/Components/Forms/SearchForm";
import Button from "@/Components/Buttons/Button";
import Datatable from "@/Components/Datatable";
import {
    ArrowUpTrayIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HomeIcon,
    LinkIcon,
    PlusIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { Link, router } from "@inertiajs/react";
import Badge from "@/Components/Badge";
import saySomething from "@/helpers/saySomething";
import deleteModalState from "@/States/deleteModalState";
import { useRecoilState } from "recoil";
import can from "@/helpers/can";

export default function Index({ modules, filters }) {
    const [deleteModal, setDeleteModal] = useRecoilState(deleteModalState)

    const [params, setParams] = useState({
        search: filters.search ?? "",
        take: filters.take ?? 10,
        page: filters.page,
    });
    const reload = useCallback(
        debounce((query) => {
            router.get(_route("admin.module.index"), pickBy({ ...query }), {
                only: ["modules"],
                preserveState: true,
            });
        })
    );
    useEffect(() => reload(params), [params]);
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
                            {can("create-module") && (
                                <Button href={_route("admin.module.create")}>
                                    <PlusIcon className="w-6 mr-2" />
                                    {__("Add Module")}
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
                                    {can([
                                        "update-module",
                                        "delete-module",
                                    ]) && (
                                        <Datatable.Th className="w-[45%]">
                                            {__("Actions")}
                                        </Datatable.Th>
                                    )}
                                </Datatable.Tr>
                            </Datatable.Thead>
                            <Datatable.Tbody>
                                {modules.data.map((item, key) => (
                                    <Datatable.Tr key={key}>
                                        <Datatable.Td>
                                            {modules.from + key}
                                        </Datatable.Td>
                                        <Datatable.Td>
                                            {item.name} <br />
                                            <Link
                                                href={_route(
                                                    `admin.${item.slug}.index`
                                                )}
                                            >
                                                <div className="flex text-sky-500 font-semibold">
                                                    {item.slug}
                                                    <LinkIcon className="ml-1 w-4" />
                                                </div>
                                            </Link>
                                        </Datatable.Td>
                                        <Datatable.Td>
                                            {item.actions.map((action) => {
                                                return (
                                                    <Link
                                                        href={_route(
                                                            "admin.action.index",
                                                            {
                                                                search: action.name,
                                                            }
                                                        )}
                                                    >
                                                        <Badge className="mr-1">
                                                            {action.name}{" "}
                                                            <LinkIcon className="w-4" />
                                                        </Badge>
                                                    </Link>
                                                );
                                            })}
                                        </Datatable.Td>
                                        {can([
                                            "update-module",
                                            "delete-module",
                                        ]) && (
                                            <Datatable.Td className="text-end w-20">
                                                <Datatable.Actions
                                                    edit={can('update-module') ? () => {
                                                        router.get(
                                                            _route(
                                                                "admin.module.edit",
                                                                {
                                                                    module: item.id,
                                                                }
                                                            )
                                                        );
                                                    }: null}
                                                    destroy={ can('delete-module') ?() => {
                                                        setDeleteModal({
                                                            show: true,
                                                            onConfirm: () => {
                                                                router.delete(
                                                                    _route(
                                                                        "admin.module.destroy",
                                                                        {
                                                                            module: item.id,
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
                                                    }: null}
                                                />
                                            </Datatable.Td>
                                        )}
                                    </Datatable.Tr>
                                ))}
                            </Datatable.Tbody>
                        </Datatable>

                        <Datatable.Pagination data={modules} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

Index.layout = (page) => <Master children={page} />;

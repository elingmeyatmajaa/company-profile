import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import SearchForm from "@/Components/Forms/SearchForm";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import { debounce, pickBy } from "lodash";

import {
    ArrowUpTrayIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HomeIcon,
    PlusIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import React, { useCallback, useEffect, useState } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import Datatable from "@/Components/Datatable";
import { router } from "@inertiajs/react";
import can from "@/helpers/can";
import deleteModalState from "@/States/deleteModalState";
import { useRecoilState } from "recoil";
import saySomething from "@/helpers/saySomething";

export default function Index({ categoryBlogs, filters }) {
    const [deleteModal, setDeleteModal] = useRecoilState(deleteModalState);

    const [params, setParams] = useState({
        search: filters.search ?? "",
        take: filters.take ?? 10,
        page: filters.page,
    });

    const reload = useCallback(
        debounce((query) => {
            router.get(
                _route("admin.category-blog.index"),
                pickBy({ ...query }),
                {
                    only: ["categoryBlogs"],
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
                    title={__(`Category Blog `)}
                    items={[
                        {
                            name: __("Home"),
                            href: _route("admin.dashboard.index"),
                            current: false,
                        },
                        {
                            name: __("Category Blog"),
                            href: _route(`admin.category-blog.index`),
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
                            {can("create-category-blog") && (
                                <Button
                                    href={_route("admin.category-blog.create")}
                                >
                                    <PlusIcon className="w-6 mr-2" />
                                    {__("Add Category Blog")}
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
                                        "update-category-blog",
                                        "delete-category-blog",
                                    ]) && (
                                        <Datatable.Th className="w-[15%] text-end">
                                            {__("Actions")}
                                        </Datatable.Th>
                                    )}
                                </Datatable.Tr>
                            </Datatable.Thead>
                            <Datatable.Tbody>
                                {categoryBlogs.data.map((item, key) => (
                                    <Datatable.Tr key={key}>
                                        <Datatable.Td>
                                            {categoryBlogs.from + key}
                                        </Datatable.Td>
                                        <Datatable.Td>{item.name}</Datatable.Td>
                                        {can([
                                            "update-category-blog",
                                            "delete-category-blog",
                                        ]) && (
                                            <Datatable.Td className="text-end w-20">
                                                <Datatable.Actions
                                                    detail={() => {
                                                        router.get(
                                                            _route(
                                                                "admin.category-blog.show",
                                                                {
                                                                    categoryBlogs:
                                                                        item.id,
                                                                }
                                                            )
                                                        );
                                                    }}
                                                    edit={can('update-action') ? () => {
                                                        router.get(
                                                            _route(
                                                                "admin.category-blog.edit",
                                                                {
                                                                    categoryBlogs:
                                                                        item.id,
                                                                }
                                                            )
                                                        );
                                                    } : null }
                                                    destroy={can('delete-action') ? () => {
                                                        setDeleteModal({
                                                            show: true,
                                                            onConfirm: () => {
                                                                router.delete(
                                                                    _route(
                                                                        "admin.category-blog.destroy",
                                                                        {
                                                                            categoryBlogs:
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

                        <Datatable.Pagination data={categoryBlogs} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

Index.layout = (page) => <Master children={page} />;

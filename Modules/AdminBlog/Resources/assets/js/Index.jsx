import Master from "@/Layouts/Master";
import _route from "@/helpers/_route";
import { router } from "@inertiajs/react";
import React, { useCallback, useEffect, useState } from "react";
import { debounce, pickBy } from "lodash";
import Container from "@/Components/Container";
import Breadcrumb from "@/Components/Breadcrumb";
import __ from "@/helpers/__";
import Card from "@/Components/Card";
import SearchForm from "@/Components/Forms/SearchForm";
import Button from "@/Components/Buttons/Button";
import { FunnelIcon } from "@heroicons/react/24/outline";
import {
    ArrowUpTrayIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HomeIcon,
    PlusIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import Datatable from "@/Components/Datatable";
import deleteModalState from "@/States/deleteModalState";
import { useRecoilState } from "recoil";
import can from "@/helpers/can";
import saySomething from "@/helpers/saySomething";

export default function Index({ blogs, filters }) {
    const [deleteModal, setDeleteModal] = useRecoilState(deleteModalState);

    const [params, setParams] = useState({
        search: filters.search ?? "",
        take: filters.take ?? 10,
        page: filters.page,
    });

    const reload = useCallback(
        debounce((query) => {
            router.get(_route("admin.blog.index"), pickBy({ ...query }), {
                only: ["blogs"],
                preserveState: true,
            });
        })
    );
    return (
        <>
            <Container>
                <Breadcrumb
                    title={__(`Blog `)}
                    items={[
                        {
                            name: __("Home"),
                            href: _route("admin.dashboard.index"),
                            current: false,
                        },
                        {
                            name: __("Blog"),
                            href: _route(`admin.blog.index`),
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
                            {can("create-blog") && (
                                <Button href={_route("admin.blog.create")}>
                                    <PlusIcon className="w-6 mr-2" />
                                    {__("Add Blog")}
                                </Button>
                            )}
                        </Card.Toolbar>
                    </Card.Header>
                    <Card.Body>
                        <Datatable className="min-h-[500px]">
                            <Datatable.Thead>
                                <Datatable.Tr>
                                    <Datatable.Th className="w-[5%]">
                                        {__("No")}
                                    </Datatable.Th>
                                    <Datatable.Th className="w-[35%]">
                                        {__("Title")}
                                    </Datatable.Th>
                                    <Datatable.Th className="w-[35%]">
                                        {__("Slug")}
                                    </Datatable.Th>
                                    {can(["update-blog", "delete-blog"]) && (
                                        <Datatable.Th className="w-[55%] text-end">
                                            {__("Action")}
                                        </Datatable.Th>
                                    )}
                                </Datatable.Tr>
                            </Datatable.Thead>
                            <Datatable.Tbody>
                                {blogs.data.map((item, key) => (
                                    <Datatable.Tr key={key}>
                                        <Datatable.Td>
                                            {blogs.from + key}
                                        </Datatable.Td>
                                        <Datatable.Td>
                                            {item.title}
                                        </Datatable.Td>
                                        <Datatable.Td>{item.slug}</Datatable.Td>
                                        {can([
                                            "update-blog",
                                            "delete-blog",
                                        ]) && (
                                            <Datatable.Td className="text-end w-20">
                                                <Datatable.Actions
                                                    detail={() => {
                                                        router.get(
                                                            _route(
                                                                "admin.blog.show",
                                                                {
                                                                    blog: item.id,
                                                                }
                                                            )
                                                        );
                                                    }}
                                                    edit={can('update-blog') ? () => {
                                                        router.get(
                                                            _route(
                                                                "admin.blog.edit",
                                                                {
                                                                    blog: item.id,
                                                                }
                                                            )
                                                        );
                                                    } : null}
                                                    destroy={ can('delete-blog') ? () => {
                                                        setDeleteModal({
                                                            show: true,
                                                            onConfirm: () => {
                                                                router.delete(
                                                                    _route(
                                                                        "admin.blog.destroy",
                                                                        {
                                                                            blog: item.id,
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
                        <Datatable.Pagination data={blogs} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

Index.layout = (page) => <Master children={page} />;

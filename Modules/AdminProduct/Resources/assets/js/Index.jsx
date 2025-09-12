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
import can from "@/helpers/can";
import saySomething from "@/helpers/saySomething";

export default function Index({ products, filters }) {
    const [deleteModal, setDeleteModal] = useRecoilState(deleteModalState);

    const [params, setParams] = useState({
        search: filters.search ?? "",
        take: filters.take ?? 10,
        page: filters.page,
    });

    const reload = useCallback(
        debounce((query) => {
            router.get(_route("admin.product.index"), pickBy({ ...query }), {
                only: ["products"],
                preserveState: true,
            });
        })
    );
    useEffect(() => reload(params), [params]);
    return (
        <>
            <Container>
                <Breadcrumb
                    title={__("Product")}
                    items={[
                        {
                            name: __("Home"),
                            href: "_route('admin.dashboard.index')",
                            current: false,
                        },
                        {
                            name: __("Product"),
                            href: _route("admin.product.index"),
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
                            {can("create-product") && (
                                <Button href={_route("admin.product.create")}>
                                    <PlusIcon className="w-6 mr-2" />
                                    {__("Add Product")}
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
                                    <Datatable.Th className="w-[15%]">
                                        {__("Body")}
                                    </Datatable.Th>
                                    {can([
                                        "update-product",
                                        "delete-product",
                                    ]) && (
                                        <Datatable.Th className="w-[15%] text-end">
                                            {__("Action")}
                                        </Datatable.Th>
                                    )}
                                </Datatable.Tr>
                            </Datatable.Thead>
                            <Datatable.Tbody>
                                {products.data.map((item, key) => (
                                    <Datatable.Tr key={key}>
                                        <Datatable.Td>
                                            {products.from + key}
                                        </Datatable.Td>
                                        <Datatable.Td>
                                            {item.title}
                                        </Datatable.Td>
                                        <Datatable.Td>
                                            {item.body.replace(/<\/?p>/g, "")}
                                        </Datatable.Td>
                                        {can([
                                            "update-product",
                                            "delete-product",
                                        ]) && (
                                            <Datatable.Td className="text-end w-20">
                                                <Datatable.Actions
                                                    detail={() => {
                                                        router.get(
                                                            _route(
                                                                "admin.product.show",
                                                                {
                                                                    product:
                                                                        item.id,
                                                                }
                                                            )
                                                        );
                                                    }}
                                                    edit={ can('update-product') ? () => {
                                                        router.get(
                                                            _route(
                                                                "admin.product.edit",
                                                                {
                                                                    product:
                                                                        item.id,
                                                                }
                                                            )
                                                        );
                                                    } : null}
                                                    destroy={can('delete-product') ? () => {
                                                        setDeleteModal({
                                                            show: true,
                                                            onConfirm: () => {
                                                                router.delete(
                                                                    _route(
                                                                        "admin.product.destroy",
                                                                        {
                                                                            product:
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
                        <Datatable.Pagination data={products} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

Index.layout = (page) => <Master children={page} />;

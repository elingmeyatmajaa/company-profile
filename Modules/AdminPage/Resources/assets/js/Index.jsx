import Breadcrumb from "@/Components/Breadcrumb";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import SearchForm from "@/Components/Forms/SearchForm";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
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
import { router } from "@inertiajs/react";
import deleteModalState from "@/States/deleteModalState";
import { useRecoilState } from "recoil";
import can from "@/helpers/can";
import Button from "@/Components/Buttons/Button";
import Datatable from "@/Components/Datatable";
import saySomething from "@/helpers/saySomething";

export default function Index({ pages, filters }) {
    const [deleteModal, setDeleteModal] = useRecoilState(deleteModalState);

    const [params, setParams] = useState({
        search: filters.search ?? "",
        take: filters.take ?? 10,
        page: filters.page,
    });
    const reload = useCallback(
        debounce((query) => {
            router.get(_route("admin.page.index"), pickBy({ ...query }), {
                only: ["pages"],
                preserveState: true,
            });
        })
    );
    useEffect(() => reload(params), [params]);
    return (
        <>
            <Container>
                <Breadcrumb
                    title={__("Page")}
                    items={[
                        {
                            name: __("Home"),
                            href: "_route('admin.dashboard.index')",
                            current: false,
                        },
                        {
                            name: __("Page"),
                            href: _route("admin.page.index"),
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
                            {can("create-page") && (
                                <Button href={_route("admin.page.create")}>
                                    <PlusIcon className="w-6 mr-2" />
                                    {__("Add Page")}
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
                                    <Datatable.Th className="w-[35%]">
                                        {__("Slug")}
                                    </Datatable.Th>
                                    {can([
                                        "update-page",
                                        "delete-page",
                                    ]) && (
                                        <Datatable.Th className="w-[15%] text-end">
                                            {__("Actions")}
                                        </Datatable.Th>
                                    )}
                                </Datatable.Tr>
                            </Datatable.Thead>
                            <Datatable.Tbody>
                                {pages.data.map((item, key) => (
                                    <Datatable.Tr key={key}>
                                        <Datatable.Td>
                                            {pages.from + key}
                                        </Datatable.Td>
                                        <Datatable.Td>{item.title}</Datatable.Td>
                                        <Datatable.Td>{item.slug}</Datatable.Td>

                                        {can([
                                            "update-page",
                                            "delete-page",
                                        ]) && (
                                            <Datatable.Td className="text-end w-20">
                                                <Datatable.Actions
                                                    detail={() => {
                                                        router.get(
                                                            _route(
                                                                "admin.page.show",
                                                                {
                                                                    page: item.id,
                                                                }
                                                            )
                                                        );
                                                    }}
                                                    edit={
                                                        can("update-page")
                                                            ? () => {
                                                                  router.get(
                                                                      _route(
                                                                          "admin.page.edit",
                                                                          {
                                                                              page: item.id,
                                                                          }
                                                                      )
                                                                  );
                                                              }
                                                            : null
                                                    }
                                                    destroy={
                                                        can("delete-page")
                                                            ? () => {
                                                                  setDeleteModal(
                                                                      {
                                                                          show: true,
                                                                          onConfirm:
                                                                              () => {
                                                                                  router.delete(
                                                                                      _route(
                                                                                          "admin.page.destroy",
                                                                                          {
                                                                                              page: item.id,
                                                                                          }
                                                                                      )
                                                                                  );
                                                                                  setDeleteModal(
                                                                                      {
                                                                                          ...deleteModal,
                                                                                          show: false,
                                                                                      }
                                                                                  );
                                                                                  saySomething();
                                                                              },
                                                                          onCancel:
                                                                              () => {
                                                                                  setDeleteModal(
                                                                                      {
                                                                                          ...deleteModal,
                                                                                          show: false,
                                                                                      }
                                                                                  );
                                                                              },
                                                                      }
                                                                  );
                                                              }
                                                            : null
                                                    }
                                                />
                                            </Datatable.Td>
                                        )}
                                    </Datatable.Tr>
                                ))}
                            </Datatable.Tbody>
                        </Datatable>
                        <Datatable.Pagination data={pages} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

Index.layout = (page) => <Master children={page} />;

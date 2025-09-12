import Breadcrumb from "@/Components/Breadcrumb";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import Datatable from "@/Components/Datatable";
import SearchForm from "@/Components/Forms/SearchForm";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import { router } from "@inertiajs/react";
import React, { useCallback, useEffect, useState } from "react";
import { debounce, pickBy } from "lodash";
import Button from "@/Components/Buttons/Button";
import {
    ArrowUpTrayIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HomeIcon,
    PlusIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import deleteModalState from "@/States/deleteModalState";
import { useRecoilState } from "recoil";
import can from "@/helpers/can";
import saySomething from "@/helpers/saySomething";

export default function Index({ filters, sosialMedias }) {
    const [deleteModal, setDeleteModal] = useRecoilState(deleteModalState);

    const [params, setParams] = useState({
        search: filters.search ?? "",
        take: filters.take ?? 10,
        page: filters.page,
    });

    const reload = useCallback(
        debounce((query) => {
            router.get(
                _route("admin.sosial-media.index"),
                pickBy({ ...query }),
                {
                    only: ["sosialMedias"],
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
                    title={__("Social Media")}
                    items={[
                        {
                            name: __("Home"),
                            href: _route("admin.dashboard.index"),
                            current: false,
                        },
                        {
                            name: __("Sosial Media"),
                            href: _route("admin.sosial-media.index"),
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
                            {can("create-sosial-media") && (
                                <Button
                                    href={_route("admin.sosial-media.create")}
                                >
                                    <PlusIcon className="w-6" />
                                    {__("Add Media Sosial")}
                                </Button>
                            )}
                        </Card.Toolbar>
                    </Card.Header>
                    <Card.Body>
                        <Datatable className="min-h-[500px]">
                            <Datatable.Thead>
                                {/* <Datatable.Tr>
                                    <Datatable.Th className="w-[5%]">
                                        No.
                                    </Datatable.Th>
                                    <Datatable.Th>{__("Name")}</Datatable.Th>
                                    <Datatable.Th>{__("Link")}</Datatable.Th>
                                    {can([
                                        "update-sosial-media",
                                        "delete-sosial-media",
                                    ]) && (
                                        <Datatable.Th className="w-[15%] text-end">
                                            {__("Actions")}
                                        </Datatable.Th>
                                    )}
                                </Datatable.Tr> */}
                                 <Datatable.Tr>
                                    <Datatable.Th className="w-[5%]">
                                        {__("No")}
                                    </Datatable.Th>
                                    <Datatable.Th className="w-[35%]">
                                        {__("Name")}
                                    </Datatable.Th>
                                    <Datatable.Th className="w-[35%]">
                                        {__("Link")}
                                    </Datatable.Th>
                                    {can(["update-sosial-media", "delete-sosial-media"]) && (
                                        <Datatable.Th className="w-[55%] text-end">
                                            {__("Action")}
                                        </Datatable.Th>
                                    )}
                                </Datatable.Tr>
                            </Datatable.Thead>
                            <Datatable.Tbody>
                                {sosialMedias.data.map((item, key) => (
                                    <Datatable.Tr key={key}>
                                        <Datatable.Td>
                                            {sosialMedias.from + key}
                                        </Datatable.Td>
                                        <Datatable.Td>{item.name}</Datatable.Td>
                                        <Datatable.Td>{item.link}</Datatable.Td>
                                        {can([
                                            "update-sosial-media",
                                            "delete-sosial-media",
                                        ]) && (
                                            <Datatable.Td className="text-end w-20">
                                                    <Datatable.Actions
                                                          detail={() => {
                                                            router.get(_route('admin.sosial-media.show', { sosialMedias: item.id }))
                                                          }}
                                                        edit={ can('update-sosial-media') ? () => {
                                                            router.get(
                                                                _route(
                                                                    "admin.sosial-media.edit",
                                                                    {
                                                                        sosialMedias:
                                                                            item.id,
                                                                    }
                                                                )
                                                            );
                                                        }: null }
                                                        destroy={ can('delete-sosial-media') ? () => {
                                                          setDeleteModal({
                                                              show: true,
                                                              onConfirm: () => {
                                                                  router.delete(
                                                                      _route(
                                                                          "admin.sosial-media.destroy",
                                                                          {
                                                                              sosialMedias:
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

                        <Datatable.Pagination data={sosialMedias} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}
Index.layout = (page) => <Master children={page} />;

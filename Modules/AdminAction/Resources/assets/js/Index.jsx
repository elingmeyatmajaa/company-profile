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
import { useRecoilState } from "recoil";
import React, { useCallback, useEffect, useState } from "react";
import { debounce, pickBy } from "lodash";
import { ArrowUpTrayIcon, ChevronLeftIcon, ChevronRightIcon, HomeIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { FunnelIcon } from "@heroicons/react/24/outline";
import can from "@/helpers/can";
import deleteModalState from "@/States/deleteModalState";
import saySomething from "@/helpers/saySomething";

export default function Index({ actions, filters }) {
  const [deleteModal, setDeleteModal] = useRecoilState(deleteModalState)

  const [params, setParams] = useState({
    search: filters.search ?? '',
    take: filters.take ?? 10,
    page: filters.page
  })
  const reload = useCallback(debounce((query) => {
    router.get(_route('admin.action.index'), pickBy({ ...query }), {
      only: ['actions'],
      preserveState: true
    })
  }),)
  useEffect(() => reload(params), [params])
    return (
        <>
            <Container>
            <Breadcrumb
          title={__('Action')}
          items={
            [
              { name: __('Home'), href: "_route('admin.dashboard.index')", current: false },
              { name: __('Action'), href: _route('admin.action.index'), current: true },
            ]
          }
        />
        <Card>
          <Card.Header>
            <Card.Title>
              <SearchForm
                value={params.search}
                onChange={e => setParams({ ...params, search: e.target.value })}
              />
            </Card.Title>
            <Card.Toolbar>
            {can('create-action') && (
                <Button
                  href={_route('admin.action.create')}
                >
                  <PlusIcon
                    className="w-6 mr-2"
                  />
                  {__('Add Action')}
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
                    {__('Name')}
                  </Datatable.Th>
                  {can(['update-action', 'delete-action']) && (
                    <Datatable.Th className="w-[15%] text-end">
                      {__('Actions')}
                    </Datatable.Th>
                  )}
                </Datatable.Tr>
              </Datatable.Thead>
              <Datatable.Tbody >
                {actions.data.map((item, key) => (
                  <Datatable.Tr key={key}>
                    <Datatable.Td>{actions.from + key}</Datatable.Td>
                    <Datatable.Td>{item.name}</Datatable.Td>
                    {can(['update-action', 'delete-action']) && (

                      <Datatable.Td className="text-end w-20">
                        <Datatable.Actions
                          detail={() => {
                            router.get(_route('admin.action.show', { action: item.id }))
                          }}
                          edit={ can('update-action') ?  () => {
                            router.get(_route('admin.action.edit', { action: item.id }))
                          } : null}
                          destroy={can('delete-action') ? () => {
                            setDeleteModal({
                              show: true,
                              onConfirm: () => {
                                router.delete(_route('admin.action.destroy', { action: item.id }))
                                setDeleteModal({ ...deleteModal, show: false })
                                saySomething();
                              },
                              onCancel: () => {
                                setDeleteModal({ ...deleteModal, show: false })
                              }
                            })
                          } : null}
                        />
                      </Datatable.Td>
                    )}
                  </Datatable.Tr>
                ))}
              </Datatable.Tbody>
            </Datatable>

            <Datatable.Pagination
              data={actions}
            />
          </Card.Body>
        </Card>
            </Container>
        </>
       
    );
}

Index.layout = (page) => <Master children={page} />;

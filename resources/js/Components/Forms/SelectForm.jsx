import classNames from "@/helpers/classNames";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useEffect, useState } from "react";
export default function SelectForm({ options = [], onChange = () => { }, name = '', value, error }) {
    const _value = options.find(option => option.value === value)
    const [selected, setSelected] = useState(_value)

    useEffect(() => {
        onChange({
            target: {
                value: selected?.value,
                name
            }
        })
    }, [selected])
    return (
        <>
            <Listbox value={null} onChange={setSelected}>
                {({ open }) => (
                    <>
                        <div className="relative ">
                            <Listbox.Button className={classNames(error ? " border-red-300   dark:border-red-600 dark:bg-slate-700" : " border-gray-300  bg-white dark:border-slate-600 dark:bg-slate-700", "relative w-full cursor-default rounded-md border py-2 pl-3 pr-10 text-left shadow-sm focus:border-violet-500 dark:focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-violet-500  dark:focus:ring-slate-600 sm:text-sm")}>
                                <span className="block truncate">{selected?.text ?? '-'}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-slate-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    <Listbox.Option
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white dark:text-slate-400 bg-violet-600 dark:bg-slate-800' : 'text-gray-900 dark:text-slate-400',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={{ value: '', text: '-' }}

                                    >
                                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                            -
                                        </span>

                                    </Listbox.Option>
                                    {options.map((option) => (
                                        <Listbox.Option
                                            key={option.value}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'text-white dark:text-slate-400 bg-violet-600 dark:bg-slate-800' : 'text-gray-900 dark:text-slate-400',
                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={option}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                        {option.text}
                                                    </span>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-violet-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
            {
                error && (
                    <p className="mt-1 text-xs text-red-600">{error}</p>
                )
            }
        </>
    )
}
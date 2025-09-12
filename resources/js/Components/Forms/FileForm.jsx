import classNames from "@/helpers/classNames";
import __ from "@/helpers/__";
import { ArrowDownCircleIcon, ArrowUpTrayIcon, DocumentTextIcon, EyeIcon } from "@heroicons/react/20/solid";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { Video } from "tabler-icons-react";
export default function FileForm({ value,
    onChange,
    id,
    name,
    error = null,
    focus = false,
    readonly = false,
    multiple = false,
}) {
    const renderHolder = () => {
        if (value == "" || value == null) {
            return (
                <>
                    <div className="border border-solid border-sky-600 dark:border-slate-600 p-2 rounded">
                        <ArrowUpTrayIcon className="w-10 text-sky-600 dark:text-slate-400" />
                    </div>
                    <div className="pl-4">
                        <p className="text-gray-900 dark:text-slate-400 font-semibold text-xs">Drag 'n' drop some files here, or click to select files</p>
                    </div>
                </>
            )
        }
        //check if value is blob
        if (value instanceof Blob) {
            //check if blob is image
            if (value.type.match(/image.*/)) {

                return (
                    <>
                        <div className="border border-solid border-sky-600 dark:border-slate-600 p-2 rounded">
                            <img src={URL.createObjectURL(value)} className="h-10" />
                        </div>
                        <div className="pl-4">
                            <p className="text-gray-900 dark:text-slate-400 font-semibold text-xs">{value.name}</p>
                            <div className="flex mt-2">
                                <a href={URL.createObjectURL(value)} onClick={e => e.stopPropagation()} className="flex mr-4" download={true}>{__('Download')} <ArrowDownCircleIcon className="w-6 ml-1" /></a>
                                <a href={URL.createObjectURL(value)} onClick={e => e.stopPropagation()} className="flex" target={'_blank'}>{__('View')} <EyeIcon className="w-6 ml-1" /></a>
                            </div>

                        </div>
                    </>
                )
            }
            return (
                <>
                    <div className="border border-solid border-sky-600 dark:bg-slate-700 p-2 rounded">
                        <DocumentTextIcon className="w-10 text-sky-600" />
                    </div>
                    <div className="pl-4">
                        <p className="text-gray-900 dark:text-slate-400 font-semibold text-xs">{value.name}</p>
                        <div className="flex mt-2">
                            <a href={"/" + value} onClick={e => e.stopPropagation()} className="flex mr-4" download={true}>{__('Download')} <ArrowDownCircleIcon className="w-6 ml-1" /></a>
                            <a href={"/" + value} onClick={e => e.stopPropagation()} className="flex" target={'_blank'}>{__('View')} <EyeIcon className="w-6 ml-1" /></a>
                        </div>

                    </div>
                </>
            )
        }
        if(value instanceof Array){
            return (
                <>
                    <div className="border border-solid border-sky-600  dark:border-slate-600 p-2 rounded">
                        {/* <img src={value} className="w-10" /> */}
                    </div>
                    <div className="pl-4">
                        <p className="text-gray-900 dark:text-slate-400 font-semibold text-xs">{value.length} Files</p>
                        <div className="flex mt-2">
                            <a href={value} onClick={e => e.stopPropagation()} className="flex mr-4" download={true}>{__('Download')} <ArrowDownCircleIcon className="w-6 ml-1" /></a>
                            <a href={value} onClick={e => e.stopPropagation()} className="flex" target={'_blank'}>{__('View')} <EyeIcon className="w-6 ml-1" /></a>
                        </div>

                    </div>
                </>
            )
        }

        //check if string is url
        if (value.match(/\.(jpeg|jpg|gif|png|svg)$/) != null) {
            //check if url with http or https 
            if (value.match(/^(http|https):\/\//) != null) {
                return (
                    <>
                        <div className="border border-solid border-sky-600  dark:border-slate-600 p-2 rounded">
                            <img src={value} className="w-10" />
                        </div>
                        <div className="pl-4">
                            <p className="text-gray-900 dark:text-slate-400 font-semibold text-xs">{value}</p>
                            <div className="flex mt-2">
                                <a href={value} onClick={e => e.stopPropagation()} className="flex mr-4" download={true}>{__('Download')} <ArrowDownCircleIcon className="w-6 ml-1" /></a>
                                <a href={value} onClick={e => e.stopPropagation()} className="flex" target={'_blank'}>{__('View')} <EyeIcon className="w-6 ml-1" /></a>
                            </div>

                        </div>
                    </>
                )
            }



            return (
                <>
                    <div className="border border-solid border-sky-600  dark:border-slate-600 p-2 rounded">
                        <img src={"/" + value} className="w-10" />
                    </div>
                    <div className="pl-4">
                        <p className="text-gray-900 dark:text-slate-400 font-semibold text-xs">{value}</p>
                        <div className="flex mt-2">
                            <a href={"/" + value} onClick={e => e.stopPropagation()} className="flex mr-4" download={true}>{__('Download')} <ArrowDownCircleIcon className="w-6 ml-1" /></a>
                            <a href={"/" + value} onClick={e => e.stopPropagation()} className="flex" target={'_blank'}>{__('View')} <EyeIcon className="w-6 ml-1" /></a>
                        </div>

                    </div>
                </>
            )
        }

        //check if string is video
        if (value.match(/\.(mp4|webm|ogg)$/) != null) {
            //check if url with http or https
            if (value.match(/^(http|https):\/\//) != null) {
                return (
                    <>
                        <div className="border border-solid border-sky-600  dark:border-slate-600 p-2 rounded">
                            <Video className="w-10 text-sky-600 dark:text-slate-400" />
                        </div>
                        <div className="pl-4">
                            <p className="text-gray-900 dark:text-slate-400 font-semibold text-xs">{value}</p>
                            <div className="flex mt-2">
                                <a href={value} onClick={e => e.stopPropagation()} className="flex mr-4" download={true}>{__('Download')} <ArrowDownCircleIcon className="w-6 ml-1" /></a>
                                <a href={value} onClick={e => e.stopPropagation()} className="flex" target={'_blank'}>{__('View')} <EyeIcon className="w-6 ml-1" /></a>
                            </div>

                        </div>
                    </>
                )
            }
        }



        return (
            <>
                <div className="border border-solid border-sky-600  dark:border-slate-600 p-2 rounded">
                    <ArrowUpTrayIcon className="w-10 text-sky-600 dark:text-slate-400" />
                </div>
                <div className="pl-4">
                    <p className="text-gray-900 dark:text-slate-400 font-semibold text-xs">Drag 'n' drop some files here, or click to select files</p>
                </div>
            </>
        )
    }
    if (readonly) {
        return (
            <section className={classNames(error ? "border-red-600 bg-red-100" : "border-sky-600  dark:border-slate-600 bg-sky-100 dark:bg-slate-700", "cursor-pointer border rounded-md px-6 py-7  ")}>
                <div >
                    <div className="flex items-center">
                        {renderHolder()}
                    </div>
                </div>
            </section>
        )
    }
    return (
        <>
            <Dropzone onDrop={acceptedFiles => {
                onChange({
                    target: {
                        name,
                        value: multiple ? acceptedFiles : acceptedFiles[0]
                    }
                })
            }} >
                {({ getRootProps, getInputProps }) => (
                    <section className={classNames(error ? "border-red-600 " : " dark:border-slate-600 bg-sky-100 dark:bg-slate-700", "cursor-pointer border rounded-md px-6 py-7  ")}>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <div className="flex items-center">
                                {renderHolder()}
                            </div>
                        </div>
                    </section>
                )}
            </Dropzone>
        </>


    )
}
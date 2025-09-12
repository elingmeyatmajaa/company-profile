import React from "react";

import { Link } from "@inertiajs/react";

export default function Pagination({ meta }) {
    return (
        <>
            <div >Showing <span>{meta.from}</span> to <span>{meta.to}</span> of <span>{meta.total}</span> entries</div>
            <ul >
                {meta.links.map((item, key) => {
                    return (
                        <li className="page-item" key={key}>
                            <Link className={`page-link ${item.active && 'active'}`} href={item.url} dangerouslySetInnerHTML={{ __html: item.label }}></Link>
                        </li>
                    )
                })}

            </ul>
        </>
    )
}
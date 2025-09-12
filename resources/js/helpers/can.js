import { usePage } from "@inertiajs/react";

export default function can(items) {
    const { permissions } = usePage().props.auth;
    if(!Array.isArray(items)) {
        items = [items];
    }
    return items.some(item => permissions.includes(item));
}
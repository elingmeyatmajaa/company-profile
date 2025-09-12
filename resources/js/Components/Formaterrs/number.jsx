export default function number(value) {
    return new Intl.NumberFormat('id-ID', {
        style: 'decimal'
    }).format(value);
}
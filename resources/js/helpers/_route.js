export default function _route(routeName, params = {}) {
    try {
        return route(routeName, params);
    } catch(e) {
        return null;
    }
}
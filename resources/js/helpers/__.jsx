import translate from "@/translate";
import { usePage } from "@inertiajs/react";

export default function __(key, params = {}){
    const { translations} = translate;
    if (translations[key] !== undefined) {
        let translation = translations[key];
        for (let param in params) {
            translation = translation.replace(':' + param, params[param]);
        }
        return translation;
    }
    return key;
}
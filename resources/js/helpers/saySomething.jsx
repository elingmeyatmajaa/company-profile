import { toast } from "react-toastify"

export default function saySomething(message = "Great", type = 'success') {
    if (type === 'success') {
        toast.success(message, {
            icon: "👍"
        })
    }
    if (type === 'error') {
        toast.error(message, {
            icon: "👎"
        })
    }
    if (type === 'info') {
        toast.info(message, {
            icon: "👋"
        })
    }
    if (type === 'warning') {
        toast.warning(message, {
            icon: "👋"
        })
    }
}
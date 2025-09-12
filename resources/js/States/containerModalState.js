import { atom } from "recoil"

const containerModalState = atom({
    key : 'containerModalState',
    default : {
        show : false,
        data : null,
        onCancel : () => {},
        onConfirm : () => {},
        children : null,
    }
})
export default containerModalState
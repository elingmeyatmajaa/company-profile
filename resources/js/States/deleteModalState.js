import { atom } from "recoil"

const deleteModalState = atom({
    key : 'deleteModalState',
    default : {
        show : false,
        data : null,
        onCancel : () => {},
        onConfirm : () => {},
    }
})
export default deleteModalState
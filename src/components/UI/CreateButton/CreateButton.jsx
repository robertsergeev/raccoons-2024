import "./CreateButton.css"
import {useDispatch} from "react-redux";
import {setVisible} from "../../../store/reducers/modal.js";

const CreateButton = () => {
    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(setVisible(true))
    }

    return (
        <button onClick={openModal} className="create-btn">
        </button>
    );
};

export default CreateButton;
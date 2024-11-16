import TransactionsList from './components/TransactionsList/TransactionsList'
import CategoriesCard from './components/CategoriesCard/CategoriesCard'
import './styles/App.css'
import CreateButton from "./components/UI/CreateButton/CreateButton.jsx";
import Modal from "./components/UI/Modal/Modal.jsx";
import CreateTransactionForm from "./components/CreateTransactionForm/CreateTransactionForm.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setVisible} from "./store/reducers/modal.js";

function App() {
    const {visible} = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const changeModalVisibility = (arg) => {
        dispatch(setVisible(arg))
    }

    return (
        <div className='App'>
            <CategoriesCard/>
            <TransactionsList/>
            <CreateButton/>
            <Modal visible={visible} setVisible={changeModalVisibility}>
                <CreateTransactionForm />
            </Modal>
        </div>
    )
}

export default App

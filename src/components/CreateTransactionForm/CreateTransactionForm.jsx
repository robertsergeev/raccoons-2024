import "./CreateTransactionForm.css"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setVisible} from "../../store/reducers/modal.js";
import Select from "../UI/Select/Select.jsx";
import {addNewTransaction} from "../../store/reducers/transactions.js";
import "./CreateTransactionForm.css"

const CreateTransactionForm = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const dispatch = useDispatch()

    const addTransaction = (e) => {
        e.preventDefault()

        if(name && category && amount) {
            const newTransaction = {
                id: Date.now(),
                name,
                category,
                amount: +amount,
                date: Date.now(),
            }

            dispatch(addNewTransaction(newTransaction))

            dispatch(setVisible(false))
            setName('')
            setAmount('')
            setCategory('')
        }

    }

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory)
    }

    return (
        <form className={'create-form'} onSubmit={addTransaction}>
            <input type="text" placeholder='Title' value={name} onChange={(e) => setName(e.target.value)}/>
            <div className={'form-section'}>
                <input type="number" placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <Select
                    value={category}
                    onChange={handleCategoryChange}
                    defaultValue={"Category"}
                    options={[
                        {value: "food", name: "Food"},
                        {value: "transport", name: "Transport"},
                        {value: "entertainment", name: "Entertainment"},
                        {value: "home", name: "Home"},
                        {value: "shopping", name: "Shopping"},
                        {value: "other", name: "Other"},
                    ]}
                />
            </div>
            <button type="submit">Send</button>
        </form>
    );
};

export default CreateTransactionForm;
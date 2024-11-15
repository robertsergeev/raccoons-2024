import TransactionItem from "../TransactionItem/TransactionItem"
import "./TransactionsList.css"

const TransactionsList = () => {
    const transactions = [
        { id: 0, name: 'mcdonalds', category: 'food', amount: 15, date: Date.now() },
        { id: 1, name: 't shirt', category: 'shopping', amount: 100, date: Date.now() },
        { id: 2, name: 'fridge', category: 'home', amount: 450, date: Date.now() },
        { id: 3, name: 'taxi', category: 'transport', amount: 20, date: Date.now() },
    ]
    
    return (
        <div className="transactions-list">
            {
                transactions.map(transaction => 
                    <TransactionItem key={transaction.id} transaction={transaction}/>
                )
            }
        </div>
    )
}

export default TransactionsList
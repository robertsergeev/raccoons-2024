import "./TransactionItem.css"

const TransactionItem = ({transaction}) => {
    return (
        <div className="transaction">
            <h2>{transaction.name}</h2>
            <p>{transaction.amount}</p>
            <p>{transaction.category}</p>
            <p>{transaction.date}</p>
    </div>
    )
}

export default TransactionItem
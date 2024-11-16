import { useSelector } from "react-redux";
import TransactionItem from "../TransactionItem/TransactionItem";
import "./TransactionsList.css";

const TransactionsList = () => {
    const {transactions} = useSelector(state => state.transactions)
    
    return (
        <div className="transactions-list">
            <div className="transaction-panel">
                <h2>Last transactions</h2>
                <p>Check your last transactions</p>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <TransactionItem key={transaction.id} transaction={transaction} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionsList;

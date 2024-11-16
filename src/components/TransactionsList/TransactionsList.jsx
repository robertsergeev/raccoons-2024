import {useSelector} from "react-redux";
import TransactionItem from "../TransactionItem/TransactionItem";
import "./TransactionsList.css";
import {useMemo} from "react";

const TransactionsList = () => {
    const {transactions} = useSelector(state => state.transactions)

    const averageExpense = useMemo(() => {
        const allExpenses = transactions.map(transaction => transaction.amount)
        return (allExpenses.reduce((acc, value) => acc + value, 0) / allExpenses.length).toFixed(2)
    }, [transactions])

    return (
        <div className="transactions-list">
            <div className="container">
                <div className="transaction-panel">
                    <h2>Last transactions</h2>
                    <p>Check your last transactions</p>
                    <table>
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Amount <span className='average-expense'>(Avg: {averageExpense}$)</span></th>
                        </tr>
                        </thead>
                        <tbody>
                        {transactions.map(transaction => (
                            <TransactionItem average={averageExpense} key={transaction.id} transaction={transaction}/>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TransactionsList;

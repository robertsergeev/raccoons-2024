import TransactionItem from "../TransactionItem/TransactionItem";
import "./TransactionsList.css";

const TransactionsList = () => {
    const transactions = [
        { id: 0, name: 'McDonalds', category: 'Food', amount: -15, date: '2024/03/29', method: 'Credit card' },
        { id: 1, name: 'T-Shirt', category: 'Shopping', amount: -100, date: '2024/03/28', method: 'Credit card' },
        { id: 2, name: 'Fridge', category: 'Home', amount: -450, date: '2024/03/27', method: 'Bank account' },
        { id: 3, name: 'Taxi', category: 'Transport', amount: -20, date: '2024/03/26', method: 'Credit card' },
    ];
    
    return (
        <div className="transactions-list">
            <div className="transaction-panel">
                <h2>Last transactions</h2>
                <p>Check your last transactions</p>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Method</th>
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

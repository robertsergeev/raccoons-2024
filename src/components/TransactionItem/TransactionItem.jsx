import React from 'react';
import './TransactionItem.css';

const TransactionItem = ({ transaction }) => {
    const { name, method, date, amount } = transaction;
    const amountClass = amount >= 0 ? "amount-cell positive" : "amount-cell negative";

    return (
        <tr>
            <td className="description-cell">
                <div className="icon">{name.charAt(0)}</div>
                <span>{name}</span>
            </td>
            <td className="date-cell">{date}</td>
            <td className={amountClass}>
                {`$${amount.toFixed(2)}`}
            </td>
        </tr>
    );
};

export default TransactionItem;

import './TransactionItem.css';
import {useMemo} from "react";

const TransactionItem = ({ transaction }) => {
    const { name, date, amount } = transaction;
    const amountClass = amount >= 0 ? "amount-cell positive" : "amount-cell negative";

    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));

    return (
        <tr>
            <td className="description-cell">
                <div className="icon">{name.charAt(0)}</div>
                <span>{name}</span>
            </td>
            <td className="date-cell">{formattedDate}</td>
            <td className={amountClass}>
                {`$${amount.toFixed(2)}`}
            </td>
        </tr>
    );
};

export default TransactionItem;

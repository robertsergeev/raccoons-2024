import './CategoriesCard.css';
import {useSelector} from 'react-redux';

const CategoriesCard = () => {
    const {transactions} = useSelector(state => state.transactions)

    const categoryTotals = transactions.reduce((acc, transaction) => {
        acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
        return acc;
    }, {});

    const totalAmount = Object.values(categoryTotals).reduce((sum, amount) => sum + amount, 0);

    const categories = Object.entries(categoryTotals).map(([category, amount]) => ({
        name: category,
        amount,
        percentage: ((amount / totalAmount) * 100).toFixed(2),
        color: getColorForCategory(category),
    }));

    function getColorForCategory(category) {
        const colors = {
            food: '#FFA07A',
            shopping: '#87CEFA',
            home: '#FFD700',
            transport: '#90EE90',
        };
        return colors[category] || '#D3D3D3';
    }

    return (
        <div className="categories-card">
            <div className="container">
                <h2>You&apos;ve spent <span style={{color: '#50C878'}}>{totalAmount}$</span></h2>
                <div className="chart">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="chart-segment"
                            style={{
                                width: `${cat.percentage}%`,
                                backgroundColor: cat.color,
                            }}
                        >
                            {Number(cat.percentage).toFixed(0)}%
                        </div>
                    ))}
                </div>
                <div className="categories-list">
                    {categories.map((cat, index) => (
                        <div key={index} className="category-item">
            <span
                className="category-color"
                style={{backgroundColor: cat.color}}
            ></span>
                            <span className="category-name">{cat.name}</span>
                            <span className="category-percentage">{cat.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;

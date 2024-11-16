import './CategoriesCard.css';
import { useSelector } from 'react-redux';
import { useState, useMemo } from "react";

const CategoriesCard = () => {
    const { transactions } = useSelector(state => state.transactions);
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: '' });

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

    const sortedCategories = useMemo(() => {
        return categories.sort((a, b) => a.percentage - b.percentage).reverse();
    }, [categories]);

    function getColorForCategory(category) {
        const colors = {
            food: '#FFA07A',
            shopping: '#87CEFA',
            home: '#FFD700',
            transport: '#90EE90',
            entertainment: '#FFA500',
        };
        return colors[category] || '#D3D3D3';
    }

    const handleMouseEnter = (e, content) => {
        setTooltip({
            visible: true,
            x: e.clientX,
            y: e.clientY - 10,
            content,
        });
    };

    const handleMouseLeave = () => {
        setTooltip({ ...tooltip, visible: false });
    };

    return (
        <div className="categories-card">
            <div className="container">
                <h2>You&apos;ve spent <span style={{ color: '#50C878' }}>{totalAmount}$</span></h2>
                { transactions.length ? <div className="chart">
                    {sortedCategories.map((cat, index) => (
                        <div
                            key={index}
                            className="chart-segment"
                            style={{
                                width: `${cat.percentage}%`,
                                backgroundColor: cat.color,
                            }}
                            onMouseEnter={(e) => handleMouseEnter(e, `${cat.name}: ${cat.amount}$ (${cat.percentage}%)`)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {Number(cat.percentage).toFixed(0)}%
                        </div>
                    ))}
                </div>
                    : <></>
                }
                <div className="categories-list">
                    {categories.map((cat, index) => (
                        <div key={index} className="category-item"
                             onMouseEnter={(e) => handleMouseEnter(e, `${cat.name}: ${cat.amount}$ (${cat.percentage}%)`)}
                             onMouseLeave={handleMouseLeave}
                        >
                            <span
                                className="category-color"
                                style={{ backgroundColor: cat.color }}
                            ></span>
                            <span className="category-name">{cat.name}</span>
                            <span className="category-percentage">{cat.percentage}%</span>
                        </div>
                    ))}
                </div>
                {
                    !transactions.length &&
                    <div>
                        <h2 style={{marginBottom: 10}}>You don&apos;t have any expenses yet!</h2>
                        <p>Click the button in the lower right corner!</p>
                    </div>

                }
            </div>
            {tooltip.visible && (
                <div
                    className="tooltip"
                    style={{
                        top: tooltip.y,
                        left: tooltip.x,
                    }}
                >
                    {tooltip.content}
                </div>
            )}

        </div>
    );
};

export default CategoriesCard;

import React from 'react';
import './CategoriesCard.css';
import { useSelector } from 'react-redux';

const CategoriesCard = () => {
  const {transactions} = useSelector(state => state.transactions)
  
  // Группируем транзакции по категориям
  const categoryTotals = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {});

  // Рассчитываем общую сумму всех категорий
  const totalAmount = Object.values(categoryTotals).reduce((sum, amount) => sum + amount, 0);

  // Генерируем данные для отображения
  const categories = Object.entries(categoryTotals).map(([category, amount]) => ({
    name: category,
    amount,
    percentage: ((amount / totalAmount) * 100).toFixed(2),
    color: getColorForCategory(category), // Функция для определения цвета
  }));

  // Функция для выбора цвета категории
  function getColorForCategory(category) {
    const colors = {
      food: '#FFA07A',
      shopping: '#87CEFA',
      home: '#FFD700',
      transport: '#90EE90',
    };
    return colors[category] || '#D3D3D3'; // Цвет по умолчанию
  }

  return (
    <div className="categories-card">
      <div className="chart">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="chart-segment"
            style={{
              width: `${cat.percentage}%`,
              backgroundColor: cat.color,
            }}
          ></div>
        ))}
      </div>
      <div className="categories-list">
        {categories.map((cat, index) => (
          <div key={index} className="category-item">
            <span
              className="category-color"
              style={{ backgroundColor: cat.color }}
            ></span>
            <span className="category-name">{cat.name}</span>
            <span className="category-percentage">{cat.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;

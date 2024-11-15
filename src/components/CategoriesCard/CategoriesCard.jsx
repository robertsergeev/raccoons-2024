import React from 'react';
import './CategoriesCard.css';

const CategoriesCard = () => {
    const transactions = [
        { id: 0, name: 'mcdonalds', category: 'food', amount: 15, date: Date.now() },
        { id: 1, name: 't shirt', category: 'shopping', amount: 100, date: Date.now() },
        { id: 2, name: 'fridge', category: 'home', amount: 450, date: Date.now() },
        { id: 3, name: 'taxi', category: 'transport', amount: 20, date: Date.now() },
        { id: 3, name: 'yo', category: 'other', amount: 200, date: Date.now() },
    ]

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

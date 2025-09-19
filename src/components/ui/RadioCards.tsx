import React from 'react';

const RadioCard = ({ value, label, selectedValue, onChange }) => {
  const isSelected = value === selectedValue;

  const cardClasses = `
    cursor-pointer p-4 border rounded-lg
    ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}
    hover:border-blue-400 transition-colors duration-200
  `;

  return (
    <div className={cardClasses} onClick={() => onChange(value)}>
      <input
        type="radio"
        name="radio-group" // Important for grouping
        value={value}
        checked={isSelected}
        onChange={() => {}} // Handle change via div click for better UX
        className="sr-only" // Visually hide the native radio button
      />
      <h3 className="font-semibold text-lg">{label}</h3>
      {/* Add other card content here */}
    </div>
  );
};

export default RadioCard;
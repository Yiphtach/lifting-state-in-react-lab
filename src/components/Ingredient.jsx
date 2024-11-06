// src/components/Ingredient.jsx

const Ingredient = ({ ingredient, action, onClick }) => {
    return (
      <li style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}
        <button onClick={onClick}>{action === 'add' ? '+' : 'X'}</button>
      </li>
    );
  };
  
  export default Ingredient;
  
// src/components/IngredientList.jsx

import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          action="add"
          onClick={() => addToBurger(ingredient)}
        />
      ))}
    </ul>
  );
};

export default IngredientList;

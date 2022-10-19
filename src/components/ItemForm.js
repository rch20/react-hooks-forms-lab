import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onCategoryChange(event) {
    setCategory(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: name,
      category: category,
    });
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

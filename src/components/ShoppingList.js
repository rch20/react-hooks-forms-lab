import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    })
    .filter((filteredItem) => {
      if (searchInput === "") return true;

      return filteredItem.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItem} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchInput}
        selectedCategory={selectedCategory}
        search={searchInput}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

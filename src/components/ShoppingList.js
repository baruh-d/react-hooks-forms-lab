import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchValue]=  useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
})
.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
const onSearchChange = (text)=>{
  setSearchValue(text);
}
const onItemFormSubmit = (obj)=>{
  setItems([...items, obj]);
}
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} search={search} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

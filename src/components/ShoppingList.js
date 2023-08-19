import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [listItems, setListItems] = useState(items)

  function handleCategoryChange(event, onSearchChange) {
    setSelectedCategory(event.target.value);
  }

  const [searchText, setSearchText] = useState("");

  function onSearchChange(newSearchText) {
    setSearchText(newSearchText)
  }

  function onItemFormSubmit(itemsToAdd) {
    const newArray = {...items, ...itemsToAdd}
    setListItems([...items, newArray])
  }

  const itemsToDisplay = listItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => item.name.includes(searchText));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={searchText} onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;




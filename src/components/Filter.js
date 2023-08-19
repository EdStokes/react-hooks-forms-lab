import React, {useState} from "react";

function Filter({onSearchChange, onCategoryChange, search}) {
  const [searchText, setSearchText] = useState("");

  function handleSearchChange(event) {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    onSearchChange(newSearchText);
  }

  
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={handleSearchChange} value={search}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;



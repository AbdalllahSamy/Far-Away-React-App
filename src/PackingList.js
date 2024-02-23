import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItems, onDeleteAllItems }) {
    const [sortBy, setSortBy] = useState("input");
  
    let sortedItems;
    if(sortBy === "input") sortedItems = items;
    
    if(sortBy === "description") sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
    
    if(sortBy === "packed") sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item item={item} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} key={item.id} />
          ))}
        </ul>
        <div className="actions" onChange={(e) => setSortBy(e.target.value)}>
          <select value={sortBy}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by input description</option>
            <option value="packed">Sort by input packed</option>
          </select>
          <button onClick={onDeleteAllItems}>Clear List</button>
        </div>
      </div>
    )
  }
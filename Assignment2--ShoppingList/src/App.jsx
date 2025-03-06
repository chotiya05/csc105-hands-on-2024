import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { text: newItem, bought: false }]);
      setNewItem("");
    }
  };

  const toggleBought = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    const newText = prompt("Edit item:", items[index].text);
    if (newText !== null) {
      setItems(
        items.map((item, i) => (i === index ? { ...item, text: newText } : item))
      );
    }
  };

  return (
    <div className="container">
      <h2>Shopping List</h2>
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button className="add-btn" onClick={addItem}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={item.bought ? "bought" : ""}
            onClick={() => toggleBought(index)}
          >
            {item.text}
            <button className="edit-btn" onClick={(e) => { e.stopPropagation(); editItem(index); }}>Edit</button>
            <button className="remove-btn" onClick={(e) => { e.stopPropagation(); removeItem(index); }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

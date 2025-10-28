import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // make sure this imports your CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/items")
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  }, []);

  const addItem = () => {
    if (!name.trim()) return; // prevent empty items
    axios
      .post("http://localhost:5001/api/items", { name })
      .then((response) => {
        setItems([...items, response.data]);
        setName("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="app-container">
      <div className="card app-card shadow-sm">
        <h1 className="text-center mb-4">Simple MERN Example</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter item name"
          />
          <button className="btn btn-primary" onClick={addItem}>
            Add Item
          </button>
        </div>

        <h2 className="mt-3">Items:</h2>
        <ul className="list-group">
          {items.map((item) => (
            <li
              key={item._id}
              className="list-group-item list-item-hover"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import handleChangeInput from "../components/forms/index.jsx";
import handleAddItemToList from "../components/list/index.jsx";

const Todo = () => {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleAddItem = handleAddItemToList(task, itemsList, setItemsList, setTask);
  const handleChange = handleChangeInput(setTask);

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleChange}
          value={task}
        />

        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list">
        {itemsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

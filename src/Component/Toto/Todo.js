import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
const todoKey = "reactTodo";
const Todo = () => {
  const [inputValue, setInputValue] = useState(() => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
  });
  const [target, setTargetValue] = useState([]);

  const HandleAdd = (event) => {
    setInputValue(event);
  };

  const HandleClick = () => {
    if (!inputValue.trim()) return;
    if (target.includes(inputValue)) return;
    setTargetValue((prev) => [...prev, inputValue]);
    console.log(setTargetValue);
    setInputValue("");
  };

  localStorage.setItem(todoKey, JSON.stringify(target));

  const data = localStorage.getItem(todoKey, JSON.stringify(target));

  const HandleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
  };

  const [time, setTime] = useState(new Date());
  const FormateDate = time.toLocaleDateString();
  const FormateTime = time.toLocaleTimeString();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); 
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const HandleDeleteButton = (value) => {
    console.log(target);
    console.log(value);
    const updateData = target.filter((item) => item !== value);
    setTargetValue(updateData);
  };
  const HandleCelarAllButton = () => {
    setTargetValue([]);
  };
  return (
    <div>
      <h2>
        {FormateDate} - {FormateTime}
      </h2>
      <p>{data}</p>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Enter the value"
          autoComplete="off"
          value={inputValue}
          onChange={(event) => HandleAdd(event.target.value)}
        />
        <button type="submit" onClick={HandleClick}>
          Add
        </button>
      </form>
      <ul>
        {target.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <input type="text" />
            <button type="button" onClick={() => HandleDeleteButton(item)}>
              <MdDelete />
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={HandleCelarAllButton}>
        Clear All
      </button>
    </div>
  );
};

export default Todo;

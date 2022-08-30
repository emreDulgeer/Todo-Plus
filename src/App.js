import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import Weather from "./components/Weather";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const lsTodos = localStorage.getItem("todos");

    if (lsTodos) {
      return JSON.parse(lsTodos);
    } else {
      return [];
    }
  });
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const editHandleChange = (e) => {
    setSelectedTodo({ ...selectedTodo, content: e.target.value });
  };
  const [isEdit, setIsEdit] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});

  const downloadFile = () => {
    console.log("clck");
    var data = localStorage.getItem("todos");
    var fileName = "myData.json";

    var fileToSave = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });

    saveAs(fileToSave, fileName);
    console.log("clck");
  };
  return (
    <div className="container">
      <Weather />
      <h1 className="d-flex justify-content-center mt-3 text-primary">
        ToDo App
      </h1>
      <ToDoForm
        addTodo={addTodo}
        editHandleChange={editHandleChange}
        isEdit={isEdit}
        selectedTodo={selectedTodo}
        todos={todos}
        setTodos={setTodos}
        setIsEdit={setIsEdit}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        setSelectedTodo={setSelectedTodo}
        setIsEdit={setIsEdit}
      />

      <button className="btn btn-primary" onClick={() => downloadFile()}>
        Download
      </button>
    </div>
  );
};

export default App;

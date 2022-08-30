import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos, setIsEdit, setSelectedTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <ul className="list-group" key={todo.id}>
          <ToDo
            todo={todo}
            setSelectedTodo={setSelectedTodo}
            setIsEdit={setIsEdit}
            setTodos={setTodos}
            todos={todos}
          />
        </ul>
      ))}
    </div>
  );
};

export default ToDoList;

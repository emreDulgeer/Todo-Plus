import React from "react";

const ToDo = ({ todo, setIsEdit, setSelectedTodo, todos, setTodos }) => {
  const handleEdit = (todo) => {
    setIsEdit(true);
    setSelectedTodo({ ...todo });
  };
  const handleDelete = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(removeItem);
  };
  return (
    <div>
      <li className="list-group-item my-2 d-flex justify-content-between">
        {todo.content}
        <div>
          <button
            className="btn btn-warning mx-3"
            onClick={() => handleEdit(todo)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default ToDo;

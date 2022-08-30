import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const ToDoForm = ({
  addTodo,
  editHandleChange,
  isEdit,
  selectedTodo,
  setIsEdit,
  setTodos,
  todos,
}) => {
  const [todo, setTodo] = useState({
    id: "",
    content: "",
    isComplete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.content !== "") {
      addTodo({ ...todo, id: uuid() });
    }
    setTodo({ content: "" });
  };
  const handleEditedForm = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });

    setIsEdit(false);

    setTodos(updatedItem);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();

    handleEditedForm(selectedTodo.id, selectedTodo);
  };

  const handleChange = (e) => {
    setTodo({ ...todo, content: e.target.value });
  };

  return (
    <div>
      {isEdit ? (
        <div>
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <h5 className="d-flex justify-content-center">Edit mission</h5>
              <input
                type="text"
                onChange={editHandleChange}
                value={selectedTodo.content}
                className="form-control my-2"
                placeholder="Edit Todo"
              />
              <button className="btn btn-success my-2" type="submit">
                Edit
              </button>
            </div>
          </form>
          <button
            className="btn btn-danger"
            type="submit"
            onClick={() => setIsEdit(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h5 className="d-flex justify-content-center">
                Add something to list
              </h5>
              <input
                type="text"
                onChange={handleChange}
                value={todo.content}
                className="form-control my-2"
                placeholder="Add something"
              />
              <button className="btn btn-success" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ToDoForm;

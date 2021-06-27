import React, { useState, useEffect, useRef } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { TweenMax, Power3 } from "gsap";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  let logoItem = useRef(null);
  let logoText = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      logoItem.current,
      1,
      {
        y: -40,
        ease: Power3.easeOut,
      },
      {
        y: 0,
        ease: Power3.easeOut,
      }
    );
    TweenMax.fromTo(
      logoText.current,
      2,
      {
        x: -40,
        ease: Power3.easeOut,
      },
      {
        x: 0,
        ease: Power3.easeOut,
      }
    );
  });

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      ref={logoItem}
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div ref={logoText} key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;

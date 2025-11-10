import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import {
  setReduxTodos,
  addTodo,
  deleteTodo,
  updateTodoStatus,
  updateTodoTitle,
  setTodoSelectedEditId
} from "../app/features/todos/todosSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoItem = ({ id, title, status, setTodoId }) => {
  const { todoSelectedEditId } = useSelector((state) => {
    return state.todos;
  });
  const dispatch = useDispatch();

  const [todoTitle, setTodoTitle] = useState(title);
  // const [disabled, setDisabled] = useState(true);

  // const handleEditTodoTitle = () => {
  //   if (disabled) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //     if (title !== todoTitle) {
  //       // changeParentTodoTitle(id, todoTitle);
  //       dispatch(updateTodoTitle(todoSelectedIdEdit, todoTitle));
  //     }
  //   }
  // };

  const handleEditTodoTitle = () =>{
    if(todoSelectedEditId===-1){
      dispatch(setTodoSelectedEditId(id));
    }
    else if(todoSelectedEditId===id){
      dispatch(updateTodoTitle({id, todoTitle}));
      dispatch(setTodoSelectedEditId(-1));
    }
    else if(todoSelectedEditId!==id){
      dispatch(setTodoSelectedEditId(id));
    }
    }

  const handleChangeTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  return (
    <li
      key={id}
      style={{
        borderRadius: "5px",
        backgroundColor: "#E4E1D4",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      {todoSelectedEditId === id ? (
        <input
          value={todoTitle}
          onChange={handleChangeTodoTitle}
          style={{ width: "300px" }}
        />
      ) : (
        <label style={{ width: "300px" }}>{todoTitle}</label>
      )}

      <div>
        <button
          style={{
            backgroundColor: "#3B8CB7",
            color: "white",
            borderWidth: "0px",
            marginLeft: "1rem",
            padding: "5px",
            borderRadius: "3px",
          }}
          onClick={() => {
            // if (disabled) {
            //   setTodoId(id);
            // } else {
            //   setTodoId(null);
            // }
            handleEditTodoTitle();
          }}
        >
          {todoSelectedEditId !== id  ? <MdModeEdit /> : <FaSave />}
        </button>
        <button
          style={{
            backgroundColor: "#BB534D",
            color: "white",
            borderWidth: "0px",
            margin: "auto 0.8rem",
            padding: "5px",
            borderRadius: "3px",
          }}
          onClick={() => dispatch(deleteTodo(id))}
        >
          <MdDelete />
        </button>
        <button
          style={{
            backgroundColor: "#8EAC56",
            color: "white",
            borderWidth: "0px",
            padding: "5px",
            borderRadius: "3px",
          }}
          onClick={() => dispatch(updateTodoStatus(id))}
        >
          {status === "completed" ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

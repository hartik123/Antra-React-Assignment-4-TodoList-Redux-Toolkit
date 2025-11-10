import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const PendingTaskList = ({changeParentTodoTitle, todoId, setTodoId}) => {

  const {todos} =useSelector(state=>state.todos);

  const pendingTodos = todos.filter(todo=>todo.status.toLowerCase() === "pending");


  return (
    <div
      style={{
        backgroundColor: "#F1F1F1",
        borderRadius: "1rem",
        minHeight: "70vh",
        minWidth: "40%",
        padding: "0.5rem",
        margin: "0.5rem",
      }}
    >
      <h2 style={{ marginLeft: "1rem" }}>Pending Tasks</h2>
      <ul>
        {pendingTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} changeParentTodoTitle={changeParentTodoTitle} todoId={todoId}
          setTodoId={setTodoId}/>;
        })}
      </ul>
    </div>
  );
};

export default PendingTaskList;

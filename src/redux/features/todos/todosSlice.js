import { createSlice } from "@reduxjs/toolkit";

export const  todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        todoSelectedEditId: -1,
    },
    reducers: {
        setReduxTodos: (state, action)=>{
            state.todos=action.payload;
        },
        addTodo: (state, action)=>{
            console.log(action)
            state.todos.push(action.payload); 
        },
        deleteTodo: (state, action)=>{
            state.todos = state.todos.filter(todo=>todo.id!==action.payload);
        },
        updateTodoStatus: (state, action)=>{
            console.log(action)
            const todoItem = state.todos.find(todo=>todo.id===action.payload);
            if(todoItem.status==="completed"){
                todoItem.status="pending";
            }
            else{
                todoItem.status="completed";
            }
        },
        updateTodoTitle: (state, action)=>{
            const todo = state.todos.find(todo=>todo.id===action.payload.id);
            todo.title=action.payload.todoTitle;
        },
        setTodoSelectedEditId:(state, action)=>{
            state.todoSelectedEditId=action.payload;
        }
    }
})

export const {setReduxTodos, addTodo,deleteTodo , updateTodoStatus, updateTodoTitle, setTodoSelectedEditId} = todoSlice.actions;
export default todoSlice.reducer;
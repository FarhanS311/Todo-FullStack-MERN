import React from "react";
import classes from "./AddTodo.module.css"

const AddTodo = (props)=>{
    return (
        <button className={classes.addTodoContainer} onClick={props.onOpenModal}>
            Add new Todo
        </button>
    );
}

export default AddTodo;
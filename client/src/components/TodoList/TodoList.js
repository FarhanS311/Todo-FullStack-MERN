import React from "react";
import classes from './TodoList.module.css';
import ListItem from "../ListItem/ListItem";

const TodoList = (props)=>{
    const {todoList=[]} = props;
    const getTodoList = ()=>{
        return (
            todoList.map((elmnt)=>{
                return <ListItem key={elmnt.id} title={elmnt.title} body={elmnt.body} />
            })
        )
    }
    return (
        <div className={classes.todoListContainer}>
            {getTodoList()}
        </div>
    );
}

export default TodoList;

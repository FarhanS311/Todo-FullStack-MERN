import React from "react";
import classes from "./ListItem.module.css";

const ListItem = (props)=>{

    return (
        <div className={classes.listItemContainer}>
            <h3>{props.title}</h3>
            <span>{props.body}</span>
            <div className={classes.actionsContainer}>
                <span>Edit</span>
                <span>Delete</span>
            </div>
        </div>
    );
}

export default ListItem;
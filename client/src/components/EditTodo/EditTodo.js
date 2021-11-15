import React, {useState} from "react";
import classes from "./EditTodo.module.css";
import Modal from "../Modal/Modal";

const EditTodo = (props) => {
    const [title,setTitle] = useState();
    const [body,setBody] = useState();
    const {onAddTodoHandler} = props;

    const onAddTodo = ()=>{
        onAddTodoHandler(title,body);
    }
    
  return (
    <Modal>
      <h2>Add edit task</h2>
      <div className={classes.content}>
        <div class="form-group">
        <label for="exampleFormControlInput1">Title</label>
          <input
            id="exampleFormControlInput1"
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div class="form-group mb-3">
          <label for="exampleFormControlTextarea1">Body</label>
          <textarea
            class="form-control form-control-lg"
            id="exampleFormControlTextarea1"
            rows="3"
            value={body}
            onChange={(e)=>setBody(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
            <button type="button" className="btn btn-primary" onClick={onAddTodo}>Save</button>
            <button type="button" className={`btn btn-secondary ${classes.cancelBtn}`} onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default EditTodo;

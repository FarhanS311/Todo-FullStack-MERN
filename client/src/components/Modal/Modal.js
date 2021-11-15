 import React from "react";
 import classes from "./Modal.module.css";

 const Backdrop = ()=>{
     return (
         <div className={classes.backdrop}>

         </div>
     );
 }

 const Overlay = (props)=>{
     return (
         <div className={classes.overlay}>
             <div className={classes.innerSection}>
                 {props.children}
             </div>
         </div>
     )
 }

 const Modal = (props)=>{
     return (
        <>
            <Backdrop />
            <Overlay {...props}/>
        </>
     );
 }

 export default Modal;
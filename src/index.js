import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import TodoList from "./Todo";
  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);
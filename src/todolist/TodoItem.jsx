/* eslint-disable no-undef */
import { useState } from "react";
import DeleteIcon from "../assets/icons8-delete-30.png"
import "./todo.css"

// eslint-disable-next-line react/prop-types
export const TodoItem = ({ title , deleteTodo ,id}) => {

    const [isActive, setIsActive] = useState(false);
    const HandleDone = () => {
        if (!isActive)
            setIsActive(true)
        else
           return setIsActive(false)
  
    }

  return (
    <div className="todo-item" id="todo-1">
       <p
        className="todo-task-title"
        style={{ color: isActive ? "#03C03C" : "" }}
      >
        {title}
      </p>
      <input
        type="checkbox"
        className="checkbox1"
        id={"check-" + id}
        onClick={HandleDone}
      />
      <img className="del-icon" src={DeleteIcon} onClick={deleteTodo} />
    </div>
  )
}
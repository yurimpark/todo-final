import React from "react";
import './style.css'

function Todo({todo, onDeleteHandler, onCompleteHandler }) {
    return (
      <div>
        <h2>
          {todo.title}
        </h2>
        <p>
          {todo.body}
        </p>
        <button onClick={()=> {onDeleteHandler(todo.id)}}>삭제</button>
        <button onClick={()=> {onCompleteHandler(todo.id)}} >{todo.isDone ? "취소" : "완료"}</button>

      </div>
    )
}
export default Todo

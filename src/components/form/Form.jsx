import React, { useState, useRef } from "react";
import TodoList from "../../pages/TodoList";
import './style.css'

function Form({todos, setTodos}) {

    const initialState = {id:0, title:"", body: "", isDone: false } // 초기값
    const [inputTodo, setInputTodo ] = useState(initialState)
    const nextId = useRef(2)
    const onChangeHandler = (event) =>{
      const {value,name} = event.target 
      // 객체비구조화 할당 => event.target의 name과 value를 추출해서 각각 사용할 수 있도록 
      setInputTodo({...inputTodo, [name]:value , id: nextId.current})
      // [name]으로 대괄호를 붙이는 이유는 키의 이름이 동적으로 변할수 있는 경우에 사용하기 위함이다
      nextId.current++
    }

//     event.target event.currentTarget
// if (name === "title) {setInpuToto({...복사, "title": value})}
// js object dynamic key
// object[key]

    const onSubmitHandler = (event) => {
      event.preventDefault() //from의 기능 중 submit을 하면 자동으로 페이지를 리랜더링하는데 이걸 하면 정보가 다 날아가기 때문에 이를 방지
      setTodos([...todos, inputTodo])
      setInputTodo(initialState) // input창을 빈칸으로 
    }

    return (
      <form onSubmit= {onSubmitHandler}  >
        <div>
          <label>
            제목
          </label>
                {/* 인풋창을 빈칸으로 두고 submit을 했을 시 id가 모두 0으로 출력되어 삭제/업데이트 시 한꺼번에 이벤트가 일어나는 오류 발생 */}
                {/* 유저가 인풋창에 값을 필수로 넣고 진행할 수 있게 required 속성 추가 */}
                <input type='text' name = 'title' onChange={onChangeHandler} value = {inputTodo.title} required />
          <label>
            내용
          </label>        
                <input type='text' name = 'body' onChange={onChangeHandler} value = {inputTodo.body} required />

        </div>
            <button>추가하기</button>

      </form>
    )
}
export default Form

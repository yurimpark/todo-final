// import './App.css';
import React, {useState} from 'react'
import Layout from '../components/layout/Layout'
import Header from '../components/header/Header'
import Form from '../components/form/Form'
import List from '../components/list/List'


function TodoList() {

  const [todos,setTodos] = useState([
    {
      id:1 ,
      title: "React" , 
      body: "어렵군요" , 
      isDone : false 
    },
    {
      id:2 ,
      title: "JS" , 
      body: "마찬가지로 어렵군요" , 
      isDone : true 
    }
  ]
  )
    const todosSet = {todos:todos , setTodos:setTodos}


  return (

    <Layout>
      <Header/>
      {/* <Form todos={todos} setTodos={setTodos} > */}
      <Form {...todosSet}>

      </Form>
      {/* </Form> */}
      <List todos={todos} setTodos={setTodos} />

    </Layout>
  );
}

export default TodoList;

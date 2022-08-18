// import './App.css';
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "React",
      body: "공부를 하자",
      isDone: false,
    },
    {
      id: 2,
      title: "Work out",
      body: "숨쉬기 말고",
      isDone: true,
    },
  ]);
  const todosSet = { todos: todos, setTodos: setTodos };

  return (
    <Layout>
      <Header />
      {/* <Form todos={todos} setTodos={setTodos} > */}
      <Form {...todosSet}></Form>
      {/* </Form> */}
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
}

export default TodoList;

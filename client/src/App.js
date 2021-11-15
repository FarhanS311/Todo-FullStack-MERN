import {React,useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import EditTodo from './components/EditTodo/EditTodo';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(async()=>{
    setIsLoading(true);
    const response = await axios({
      url: 'api/todos/'
    })
    const {data} = response;
    setTodoList(data.todos);
    setIsLoading(false); 
  },[]);



  const onOpenModal = ()=>{
    setIsModalOpen(true);
  }
  const onCancel = ()=>{
    setIsModalOpen(false);
  }

  const onAddTodoHandler = async (title,body)=>{
    onCancel();
    setIsLoading(true);
    const response = await axios({
      url: 'api/todos',
      method: 'POST',
      data: {
        title:title,
        body:body
      }
    });

    const {data} = response;
    setIsLoading(false);
    setTodoList(data.todos);
  }


  return (
    <div className='todoApp'>
      {isModalOpen ? <EditTodo onCancel={onCancel} onAddTodoHandler={onAddTodoHandler}/> : ''}
      <TodoHeader />
      <AddTodo onOpenModal={onOpenModal}/>
      {isLoading ? <h3>Loading...</h3> : <TodoList todoList={todoList}/>}
    </div>
  );
}

export default App;

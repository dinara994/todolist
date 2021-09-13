import React, {useEffect, useState} from 'react';
import TotoItem from "../../TodoItem";
import axios from "axios";
//1- Сначало печатаю и надо сохранять
//2- при нажатии на кнопку должно что-то происходить
//3 - чтоб создать новое дело, должны знать ТЕКСТ нового дело
//value - (жетская связка)


const Todo = () => {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Go to home', createdAt: +new Date()},
        {id: 2, title: 'hjbhkf kjnkj', createdAt: +new Date()},
        {id: 3, title: 'Go to school', createdAt: +new Date()}
    ]) // 1-[{},{}, {}] - лежат в todos, 2-новое значение todos это setTodos(она меняет её)
    const [newTodo, setNewTodo] = useState('') //то что печатаем в инпут(сохр. в state)

    const handleChange = (e) => { //
        setNewTodo(e.target.value)
    }
    const addTodo = () => {  //формирует отдельно новый элемент
        const newItem = {
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            //:проверяем длину массива,если что-то есть, то послоеднему элементу его значение id + 1 : если массив пустой тогда значение id подставиться 1
            title: newTodo,
            createdAt: +new Date(),
        }
        setTodos([...todos, newItem]) //обновляет(добавляет) значение todos
        //новое значение setTodos, все что было в todos и + 1 обьект {}
   setNewTodo('')
    }
    const deleteTodo = (id) => { //удалять по id
        setTodos(todos.filter(el => el.id !== id)) //не равен на id  на которую я кликнул
        //новое значение отфильтровали, и взять тех у которых id не совпадает с тем который мы удалили
    }

    const filterByDate = () => {
        console.log(777)
    }
const updateTodo = (modified, id) => {
        setTodos(todos.map(el => el.id === id ? {...el, title: modified} : el))
}
    useEffect(() => {
        axios('https://613dc8a294dbd600172ab9e4.mockapi.io/todos')
            .then(({data}) => setTodos(data))
    },[])


    return (
        <div className='row justify-content-center align-item-center my-5'>
            <div className='col-md-4 offset-md-4'>
                <h1>Todolist</h1>

                <div className='d-flex md-4 my-3'>
                    <input className='form-control me-3' type="text" value={newTodo} placeholder='Add...'
                           onChange={handleChange}/> {/*//печатается в инпуте*/}
                   <button type='button' className='btn btn-primary'
                           onClick={addTodo} disabled={!newTodo.trim()}>Add</button>  {/*при нажатии срабатывает функция addTodo */}
             {/*1-и можем не передавать newTodo тк область видимости позволяет*/}
              {/*2-Click вызываем нов.дело addTodo в нее передаем переменную (newTodo) и передам текст дело(текст хранится в newTodo), addTodo должен принять это дело propsom*/}
                </div>
                <ul className='list-group'>
                    {
                        todos.map(item => (
                            <TotoItem key={item.id} item={item} deleteTodo={deleteTodo} updateTodo={updateTodo} />

                        )
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Todo;

import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();
//todoList.todos.forEach( todo => createTodoHtml( todo ) );
todoList.todos.forEach( createTodoHtml );

// console.log( 'todos', todoList.todos );

// todoList.todos[0].printClass();

// localStorage.setItem( 'myKey', 'abc1234' );

// setTimeout( ()=> {
//     localStorage.removeItem('myKey');
// }, 1500 );
import './App.scss';
import Header from './components/UI/Header/Header'
import TodoList from './components/TodoList/TodoList';
import NewTodoItem from './components/NewTodoItem/NewTodoItem';
import TodoListFilter from './components/TodoListFilter/TodoListFilter';

function App() {
  return (
    <div className="App">
      <Header />
      <NewTodoItem />
      <TodoList />
      <TodoListFilter/>
    </div>
  );
}

export default App;

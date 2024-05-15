import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import { Todo } from './lib/api';
import { TodoState, getTodoFetch } from './store/reducer';
import { useEffect } from 'react';

function App() {
  const todos = useSelector<{todos: TodoState}, Todo[]>(state => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoFetch());
  });

  console.log(todos);
  return (
    <div className="App">

    </div>
  )
}

export default App;

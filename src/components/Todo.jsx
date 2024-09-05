import React from 'react';
import { BsPlus, BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddToDo = text => {
    dispatch(addTodo(text));
  };
  const handleAddToDoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddToDo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal TODO APP
      </h2>
      <div className="flex items-center mb-4">
        <input
          onChange={e => setNewTodoText(e.target.value)}
          value={newTodoText}
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Todo"
        />
        <button
          onClick={handleAddToDoClick}
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* <FilterButtons /> */}
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      {/* <TodoList /> */}
    </div>
  );
};

export default Todo;

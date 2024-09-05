import React from 'react';
import { Provider } from 'react-redux';
import Todo from './components/Todo';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Todo></Todo>
    </Provider>
  );
};

export default App;

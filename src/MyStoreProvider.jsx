import React, { createContext, useReducer, useState } from 'react';

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export const MyStoreContext = createContext();

const MyStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [dark, setDark] = useState(false)
  const [value, setValue] = useState('Counter')

  const darkMode = () => {
    setDark(!dark)
  }

  const valueSwitch = () => {
    setValue(value === 'Counter' ? 'Hello it`s time to learn!!!': 'Counter');
  };

  const incrementCounter = () => {
    dispatch({ type: 'INCREMENT'});
  };

  const decrementCounter = () => {
    dispatch({ type: 'DECREMENT'});
  };

  return (
    <MyStoreContext.Provider value={{ state, value, dark, darkMode, valueSwitch, incrementCounter, decrementCounter }}>
      {children}
    </MyStoreContext.Provider>
  );
};

export default MyStoreProvider;
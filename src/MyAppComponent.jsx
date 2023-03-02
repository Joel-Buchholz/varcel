import React, { useContext } from 'react';
import { MyStoreContext } from './MyStoreProvider';

const MyAppComponent = () => {
  const { value, valueSwitch,  state, dark, darkMode, incrementCounter, decrementCounter } = useContext(MyStoreContext);

  return (
    <div className={dark ? "dark" : "App"}>
        <h1>{value}</h1>
        <button onClick={valueSwitch}>Hello</button>
        <h2>{state.counter}</h2>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <br/>
        <button onClick={darkMode}>{ dark ? "Normal" : "Dark"}</button>
    </div>
  );
};

export default MyAppComponent;

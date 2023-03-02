import React from 'react';
import MyStoreProvider from './MyStoreProvider';
import MyAppComponent from './MyAppComponent';
import './App.css'

const App = () => {
  return (
    <MyStoreProvider>
      <MyAppComponent />
    </MyStoreProvider>
  );
};

export default App;

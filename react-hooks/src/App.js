
import './App.css';
import { UseContext } from './Hooks/UseContext';
import { UseEffect } from './Hooks/UseEffect';
import UseImperativeHandle from './Hooks/UseImperativeHandle';
import UseLayoutEffect from './Hooks/UseLayoutEffect';
import { UseMemo } from './Hooks/UseMemo';
import UseRef from './Hooks/UseRef';
import React from 'react'
import { UseCallback } from './Hooks/UseCallback';
import UseReducer from './Hooks/UseReducer';

function App() {
  return (
    <div className="App">
      <UseReducer />
    </div>
  );
}

export default App;

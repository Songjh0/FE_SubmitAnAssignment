import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from "./Todolist";
import MapTest from "./MapTest";
import Clock from "./Timer";

function App() {
  let name = "리액트";
  return (
    <div className="container">
      <Todolist></Todolist>
      <Clock></Clock>
    </div>
  );
}


export default App;

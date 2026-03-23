import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from "./Todolist";
import MapTest from "./MapTest";
import Clock from "./Timer";
import MyWeather from "./MyWeather";

function App() {
  let name = "리액트";
  return (
    <div className="container">
      <Todolist></Todolist>
      {/* <Clock></Clock> */}
      <MyWeather weather="맑음">일기 예보</MyWeather>
    </div>
  );
}


export default App;

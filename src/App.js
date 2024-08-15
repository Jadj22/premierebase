// import { Header } from './components/Header'
// import { Footer } from './components/Footer'

import { useState } from 'react';
import "./App.css";
// rafc arrow function.\
// rfc function
// rcc react class component

export default function App() {
  // on utilise le state avec le hook useState, qui permet de mettre à jour des valeurs dynamiquement et de rendre l'interface interactive, comme par exemple un compteur de cartes.
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("Joel");


  function handleChange(event) {
    setName(event.target.value);
  }

  function handleReset() {
    setName("Joel");
  }

  // function handleAdd() {
  //   setCount(count + 1);
  // }

  // function handleSub() {
  //   setCount(count - 1);
  // }

  // function handleRest() {
  //   setCount(0);
  // }

  return (
      <div className="App">
        <div className="box">
          {/* <p>{count}</p>
          <button onClick={handleAdd} className="add">ADD</button>
          <button onClick={handleSub} className="sub">SUB</button>
          <button onClick={handleRest} className="reset">RESET</button> */}
          <button onClick={handleReset} className="reset">Rest</button>
          <input type="text" onChange={handleChange} />
          <p>Hello, {name}</p>
        </div>
      </div>


  )
}

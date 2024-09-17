import { Header } from './components/Header'


import "./App.css";
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import { useState } from 'react';


export default function App() {

  //Ici on a initialise l'etat tasklist a tableau vide
    const [ tasklist, setTasklist ] = useState([]);




  return (
      <div className="App">
        <Header />
        {/*ici dans ce composant on a passe les*/}
        <AddTask  tasklist={tasklist} setTasklist={setTasklist} />
        <ShowTask tasklist={tasklist} setTasklist={setTasklist} />
        </div>
  )
}

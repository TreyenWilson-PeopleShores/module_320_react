import { useState } from 'react'
import './App.css'
import Counter from './components/Counter.jsx'
import Fruits from "./components/Fruits.jsx"

function HelloWorld(props, age){
  return (
    <div>
      <p>Hello {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}





function App() {

  return (
    <>
      <HelloWorld name = "Treyen" age = {23}/>
      <Counter/>
      <Fruits/>
    </>
  )
}

export default App

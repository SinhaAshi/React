import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter, setCounter]=useState(15)
  
  
 // let counter = 15
  const addValue = () =>{
    //counter=counter+1;
    setCounter(counter + 1);
    console.log("Counter value is", counter);
    
    }
    const removeValue =()=>{
      if(counter>0){
      setCounter(counter - 1);}
      //console.log("Counter value is", counter);
      else{
      alert("AB AUR KITNA GIRAYEGA BRO");}
    }


  return (
    <>
      <h1>Welcome to the site , created using Vite React</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick ={addValue}>ADD VALUE</button>
      <br/>
      <button onClick={removeValue}>REMOVE VALUE</button>
    </>
  )
}

export default App

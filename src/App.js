import React, {useState} from 'react';
import './App.css';

function App() {

  const [num1, setNum1]= useState(0);
  const [num2, setNum2]= useState(0);
  const [soma, setSoma]= useState(0);
  const somar = (num1,num2)=>{
      return setSoma(num1+num2);

}
    
  return(

      <div>    
        <h3>Soma de Números</h3>    
        <input className="num1" type="number" onChange={(num1)=>{setNum1(num1.target.valueAsNumber)}}/> 
        <input className="num2" type="number" onChange={(num2)=>{setNum2(num2.target.valueAsNumber)}}/>
        <button className="button" type="submit" onClick={()=>somar(num1,num2)}>+</button>
        <button className="soma">{soma}</button> 
      </div>

  )      
 
}

export default App;

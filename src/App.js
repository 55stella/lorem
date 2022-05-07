
import './App.css';
import { useState } from 'react';
import Data from './data'

function App() {
  const[count, setCount]= useState('')
  const [data, setData] =useState([])
  
  
const handleOnclick =(e)=>{
e.preventDefault()
    if(count > Data.length-1){
      setData(Data)
      setCount('')
  
    }if(count <= Data.length-1){
      setData(Data.slice(0,count))
      setCount('')

    }if(count <= 0){
      setData(Data.slice(-1))
           
    }
    

  }

  
  return (
    <main className="App">
      <section className='display'>
        <h1>Tired of boring lorem ipsum ?</h1>
        
        <form className='lorem-form'>
          <div>
          <label htmlFor="amount">Paragraph:</label>
          <input type="number"
          id ='paragraph' 
          name ='Paragraph'
           value ={count}
            onChange={(e)=>setCount(e.target.value)}
            />
         </div>
         <button type ='button' onClick={handleOnclick}> GENERATE</button>
        </form>
      
        {data.map((item, index)=>{
          return <div key ={index}  className='lorem-text'>
          <p>{item}</p>
        </div>
        })}
        
      </section>
      
    </main>
  );
}

export default App;

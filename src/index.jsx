import React, {useState} from "react";
import  ReactDOM  from "react-dom/client";

function App () {

    const [list , setList] = useState([1,3]);
    const [input , setInput] = useState("");
  
    function handleChange(event){
  
      setInput(event.target.value)
    }
   
    function handleClick(){
      setList9((prevList) =>[...prevList, input])
      setInput("")
      console.log(list)
    }
   
    return(
      <div>
        <h1>Todo List</h1>
  
        <input type = "text"
        onChange={handleChange}
        value={input} />
  
        <button onClick={handleClick}>Add</button>
      </div>
    )
    }
    
    ReactDOM.createRoot(document.getElementById('root')).render(<App />)
import React, {useState} from "react";


function App () {

  const [list , setList] = useState([]);
  const [input , setInput] = useState("");

 



  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
     //To add the todo to a list
  setList([...list, newTodo]);

  //to clear input box
  setInput ("");

  };

   const deleteTodo = (id) => {
//Filter out todo with the id
     const newList = list.filter(todo => todo.id !== id);

     setList(newList);

   }



   return (
    <div>
             <h1>Todo list</h1>
           <input type = "text"
           value ={input} 
           onChange={(e) => setInput(e.target.value)}/>

           <button onClick = {() => addTodo(input)}>Add</button>

           <ul>{list.map((todo) =>(
            <li key= {todo.id}>{todo.todo}
            <button onClick = {() => deleteTodo(todo.id)}>&times;</button>
            </li>
           ))}</ul>
    </div>

   )
}

export default App;
//http://192.168.43.90:3000
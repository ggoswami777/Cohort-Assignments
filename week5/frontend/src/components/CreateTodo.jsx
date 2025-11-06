import { useState } from "react";

export function CreateTodo({setTodos}) {
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
  return (
    <div>
      <input style={{
        padding:10,
        margin:10
      }} type="text" placeholder="title" onChange={function(e){
        setTitle(e.target.value);
      }}></input>
      <input style={{
        padding:10,
        margin:10
      }} type="text" placeholder="description" onChange={function(e){
        setDescription(e.target.value);
      }}></input>
      <button onClick={()=>{
        fetch("http://localhost:3000/todo",{
            method:"POST",
            body:JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
                "Content-type":"application/json"
            }
        }).then(async(res)=>await res.json()).then((data)=>{
            setTodos(prev => [...prev, { title, description, completed: false }]);
            setTitle("");
            setDescription("");
        })
      }}>Add a todo</button>
    </div>
  );
}

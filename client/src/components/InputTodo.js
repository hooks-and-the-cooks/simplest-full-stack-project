import React,{useState} from "react";

const InputTodo = ()=>{
    const [description , setDescription] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response =await fetch("http://localhost:5000/todos",{
            method: "POST",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify(body)
            });
            // reloading every time of submit feature
            window.location = "/"
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }
    return(
        <div>
        <h1>Pern Todo List</h1>
        <form onSubmit={onSubmitForm}>
            <input type= "text" className="form=-control" value={description} 
            onChange = {(e)=>{
                    setDescription(e.target.value)
                }
            }
            />
            <button className="btn btn-success">Add</button>
        </form> 
        </div>   
    )
}

export default InputTodo;
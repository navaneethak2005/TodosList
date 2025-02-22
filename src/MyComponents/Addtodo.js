import React,{useState} from 'react';
const Addtodo = (props) => {
    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("")
    
    const submit=()=>{

    }
    return (
        <div className='container my-3'>
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" class="form-control" value={title} id="title" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Todo Desciption</label>
                    <input type="text" class="form-control" value={desc} id="desc"/>
                </div>
                <button type="submit" class="btn btn-success btn btn-sm">Add todo</button>
            </form>
        </div>
    )
}

export default Addtodo

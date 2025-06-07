import { useState } from "react";
import { TodoContext, useTodo } from "../context";


function TodoForm() {
    const todovalue = useTodo()
    const [todomessage, setTodomessage] = useState("")


    const changemessage = (e) => {
        setTodomessage(e.target.value)
    }

    return (
        <div  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todomessage}
                onChange={changemessage}
            />
            <button onClick={() => {
                
                todovalue.addTodo(todomessage)
                setTodomessage("")}} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" >
                add
                </button>


        </div>
    );
}

export default TodoForm;


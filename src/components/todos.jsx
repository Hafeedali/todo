import Button from "./button"
import { useState } from "react"
export default function Todos()
{
    const [pendingTodos,changePendingTodos] =useState(['lern python']);
    const [completedTodos,changecompletedTodos] =useState(['learn react']);
    const [todoText,changeTodoText] = useState('');
    const [error,changeError]= useState('');
    const handleInputChange=(Event)=>{
        if(Event.target.value.length>2){
            changeError('')
        }
        changeTodoText(Event.target.value);
        
        }
     const addTodo=()=>{
        if(todoText.length>2) {
            changePendingTodos([...pendingTodos,todoText]);
            changeTodoText('')
        }
        else{
            changeError('mustbe min 3 charecter')
        }
        
     }
     const handecancel = ()=>{changeTodoText('');
     }
     const cleartodo = (section)=>{
        if(section ==='pending'){
            changePendingTodos([]);
        }
        else{
            changecompletedTodos([]);
        }  
     }
     const completeTodo = (index)=>{
        const element= pendingTodos[index];
        changecompletedTodos([...completedTodos,element]);
        const currentPendingItems= [...pendingTodos];
        currentPendingItems.splice(index,1);
        changePendingTodos(currentPendingItems);
     }
     const deletetodo = (index,from) =>{
        if(from==='pending'){
            const currentPendingItems = [...pendingTodos];
            currentPendingItems.splice(index,1);
            changePendingTodos(currentPendingItems);
        }
        else{
            const currentCompletedItems=[...completedTodos];
            currentCompletedItems.splice(index,1);
            changecompletedTodos(currentCompletedItems)
        }
     }
     
    return (
    <>
    <div className="todo-form">
        <h1>add todooo</h1>
        <input type="text" placeholder="add todo" value={todoText} onChange={handleInputChange} />
        <span className="error">{error}</span>
        <div className="todo-form-button">
            <Button class="add-btn" handleClick={()=>addTodo()} btnText="add" />
            <Button class="cancel-btn" handleClick={()=>handecancel()} btnText="cancel" />
        </div>
    </div>
    <div className="todo-section">
        <div className="todo-left">
            <h1>pending todos {pendingTodos.length} <Button class="delete-btn" handleClick={()=>cleartodo('pending')} btnText="clear" /></h1>
            {
            pendingTodos.map((todo,index)=><div className="todo-item">
                <div className="todo-item-text">({index+1}){todo}</div>
                <div className="todo-form-buttons">
                <Button class="add-btn" handleClick={()=>completeTodo(index)} btnText="complete" />
                <Button class="delete-btn" handleClick={()=>deletetodo(index,'pending')} btnText="delete" />
                    </div>
                </div>)
              
        }
      
        </div>
        <div className="todo-right">
        <h1>completed todo {completedTodos.length}<Button class="delete-btn" handleClick={()=>cleartodo('completed')} btnText="clear" /></h1>
        {
            completedTodos.map((todo,index)=><div className="todo-item">
                <div className="todo-item-text">({index+1}){todo}</div>
                <div className="todo-form-buttons">
                <Button class="delete-btn" handleClick={()=>deletetodo(index,'completed')} btnText="delete" />
                    </div>
                </div>)
              
        }  
        </div>
        </div>
    
    
    </>
    )
   }


    const addTodo=(state,newTodoItem)=>{
        var obj = {
            completed:false,
            item: newTodoItem
        };
        localStorage.setItem(newTodoItem,JSON.stringify(obj));            
        state.todoItems.push(obj);
    }
    const toggleComplete=(state,payload)=>{        
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));      
    }
    const removeTodo=(state,payload)=>{
        localStorage.removeItem(payload.todoItem.item);
        //splice 삭제하고 새로운 배열을 환
        state.todoItems.splice(payload.index,1);
    }
    const clearTodo=(state)=>{
        localStorage.clear();
        state.todoItems=[]    
    }  

    export {
        addTodo,
        toggleComplete,
        removeTodo,
        clearTodo
    }
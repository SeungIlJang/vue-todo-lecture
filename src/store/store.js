import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
    fetch(){
        const arr =[];            
        if(localStorage.length>0){
            for(var i=0;i<localStorage.length;i++){
                // console.log(localStorage.key(i));                
                if(localStorage.key(i)!=="loglevel:webpack-dev-server"){                    
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));                    
                }       
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state:{
        todoItems:storage.fetch(),
    },
    mutations:{
        addTodo(state,newTodoItem){
            var obj = {
                completed:false,
                item: newTodoItem
            };
            localStorage.setItem(newTodoItem,JSON.stringify(obj));            
            state.todoItems.push(obj);
        },
            toggleComplete(state,payload){        
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));      
        },
        removeTodo(state,payload){
            localStorage.removeItem(payload.todoItem.item);
            //splice 삭제하고 새로운 배열을 반환
            state.todoItems.splice(payload.index,1);
        },
        clearTodo(state){
            localStorage.clear();
            state.todoItems=[];
        }  
    }
});
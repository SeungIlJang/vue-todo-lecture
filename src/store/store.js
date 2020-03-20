import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters';
import * as mutations from './mutations';

import todoApp from '../modules/todoApp';

Vue.use(Vuex)

//방법 3으로 이동
// const storage = {
//     fetch(){
//         const arr =[];            
//         if(localStorage.length>0){
//             for(var i=0;i<localStorage.length;i++){
//                 // console.log(localStorage.key(i));                
//                 if(localStorage.key(i)!=="loglevel:webpack-dev-server"){                    
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));                    
//                 }       
//             }
//         }
//         return arr;
//     },
// }

export const store = new Vuex.Store({

    //방법3 /moudles/todo.js
    modules:{
        todoApp
    }
    

    //방법3이면 todoApp으로 이동
    // state:{
    //     todoItems:storage.fetch(),
    // },
    
    //방법2 getters.js mutations.js
    // getters,
    // mutations
    // 방법1
    // getters:{
    //     getTodoItems(state){
    //         return state.todoItems;
    //     }
    // },
    // mutations:{
    //     addTodo(state,newTodoItem){
    //         var obj = {
    //             completed:false,
    //             item: newTodoItem
    //         };
    //         localStorage.setItem(newTodoItem,JSON.stringify(obj));            
    //         state.todoItems.push(obj);
    //     },
    //         toggleComplete(state,payload){        
    //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //         localStorage.removeItem(payload.todoItem.item);
    //         localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));      
    //     },
    //     removeTodo(state,payload){
    //         localStorage.removeItem(payload.todoItem.item);
    //         //splice 삭제하고 새로운 배열을 반환
    //         state.todoItems.splice(payload.index,1);
    //     },
    //     clearTodo(state){
    //         localStorage.clear();
    //         state.todoItems=[];
    //     }  
    // }
});
// Vuex란?
/*
  무수히 많은 컴포넌트 데이타를 관리하기 위한 상태관리 패턴이자 라이브러리
  React의 Flux 패턴에서 기인함
  Flux패턴?
  Unidirectional data flow
  Action->Dispatcher->Store->View
  Vuex 컨셉
  -State:컴포넌트 간에 공유하는 데이터 data
  -View:데이터를 표시하는 화면 template
  -Action:사용자의 입력에 따라 데이터를 변경하는 methods
  Vuex구조
  컴포넌트 -> 비동기로직 -> 동기로직 ->상태
  Vuex 기술요소
  -state :여러 컴포넌트에 공유되는 데이터 data
  -gettters:연산된 state값을 접근하는 속성 computed
  -mutations:state값을 변경하는 이벤트 로직/메소드 methods
  -actions:비동기처리 로직을 선언하는 메소드 aysnc methods
 */
<template>
  <div id="app">    
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:addTodoP="addTodo"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:propsdataC="todoItems"
      v-on:removeTodoP="removeTodo"
      v-on:toggleCompleteP="toggleComplete"
     ></TodoList> -->
     <TodoList></TodoList>
    <!-- <TodoFooter v-on:clearTodoP="clearTodo"></TodoFooter> -->
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data(){
      return {
          todoItems:[],
          
      }
  },
  methods:{
    // addTodo(newTodoItem){
    //   var obj = {
    //       completed:false,
    //       item: newTodoItem
    //   };
    //   localStorage.setItem(newTodoItem,JSON.stringify(obj));            
    //   this.todoItems.push(obj);
    // },
    // removeTodo(todoItem,index){
    //   localStorage.removeItem(todoItem.item);
    //   //splice 삭제하고 새로운 배열을 반환
    //   this.todoItems.splice(index,1);
    // },
    // toggleComplete(todoItem,index){
    //   // todoItem.completed = !todoItem.completed;
    //   this.todoItems[index].completed = !this.todoItems[index].completed
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item,JSON.stringify(todoItem));      
    // },
    // clearTodo(){
    //   localStorage.clear();
    //   this.todoItems=[];
    // }
  },
  // created(){
  //     console.log('created');
  //     if(localStorage.length>0){
  //         for(var i=0;i<localStorage.length;i++){
  //             // console.log(localStorage.key(i));                
  //             if(localStorage.key(i)!=="loglevel:webpack-dev-server"){                    
  //                 this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //                 console.log(localStorage.getItem(localStorage.key(i)));
  //                 console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //             }       
  //         }
  //     }
  // },
  components : {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter

  }
 
}
</script>
  
<style>
  body {
    text-align:center;
    background-color: #F6F6F6;
       
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>

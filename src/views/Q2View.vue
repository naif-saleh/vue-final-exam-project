<template class="">
 
    <navbar />
    
    <div class="container">
      <div class="form text-white">
        <div class="q2">
            <p><b class="text-yellow-400">Q2:</b> Write Vue program to remove duplicate items from a list taht already inserted.</p>
      <div v-for="list of myList" :key="list">
        <p>{{ list }}</p>
      </div>
      <button @click="removeDublicatedItem()" class="bg-yellow-600 ">remove dublicated Items</button>
    </div>
    </div>
    </div>
    </template>
    
    <script>
    // @ is an alias to /src
    
    
    
    import navbar from '../components/NavbarView.vue';
    
    
    
    export default {
      
      components:{
        navbar
      },
      data(){
        return{
            myList: ['vue', 'vue', 'html', 'html','html', 'css' , 'css'],
        }
      },
      methods:{
        
        removeDublicatedItem() {
          this.myList = Array.from(new Set(this.myList));
          alert("dublicated Items Removed Successfully")
    }
    
    
    
        }
      }
    
    </script>
    
    <style>
    
    body{
      background-color: black;
      color: white;
      font-family: 'Oswald', sans-serif;
    }
    .container{
      width: 100%;
      height: 100%;
      text-align: center;
    }
    .form{
      margin-top: 10rem;
    }
    .form input{
      width: 50%;
      padding: 15px;
      outline: none;
      border: none;
      color: black;
    }
    .form button{
      padding: 15px;
      color: black;
      font-weight: 700;
    }
    p{
      padding: 50px;
    }
    
    </style>
    
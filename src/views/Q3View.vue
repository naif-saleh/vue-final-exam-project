<template class="">
 
    <navbar />
    
    <div class="container">
      <div class="form text-white">
        <div class="q4">
          <p><b class="text-yellow-400">Q3:</b> Write Vue program to display the reading information of selected book from this list.</p>
      <select v-model="selectedBook">
        <option v-for="book in library" :key="book" :value="book">{{book.title}}</option>
      </select><br>
     
      <div v-if="selectedBook != null"  class="info">
        <p><b>Author:</b> {{ selectedBook.author }}</p>
        <p><b>Title:</b> {{ selectedBook.title }}</p>
        <p><b>reading state:</b> {{ selectedBook.readingState }}</p>
      </div>
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
         selectedBook:null,
         library: [
        {
          author: 'Bill Gates',
          title: 'the road ahead',
          readingState: true
        },
        {
          author: 'Steve Jobs',
          title: 'walter isaacsn',
          readingState: true
        },
      ],
     
         
        }
      },
      methods:{
        
        insertion(){
            this.list.push(this.valueForQ3)
            this.valueForQ3 = null;
            alert("Value Added Successfully");
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
    select{
        padding: 20px;
        border-radius: 10px;
        width: 50%;
        color: black;
       }
    
    </style>
    
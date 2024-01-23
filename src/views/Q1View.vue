<template class="">
 
    <navbar />
    
    <div class="container">
      <div class="form text-white">
        <p><b class="text-yellow-400">Q1:</b> Write a Vue program that except nnumber for user and reverse that number.</p>
      <input type="text" v-model="inputNumber" placeholder="Enter Number to Get Reversed...">
      <button class="bg-yellow-600 " @click="reversion()">Reserve</button><br>
      <h2 class="mt-6 " v-if="this.reversedNumber != null">Reversed Number = <u>{{ this.reversedNumber }}</u></h2>
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
          inputNumber:null,
          reversedNumber:null,
         
        }
      },
      methods:{
        
        reversion()
        {
          let reversString = this.inputNumber.toString().split('').reverse().join('');
          this.reversedNumber = parseInt(reversString);
          this.inputNumber = "";
          
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
    h2{
        font-size: 30px;
    }
    
    </style>
    
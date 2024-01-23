<template class="">
 
<navbar />

<div class="container">
  <div class="form text-white">
    <h1>Home Page...........(*__*)</h1>
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
      numberForQ1:null,
      reverNumber:null,
     
    }
  },
  methods:{
    
    reversion()
    {
      let reversString = this.numberForQ1.toString().split('').reverse().join('');
      this.reverNumber = parseInt(reversString);
      
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
h1{
  font-size: 40px;
}

</style>

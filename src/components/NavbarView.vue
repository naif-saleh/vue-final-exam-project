<template>
     
    <nav class="container h-14 relative flex justify-between items-center p-2 ">

      <!-- Logo -->
      <div>
        <a href="" class="text-2xl uppercase">
          <h2>Final <span class="text-yellow-400">Exam</span></h2>
        </a>
      </div>

      <!-- Navbar -->
      <div id="navMenue" class="md:bg-none  hidden absolute right-0 top-0 left-0 w-full py-14 border border-yellow-400 pb-4 md:block md:static md:py-0 md:ml-0 md:border-none md:w-auto ">
        <ul class="flex flex-col gap-5 items-center md:flex-row md:pb-0 md:text-[20px]">
          <li><RouterLink to="/"><a href="" @click="linksHidden" class="nav__link hover:text-yellow-400 ease-in duration-200">Home Page</a></RouterLink></li>
          <li><RouterLink to="/Q1"><a href="" @click="linksHidden" class="nav__link hover:text-yellow-400 ease-in duration-200">Q1</a></RouterLink></li>
          <li><RouterLink to="/Q2"><a href=""  @click="linksHidden" class="nav__link hover:text-yellow-400 ease-in duration-200">Q2</a></RouterLink></li>
          <li><RouterLink to="/Q3"><a href=""  @click="linksHidden" class="nav__link hover:text-yellow-400 ease-in duration-200">Q3</a></RouterLink></li>
          <li><RouterLink to="/Q4"><a href=""  @click="linksHidden" class="nav__link hover:text-yellow-400 ease-in duration-200">Q4</a></RouterLink></li>
          <div class="name ml-48 text-yellow-500">T.Salem Ahmed AlSomahi</div>
        </ul>
        

        <!-- close icon for responsive show  (close x)-->
        <div @click="close" id="close-icon" class="absolute md:hidden top-[0.7rem] right-4 text-2xl cursor-pointer">
          <i class="ri-close-line"></i>
        </div>
      </div>

      <div class="flex items-center gap-5">
        <!-- moon icon for change Dark/Light mood -->
        <i class="ri-moon-line cursor-pointer ml-4 text-xl"></i>
        <!-- menue icon for responsive show -->
        <div @click="open" id="humburge">
          <i class="ri-menu-2-line cursor-pointer text-xl md:hidden"></i>
        </div>
      </div>
    </nav>

</template>



<script>

export default {
    data(){
    return{
      
    }
  },
  methods:{
    
    },
    
}

</script>
     <template class="">
 
        <navbar />
        
        <div class="container">
          <div class="form text-white">
            <p><b class="text-yellow-400">Q4:</b> Create simple login page using Vue and Vuetify that have a validation to chick if the username and password is correct then move to home page.</p>
         
            <form class="pt-6 pb-6">
              <h2 class="text-black">Login</h2>
              <p class="text-red-700">{{ this.validationValue }}</p>
              <input type="text" placeholder="Username" v-model="username"><br>
              <input type="password" placeholder="password" v-model="password"><br>
              <button class="bg-yellow-400 mt-6" @click="login()">Login</button>
            </form>

        </div>
        </div>
        </template>
        
        <script>
        // @ is an alias to /src
        
        
        
        
import navbar from '../components/NavbarView.vue';
import router from '@/router';
        
        
        
        export default {
          
          components:{
            navbar
          },
          data(){
            return{
                username:'',
                password:'',
                validationValue:''
            }
          },
          methods:{
            
           
            login(){
              if(this.username == "" || this.password == ""){
                alert("username or password must not be empty")
                this.validationValue = "username or password must not be empty"
              }else if(this.username != "admin@admin.com" || this.password != "admin123"){
                alert("username or password is not correct")
                this.validationValue = "username or password is not correct"
              }else{
                alert(`Welcome ${this.username} You Logged in Successfully(*__*)`)
                router.push('/')
              }
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
          margin-top: 5rem;
        }
        
       form{
        width: 600px;
        border-radius: 15px;
        align-items: center;
        text-align: center;
        margin: auto;
        background-color: rgb(126, 128, 129);
        
       }
       form input{
        width: 40%;
        height: 40px;
        padding: 2px;
        border-radius: 4px;
        color: red;
        margin-top: 10px;
        border: solid 1px black;
        outline: none;
        border: 1px solid rgb(0, 0, 0);
       }
       button{
        width: 30%;
        border-radius: 4px;
        font-weight: 200;
       }

        
        </style>
        
<template>
     <div class="login-container">
        <h2>Login</h2>
        <!-- <form action="/login" method="POST"> -->
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button @click="getLoginToken()"  class="login-button">Login</button>

        <!-- </form> -->
        <div class="signup-link">
            <a href="/signup">Don't have an account? Sign up</a>
        </div>
    </div>

</template>


<script>
import axios  from 'axios';

export default{
    data(){
        return{
            isSuccess:false,

        }
    },
    mounted(){

    },
    methods:{
        async getLoginToken(){
            alert(1222)
            axios.get('')
            .then(reponse =>(
                this.isSuccess = true

            ))
            .catch(error => console.log(error))
        }
    }
}

 
</script>

<style scoped>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
    }
    .login-container {
        background-color: white;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
    }
    .login-container h2 {
        margin-bottom: 20px;
        text-align: center;
    }
    .input-group {
        margin-bottom: 20px;
    }
    .input-group label {
        display: block;
        margin-bottom: 8px;
    }
    .input-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
    }
    .login-button {
        width: 100%;
        padding: 10px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }
    .login-button:hover {
        background-color: #0056b3;
    }
    .signup-link {
        text-align: center;
        margin-top: 15px;
    }

</style>
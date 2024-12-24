<template>
    <div class="header">
    </div>
    <div class="nnavbar">
        <div class="logo">
            <a href="#home"><img src="/public/favicon.ico" alt=""></a>
        </div>
        <div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="/currency_rate">Currency Rate</a>
            <a href="#contact">Contact</a>
            <a href="/login" >Login</a>
        </div>
    </div>

</template>

<style scoped>

    .header{
    height: 50px;
    background-color: aqua;
    /* background-image: url('/public/img/bg.jpg'); */
    }
    .nnavbar {
        display: flex;
      
        align-items: center;
        background-color: #333;
        padding: 15px 30px;
        width: 100%;
        height: 50px;
    }
    .nnavbar a {
        color: white;
        text-decoration: none;
        margin: 0 15px;
        font-size: 18px;
    }
    .nnavbar a:hover {
        text-decoration: underline;
    }
</style>
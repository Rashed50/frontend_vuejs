<template>
        
    <NavMenu/>
    <div class="hero-section">
        <div>
            <h1>Welcome to MyWebsite</h1>
            <p>Your one-stop solution for amazing services</p>
        </div>
    </div>
</template>

<script>



    export default{
         
        
    }
</script>


<style scoped>
   
   .header{
    width: 1700px;
    /* height: 200px; */
    background-color: aqua;
    /* background-image: url('/public/img/bg.jpg'); */
   }
    .navbar {
        display: flex;
      
        align-items: center;
        background-color: #333;
        padding: 15px 30px;
        width: 100%;
        height: 50px;
    }
    .navbar a {
        color: white;
        text-decoration: none;
        margin: 0 15px;
        font-size: 18px;
    }
    .navbar a:hover {
        text-decoration: underline;
    }
    .hero-section {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: top;
        background: url('/public/img/hero.jpg') no-repeat center center;
        background-size: cover;
        color: black;
        text-align: center;
    }
    .hero-section h1 {
        font-size: 60px;
        margin: 0;
    }
    .hero-section p {
        font-size: 24px;
        margin: 10px 0;
    }


@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
</style>
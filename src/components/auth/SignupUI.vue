<template>
    <div class="container">
        <div class="image-section"></div>
        <div class="form-section">
            <h2>Register</h2>
            <form action="/register" method="POST">
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="input-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm_password" required>
                </div>
                <button type="submit" class="signup-button">Register</button>
            </form>
            <div class="login-link">
                <a href="/login">Already have an account? Login</a>
                <a href="/home">back</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family: Arial, sans-serif;
       
        /* background: url('/src/assets/logo.svg') no-repeat center center; */
    }
    .container {
        display: flex;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        max-width: 900px;
        width: 100%;
       
    }
    .image-section {
        width: 50%;
        background: url('/src/assets/logo.svg') no-repeat center center;
        background-size: cover;
    }
    .form-section {
        width: 1000%;
        padding: 40px;
    }
    .form-section h2 {
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
    .signup-button {
        width: 100%;
        padding: 10px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }
    .signup-button:hover {
        background-color: #218838;
    }
    .login-link {
        text-align: center;
        margin-top: 15px;
    }
</style>
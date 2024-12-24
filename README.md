# ims_frontend

This is Inventory Management System (IMS) Frontend Project. 

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Create New Project

```sh
npm create vue@latest
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
### Add bootstrap 5 with you project. You can mention bootstrap version by updating 5.3.3 value or you can remove verstion number so it will install latest version

```sh
npm install bootstrap@5.3.3
```

### To make the Bootstrap styles available, import the compiled CSS at the first line of your CSS entry file, main.css in /src/asset/:

```sh
@import 'bootstrap/dist/css/bootstrap.css';
```

### Importing Bootstrap 5 JavaScript
Bootstrap's JavaScript plugins can be made available to the application using Vue's provide() and inject() functions. The provide() function allows to make data available at the app level, which can then be injected into components with the inject() function. Adjust the main.js file as follows:

```sh

import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.provide('bootstrap', bootstrap);
app.mount('#app');
```

### Add vue custom Route in vue project
If you not install vue-router at the time of create project installl this using below 
```sh
npm install vue-router

```
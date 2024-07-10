# Vue JS 3 Tutorial for Beginners #2 - Vue.js Basics (part 1)
* https://youtu.be/F7PLPJqVotk?si=BTtjKpUEh_B0yGLK

# VueJS Docs - Getting Started
* https://vuejs.org/guide/quick-start.html

# VueJS 3 - CDN

Add this line before the `</head>` tag to `index.html` file
```js
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

Create `app.js` with content:
```js
console.log('hello, vue');
```

And append this line before `</body>` tag to `index.html` file
```js
<script src="app.js"></script>
```

Here is the full HTML content of `index.html` file
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning Vue</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
    <h1>Hello Vue :)</h1>

    <script src="app.js"></script>
</body>
</html>
```

Run `live-server` for serving static `index.html` file
```
$ live-server
```

Access the URL for testing
```
http://localhost:8080/
```

![vuejs-cdn-testing](./images/vuejs3-tutorials-basics-cdn-testing.png)


# Creating a Vue app

Change the content of `app.js` as follow:
```js
const app = Vue.createApp({
    // data, functions
    template: '<h2>I am the template</h2>'
})

app.mount('#app')
```

And the `index.html` as follow
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning Vue</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
    <h1>Hello Vue :)</h1>

    <div id="app"></div>
    
    <script src="app.js"></script>
</body>
</html>
```

![creating-vue-app](./images/vuejs3-tutorials-basics-creating-vue-app.png)
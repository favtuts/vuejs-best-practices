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

Run `live-server` for serving static `index.html` file
```
$ live-server
```

Access the URL for testing
```
http://localhost:8080/
```

![vuejs-cdn-testing](./images/vuejs3-tutorials-basics-cdn-testing.png)


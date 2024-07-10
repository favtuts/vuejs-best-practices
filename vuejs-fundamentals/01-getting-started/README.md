# Getting Started With Vue.js
* https://tutorialedge.net/javascript/vuejs/getting-started-with-vuejs/


# A simple Vue App

Create directory
```
$ mkdir simple-vue-app
$ cd simple-vue-app
```

Create HTML Index page 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>VueJS Starter</title>
</head>
<body>
    <div id="app">
        {{ message }}
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script>
    new Vue({
        el: '#app',
        data() {
            return {
                message: 'Hello World'
            }
        },
        created() {
            console.log("Hello World")
        }
    });
    </script>
</body>
</html>
```

Run this HTML page
```
$ npm install -g live-server
$ live-server

Serving "/path/to/simple-vue-app" at http://127.0.0.1:8080
```

You may see the error: `TypeError: Vue is not a constructor`
* https://laracasts.com/discuss/channels/vue/vue-3-uncaught-typeerror-vue-is-not-a-constructor

In Vue 3, the syntax for creating a new Vue instance has changed. Instead of using `new Vue({})`, you should use `Vue.createApp({})`.


# Use the latest Nodejs LTS

* Refer: https://gist.github.com/iotspace/f830c353ba0051627d161c7f26b67e8f

Swith to Nodejs LTS
```
$ nvm ls-remote
$ nvm ls
$ nvm use v20.14.0
$ nvm alias default v20.14.0
$ node --version
```

# Install Vue CLI

We can install the `vue-cli` using `npm`
```
$ npm install -g @vue/cli
```

You are able to run `vue` command
```
$ vue
```

# Create your First Application

```
$ vue create my-first-project


Vue CLI v5.0.8
✨  Creating project in /path/to/my-first-project.
⚙️  Installing CLI plugins. This might take a while...

yarn install v1.22.22
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...

success Saved lockfile.
Done in 24.05s.
🚀  Invoking generators...
📦  Installing additional dependencies...

yarn install v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
Done in 8.18s.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project my-first-project.
👉  Get started with the following commands:

 $ cd my-first-project
 $ yarn serve
```


# Project setup

```
$ cd my-first-project
```

Then install the dependencies
```
$ yarn install
```
or 
```
$ npm install
```


# Running Your Application Locally

```
$ yarn serve
```
or 

```
$ npm run serve
```


This will run a development server on `http://localhost:8080` and you will be able to navigate to this in your browser. You should hopefully see a fully function Vuejs application running within your browser.


# Building Your Application

```
$ yarn build
```
or 
```
$ npm run build
```

This will create Production releases in the folder `dist` and it's ready to be deployed

# Lints and fixes files
```
$ yarn lint
```


# Minor Changes To Get Started

Open up the `src/components/HelloWorld.vue` component and remove some of the default HTML code from the `<template/>` section

```js
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "Welcome to Your Vue.js App"
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
```

# Testing the changes

Run the App
```
$ npm run serve
$ yarn serve
```

Access browser
```
http://localhost:8080
```
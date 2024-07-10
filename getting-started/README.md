# Getting Started With Vue.js
* https://tutorialedge.net/javascript/vuejs/getting-started-with-vuejs/


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




# Vue JS 3 Tutorial for Beginners #3 - Vue.js Basics (part 2)
* https://youtu.be/CYPZBK8zUik?si=OqvnphNAwoDli7aG

Will investigate more events: mouse hover, mouse click , ....

# Mouse Event

Add 4 div with class `box`:
```html
    <div id="app">
                
        <!-- mouse events-->
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>

    </div>
```

And define inline style on HEAD tag
```html
<head>    
    <style>
        .box {
            padding: 100px 0;
            width: 400px;
            text-align: center;
            background: #ddd;
            margin: 20px;
            display: inline-block;
        }
    </style>
</head>
```

Now you should see 4 blocks
![vue-basics-show-initial-blocks](./images/vuejs3-tutorials-show-initial-blocks.png)
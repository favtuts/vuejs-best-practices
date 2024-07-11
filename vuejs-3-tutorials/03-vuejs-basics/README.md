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


Adding some text and mouse to these blocks
* Ref: [Some Useful HTML Character Entities](https://www.w3schools.com/html/html_entities.asp#:~:text=To%20add%20real%20spaces%20to,use%20the%20character%20entity.)
```html
        <!-- mouse events-->
        <div class="box" @mouseover="handleEvent">mouseover (enter)</div>
        <div class="box" @mouseleave="handleEvent">mouseleave</div>
        <div class="box" @dblclick="handleEvent">double click</div>
        <div class="box">&nbsp</div>
```

Capture mouse events in the method
```js
    methods: {        
        handleEvent(e) {
            console.log(e, e.type)
        }
    }
```

![vue-basics-mouse-event-handlers](./images/vuejs3-tutorials-mouse-event-handles.png)

You can see the MouseEvent type is shown in the Console. To explicit the event object to be passed to `handleEvent` method, let use `$event`
```html
<div class="box" @mouseover="handleEvent($event, 5)">mouseover (enter)</div>
```

And JS code
```js
    methods: {                
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        }
    }
```

![vue-basics-mouse-explicit-event](./images/vuejs3-tutorials-mouse-explicit-event-data.png)


Now we are going to explore the `mousemove` event, to print the relative position of mouse in the box:
```html
        <div class="box" @mousemove="handleMousemove">position - [ {{ x }} ; {{ y }} ]</div>
```
and JS code
```js
    methods: {        
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }        
    }
```

![vue-basics-mouse-move-event](./images/vuejs3-tutorials-mouse-move-event.png)


# Outputting Lists

Using `v-for` directive to list all the books
```html
    <div id="app">
        <div v-if="showBooks">                        
            <ul>
                <li v-for="book in books">
                    <h3> {{ book.title }} </h3>                    
                    <p> {{ book.author }}</p>
                </li>
            </ul>
        </div>                    

        <button @click="toggleShowBooks">
            <span v-if="showBooks">Hide Books</span>
            <span v-else>Show Books</span>
        </button>
    </div>
```

JS Code
```js
    data() {
        return {
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss'},
                {title: 'the way of kings', author: 'brandon sanderson'},
                {title: 'the final empire', author: 'brandon sanderson'},
            ]
        }
    },
```


![vue-basics-list-books](./images/vuejs3-tutorials-render-list-books.png)
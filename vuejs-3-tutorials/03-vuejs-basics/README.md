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

# Attribute Binding

Using `v-bind` directive to bind attribute value
```html
    <div id="app">
        <!-- attribute binding -->
        <a v-bind:href="url">best website ever</a>
    </div>
```

JS Code
```js
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',           
        }
    },
```


![vue-basics-attribute-bind](./images/vuejs3-tutorials-attribute-binding-href.png)


Now we is going to bind image attributes `img.src` and `img.alt`
```html
    <div id="app">
        <!-- attribute binding -->
        <a v-bind:href="url">best website ever</a>

        <div v-if="showBooks">         
            <!-- outputting list-->
            <ul>
                <li v-for="book in books">
                    <img :src="book.img" :alt="book.title" >
                    <h3> {{ book.title }} </h3>                    
                    <p> {{ book.author }}</p>
                </li>
            </ul>
        </div>
    </div>    
```

and JS Code:
```js
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/TheNameoftheWind_cover.jpg'},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/TheWayOfKings_cover.jpg'},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/TheFinalEmpire_cover.jpg'},
            ]
        }
    },
```

![vue-basics-image-binding](./images/vuejs3-tutorials-imgage-binding-books.png)


# Dynamic Class

Now we control the dynamic class for favourited books
```html
    <div id="app">
        <div v-if="showBooks">           
            <!-- outputting list-->
            <ul>
                <li v-for="book in books" :class="{ fav: book.isFav }">
                    <img :src="book.img" :alt="book.title" >
                    <h3> {{ book.title }} </h3>                    
                    <p> {{ book.author }}</p>
                </li>
            </ul>
        </div>
    </div>       
```

And JS Code
```js
    data() {
        return {            
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/TheNameoftheWind_cover.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/TheWayOfKings_cover.jpg', isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/TheFinalEmpire_cover.jpg', isFav: true},
            ]
        }
    },
```

![vue-basics-dynamic-class-test](./images/vuejs3-tutorials-dynamic-class-testing.png)

Trying to do some styles
```html
<head>    
    <style>
        body{
            background: #eee;
            max-width: 960px;
            margin: 20px auto;
        }
        p, h3, ul{
            margin: 0;
            padding: 0;
        }
        li {
            list-style-type: none;
            background: #fff;
            margin: 20px auto;
            padding: 10px 20px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        li.fav {
            background: #ff9ed2;
            color: white;
        }
    </style>
</head>
```

![vue-basics-dynamic-class-styling](./images/vuejs3-tutorials-dynamic-class-finalizing.png)

# Toggling Favs

Challenge - Add to Favs
* attach a click event to each li tag (for each book)
* when a user clicks an li, toggle the `isFav` property of that book

Register `click` event to `li` tag in HTML Code
```html
            <ul>
                <li v-for="book in books" :class="{ fav: book.isFav }" @click="toggleFav(book)">
                    <img height="120px" :src="book.img" :alt="book.title" >
                    <h3> {{ book.title }} </h3>                    
                    <p> {{ book.author }}</p>
                </li>
            </ul>
```
Write the method `toggleFav`
```js
    methods: {        
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        },        
    }
```

![vue-basics-toggle-book](./images/vuejs3-tutorials-toggle-book-item.png)
const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss'},
                {title: 'the way of kings', author: 'brandon sanderson'},
                {title: 'the final empire', author: 'brandon sanderson'},
            ],
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {        
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log('Data: ' + data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }        
    }
})

app.mount('#app')
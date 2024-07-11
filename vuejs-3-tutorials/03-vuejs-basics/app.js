const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/TheNameoftheWind_cover.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/TheWayOfKings_cover.jpg', isFav: true},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/TheFinalEmpire_cover.jpg', isFav: true},
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
        toggleFav(book) {
            book.isFav = !book.isFav
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
    },
    computed: {
        filteredFavBooks() {
            return this.books.filter((book) => book.isFav)
        },
        filteredNotFavBooks() {
            return this.books.filter((book) => !book.isFav)
        }
    }
})

app.mount('#app')
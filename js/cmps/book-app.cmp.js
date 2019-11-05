'use strict'

import BookList from './book-list.cmp.js';
import bookDetails from './book-details.cmp.js'
import bookFilter from './book-filter.cmp.js';

import bookService from "../services/book-service.js";

Vue.config.productionTip = false

export default {
    template:`
        <section class="book-app">        
            <book-filter @filtered="setFilter"></book-filter>
            <book-list :books="booksToShow" @selected="selectBook"></book-list>
        </section>
        `,
        // <book-details :book="selectedBook" v-if="selectedBook"></book-details>

    data() {
        return{
            books: [],
            filterBy: null,
            selectedBook: null
        }
    },
    methods: {
        setFilter(filter){
            this.filterBy = filter;
        },
        selectBook(bookId){
            this.selectedBook = this.books.find(book => book.id === bookId)
        }
    },
    components: {
        bookDetails,
        bookFilter,
        BookList
    },
    computed: {
        booksToShow(){
            if (!this.filterBy) return this.books;        
            return this.books.filter(book => {
                return book.title.includes(this.filterBy.byName) && book.listPrice.amount <= this.filterBy.maxPrice;
                
            })
        }
    },

    created() {
        bookService.getBooks()
            .then(books => this.books = books)
        }
}

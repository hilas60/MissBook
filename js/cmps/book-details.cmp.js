'use strict'

import bookService from "../services/book-service.js";
import reviewAdd from "./review-add.cmp.js"

export default {
    name: 'book-details',
    template: `
        <section v-if="book" class="book-details-container">
            <div hidden class="book-details">
                <h1>{{book.title}}</h1>
                <h2>Authors: {{book.authors}}</h2>
                <h3>{{book.subtitle}}</h3>
                <img :src="book.thumbnail">
                <h4>Published At: {{book.publishedDate}}</h4>
                <p>Description: {{book.description}}</p>
                <p>No. of Pages: {{book.pageCount}}</p>
                <p>Categories: {{book.categories}}</p>
                <p>Language: {{book.language}}</p>
                <p>Price: {{book.listPrice.amount}}</p>
                <img src="img/sale.png" v-if="isOnSale"/>
            </div>
            <review-add @reviewed="addReview"></review-add>
        </section>
    `,
    data(){
        return {
            book: null,
            isOnSale: (this.book)? book.listPrice.isOnSale : null,
            
        }
    },
    created(){
        const bookId = this.$route.params.bookId;
        bookService.getBookById(bookId)
            .then(book => {
                this.book = book
            })                          
        },
    components: {
        reviewAdd
    },
    methods: {
        addReview(review){
            
        }
    }

}
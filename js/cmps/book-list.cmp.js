'use strict'
import bookService from "../services/book-service.js";

import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
        <section class="book-list-container">
            <ul class="book-list">
                <router-link :to="'/book/' + currBook.id" v-for="(currBook, idx) in books" :key="currBook.id" >       
                    <book-preview @click.native="onSelectBook(currBook)" :book="currBook"></book-preview>
                </router-link>    
            </ul>
        </section>
    `,
    methods:{
        onSelectBook(book){
            // console.log(book.id);
            
            this.$emit('selected', book.id)
        }
    },
    components:{
        bookPreview,
    },
    computed:{
        // bookDetailsLink(){
        //     return ``
        }
    // }
}

{/* <section class="book-list-container">
        <ul class="book-list">
            <router-link :to="'/book/' +currBook.id " v-for="(currBook, idx) in books" :key="currBook.id">
                <book-preview @click.native="onSelectBook(currBook)" :book="currBook"></book-preview>
            </router-link>
        </ul>
    </section> */}
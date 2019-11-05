'use strict'

export default {
    props: ['book'],
    template: `
    <li class="book-card" >
        <h2 class="book-title">{{book.title}}</h2>
        <img :src="book.thumbnail">
        <h3 class="book-price">price: {{book.listPrice.amount}}{{currencySymbol}}</h3>
    </li>
    `,
    data(){
        return {
            currencySymbol: '$',
        }
    },
    methods: {
        getCurrencySymbol(){
            var currencySymbols = {
                'USD': '$', // US Dollar
                'EUR': '€', // Euro
                'ILS': '₪', // Israeli New Sheqel
            };
            var currency_name = this.book.listPrice.currencyCode;
            this.currencySymbol = currencySymbols[currency_name];  
        }
    },
    created(){
        this.getCurrencySymbol()
    },
}
'use strict'

export default {
    template: `
        <section class="filter-container">
            <h2>Filter:</h2>
            <form @input.prevent="onSetFilter">
                <input type="text" placeholder="Search by Name" v-model="filterBy.byName"/>
                <label for="price">Max Price</label>
                <input type="range" min="0" max="250" v-model.number="filterBy.maxPrice"/>
                <label class="max-price">{{filterBy.maxPrice}}</label>
                <button type="submit">Filter</button>
            </form>
        </section>
    `,
    data(){
        return {
            filterBy: {
                byName: '',
                maxPrice: 250
            }
        }
    },
    methods: {
        onSetFilter(){
            this.$emit('filtered', this.filterBy)
        }
        
    },
    
    created() {
        console.log('filter created');
        // this.$emit('filtered',this.filterBy)
    }
}
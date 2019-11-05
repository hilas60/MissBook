'use strict'



export default {
    name: 'review-add',
    template:`
        <div class="review-container">
            <form @submit.prevent="onAddReview" class="form-container">
                <table>
                    <tr>
                        <td>
                            <label for="name">Full Name:</label>
                        </td>
                        <td>
                            <input ref="inputFullName" name="name" type="text" placeholder="Enter Your Name" v-model="review.name">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="rate">Rate:</label>
                        </td>
                        <td>
                            <select name="rate" v-model="review.rate">
                                <option value="i" v-for="i in 5">{{i}}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="date">Read At:</label>
                        </td>
                        <td>
                            <input name="date" type="date" v-model="review.readAt">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="review-txt">Enter your review:</label>
                        </td>
                        <td>
                            <textarea name="review-txt" v-model="review.txt" width="130px" height="130"></textarea>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    `,
    data(){
        return {
            review: {
                name: 'Book Reader',
                rate: null,
                readAt: new Date().toLocaleDateString('he-IL'),
                reviewTxt: ''
            },
        }
    },
    methods: {
        onAddReview(){
            this.$emit('reviewed', this.review)
            // console.log('Reviewing');
            // console.log(this.review.name);
            // console.log(this.review.rate);
            
        }
    },
    mounted() {
        this.$refs.inputFullName.focus="$event.target.select()";
        // @focus="$event.target.select()";
    },
}
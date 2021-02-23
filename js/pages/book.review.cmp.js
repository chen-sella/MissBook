import { bookService } from '../services/book.service.js';

export default {
  template: `
        <section class="review-page main-container">
            <form class="review-form" @submit.prevent="saveReview">
                <input id="name" type="text" ref="start" placeholder="Books Reader" v-model="review.name">
                <div class="rate">
                    <label for="rate">Rate:</label>
                    <ul class="review-rate" >
                        <li v-for="star in 5" @click="setRate(star)" :class="{fill : star <= review.rate}" >
                        
                        </li>
                    </ul>
                </div>
                <div class="read-at">
                    <label for="readAt">Read At:</label>
                    <input id="readAt" type="date" v-model="review.readAt" value="2021-02-23">
                </div>
                <textarea cols="30" rows="10" v-model="review.txt"></textarea>
                <button>Save</button>
            </form>
        </section>
    `,
  data() {
    return {
      review: {
        name: '',
        rate: 0,
        readAt: '',
        txt: '',
      },
    };
  },
  methods: {
    saveReview() {
      console.log('this.review: ', this.review);
      const id = this.$route.params.bookId;
      bookService.addReview(id, this.review).then(() => {
        this.$router.push(`/book/${id}`);
      });
    },
    setRate(rate) {
      console.log(rate);
      this.review.rate = rate;
    },
  },
  mounted() {
    this.$refs.start.focus();
  },
};

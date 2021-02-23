import longText from '../cmps/long-text.cmp.js';
import { bookService } from '../services/book.service.js';

export default {
  props: ['book', 'rev', 'revIdx'],
  template: `
          <section class="review-preview">
            <ul>
                <li v-for="star in rev.rate" >★</li>
            </ul>
            <p>Name: {{rev.name}}</p>
            <p>Rate: {{rev.rate}}</p>
            <p>Read At: {{rev.readAt}}</p>
            <long-text :txt="rev.txt" :length="10"></long-text>
            <button @click="deleteReview(revIdx)">x</button>
          </section>
      `,
  methods: {
    deleteReview(revIdx) {
      this.$emit('deleted', revIdx);
    },
  },
  components: {
    longText,
  },
};

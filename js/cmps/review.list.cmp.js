import reviewPreview from './review.preview.cmp.js';
import { bookService } from '../services/book.service.js';

export default {
  props: ['book'],
  template: `
          <ul v-if="book.reviews.length !== 0" class="review-list">
              <h3 v-if="book.reviews.length !== 0">Reviews:</h3>
              <li class="review-item" v-for="(rev,idx) in book.reviews">
            <review-preview  @deleted="deleteReview" :book="book" :rev="rev" :revIdx="idx"></review-preview>
          </li>
        </ul>
    `,
  methods: {
    select(bookId) {
      this.$router.push(`/book/${bookId}`)
    },
    deleteReview(revIdx) {
        bookService
          .removeReview(revIdx, this.book.id)
          .then((book) => (this.book = book));
      },
  },
  components: {
    reviewPreview,
  },
};

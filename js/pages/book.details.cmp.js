import longText from '../cmps/long-text.cmp.js';
import reviewList from '../cmps/review.list.cmp.js';
import { bookService } from '../services/book.service.js';

export default {
  template: `
        <section v-if="book" class="book-details main-container" :class="priceClass">
          <h2>{{book.title}}</h2>
          <p>{{book.subtitle}}</p>
          <long-text :txt="book.description" :length="100"></long-text>
          <p>Authors: {{book.authors[0]}}</p>
          <p>Publish Date: {{book.publishedDate}},{{bookAge}}</p>
          <p>Categories: 
            <span v-for="category in book.categories">
            {{category}}
            </span>
          </p>
          <p>Reading Duration: {{pageCount}}</p>       
          <p>language: {{book.language}}</p>
          <p v-if="book.listPrice.isOnSale">SALE!</p>
          <review-list :book="book"></review-list>
          <button @click="leaveReview(book.id)">Leave a Review</button>
        </section>
    `,
  data() {
    return {
      book: null,
      longText: null,
    };
  },
  methods: {
    leaveReview(bookId) {
      this.$router.push(`/book/review/${bookId}`);
    },
    deleteReview(revIdx, bookId) {
      bookService
        .removeReview(revIdx, bookId)
        .then((book) => (this.book = book));
    },
  },
  computed: {
    pageCount() {
      if (this.book.pageCount > 500) return `Long Reading`;
      if (this.book.pageCount > 200) return `Decent Reading`;
      return `Light Reading`;
    },
    bookAge() {
      const today = new Date();
      const currYear = today.getFullYear();
      if (currYear - this.book.publishedDate > 10) return `Veteran Book`;
      if (currYear - this.book.publishedDate < 1) return 'New!';
      return 'Modern Book';
    },
    priceClass() {
      const { amount } = this.book.listPrice;
      return {
        green: amount < 20,
        red: amount > 150,
      };
    },
  },
  created() {
    const id = this.$route.params.bookId;
    bookService.getSelectedBook(id).then((book) => {
      this.book = book;
      console.log(this.book);
    });
  },
  components: {
    longText,
    reviewList,
  },
};

{
  /* <button @click="deleteReview(book.id)">x</button> */
}

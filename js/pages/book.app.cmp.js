import { bookService } from '../services/book.service.js';
import bookList from '../cmps/book-list.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';

export default {
  template: `
        <section class="book-app">
            <book-filter @filtered="setFilter"/>
            <book-list :books="booksToShow" />
        </section>
    `,
  data() {
    return {
      books: [],
      filterBy: null,
      selectedBook: null,
    };
  },
  methods: {
    loadBooks() {
      bookService.query().then((books) => (this.books = books));
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books;
      const searchStr = this.filterBy.byName.toLowerCase();
      const { min: minLimit, max: maxLimit } = this.filterBy.byPriceRange;
      if (searchStr === '' && minLimit === 0 && maxLimit === 0)
        return this.books;
      const booksToShow = this.books.filter((book) => {
        return (
          book.title.toLowerCase().startsWith(searchStr) &&
          book.listPrice.amount >= minLimit &&
          book.listPrice.amount <= maxLimit
        );
      });
      return booksToShow;
    },
  },
  created() {
    this.loadBooks();
  },
  components: {
    bookList,
    bookFilter,
  },
};

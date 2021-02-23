import bookPreview from './book-preview.cmp.js';

export default {
  props: ['books'],
  template: `
        <ul class="book-list main-container">
          <li v-for="book in books" :key="book.id" class="book-preview-container">
            <book-preview :book="book" @click.native="select(book.id)"></book-preview>
          </li>
        </ul>
    `,
  methods: {
    select(bookId) {
      this.$router.push(`/book/${bookId}`)
    },
  },
  components: {
    bookPreview,
  },
};

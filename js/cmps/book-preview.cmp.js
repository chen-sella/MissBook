export default {
  props: ['book'],
  template: `
        <section class="book-preview">
            <p class="book-preview-title">{{book.title}}</p>
            <p>Price:{{priceToShow}}</p>
            <img :src="book.thumbnail" width= "230px" height="320px">
        </section>
    `,
  data() {
    return {
      fullPrice: this.book.listPrice.amount,
    };
  },
  computed: {
    priceToShow() {
      const code = this.book.listPrice.currencyCode;
      if (code === 'ILS') return `${this.fullPrice}₪`;
      if (code === 'EUR') return `€${this.fullPrice}`;
      return `$${this.fullPrice}`;
    },
  },
};

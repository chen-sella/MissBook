export default {
  template: `
        <section class="book-filter main-container">
        <label> Filter Books:</label>
        <input type="text" placeholder="Book Name" v-model="filterBy.byName">
        <input type="number" placeholder="from" v-model.number="filterBy.byPriceRange.min">
        <input type="number" placeholder="to" v-model.number="filterBy.byPriceRange.max">
        <button @click="setFilter">Filter</button>
        </section>
    `,
  data() {
    return {
      filterBy: {
        byName: '',
        byPriceRange: {
          min: 0,
          max: 300,
        },
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
};

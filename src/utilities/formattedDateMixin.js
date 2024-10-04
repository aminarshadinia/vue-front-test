

var formattedDateMixin = {
  methods: {

    formattedDate(rawDate) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const date = new Date(rawDate);
      return date.toLocaleDateString('en-US', options);
    },

  }
}


export { formattedDateMixin };

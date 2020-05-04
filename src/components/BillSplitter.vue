<template lang="pug">
  .container
    .card
      .card-body
        .row
          .col-md-4
            b-form-group(
              id="input-group-1"
              label="Amount"
              label-for="input-1")
              b-form-input(
                id="input-1"
                v-model="amount"
                type="number"
                :min="0"
                required
                placeholder="Enter bill amount")
          .col-md-4
            b-form-group(
              id="input-group-1"
              label="Tip %"
              label-for="input-1")
              b-form-input(
                id="input-1"
                v-model="tipPercent"
                type="number"
                :min="0"
                required
                placeholder="Enter percent tip")
          .col-md-4
            b-form-group(
              id="input-group-1"
              label="# of people"
              label-for="input-1")
              b-form-input(
                id="input-1"
                v-model="people"
                :min="0"
                type="number"
                required
                placeholder="Enter number of people")
      .card-footer
        .row
          .col-6.text-right Split Bill
          .col-6.text-left {{splitAmount.toFixed(2)}}
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
      tipPercent: 17,
      people: 2
    };
  },
  computed: {
    splitAmount() {
      return (this.amount * (1 + this.tipPercent / 100)) / this.people;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

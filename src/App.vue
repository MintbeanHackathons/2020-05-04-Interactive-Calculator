<template lang="pug">
  #app.mt-3
    .container
      .row
        .col-12.pb-3
          h1 Interactive Calculators
      .row
        .col-12
          b-card(no-body)
            b-tabs(card)
              b-tab(title="Bill Splitter & Tip Calculator")
                BillSplitter
              b-tab(title="Compound Growth Calculator")
                CompoundCalculator
</template>

<script>
import BillSplitter from './components/BillSplitter.vue'
import CompoundCalculator from './components/CompoundCalculator.vue'

export default {
  name: 'App',
  components: {
    BillSplitter,
    CompoundCalculator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template lang="pug">
  .container
    .card
      .card-body
        .row.mt-2
          .col-md-3
            b-form-group(
              id="input-group-1"
              label="Amount"
              label-for="input-1")
              b-form-input#input-1(
                v-model="amount"
                type="number"
                :min="0"
                required
                placeholder="Enter bill amount")
          .col-md-3
            b-form-group(
              id="input-group-1"
              label="Compounded"
              label-for="input-1")
              b-dropdown#dropdown-1(:text="PeriodType")
                b-dropdown-item(@click="setPeriodType('Weekly')") Weekly
                b-dropdown-item(@click="setPeriodType('Monthly')") Monthly
                b-dropdown-item(@click="setPeriodType('Yearly')") Yearly
          .col-md-3
            b-form-group(
              id="input-group-1"
              label="interest %"
              label-for="input-1")
              b-form-input(
                id="input-1"
                v-model="interest"
                type="number"
                :min="0"
                required
                placeholder="Enter interest %")
          .col-md-3
            b-form-group(
              id="input-group-1"
              label="# of periods"
              label-for="input-1")
              b-form-input(
                id="input-1"
                v-model="periods"
                type="number"
                :min="0"
                required
                placeholder="Enter number of periods")
      .card-footer
        .row
          .col-6.text-right Return
          .col-6.text-left {{investmentAfter.toFixed(2)}}
        .row
          .col-12
            b-button(variant="success" @click="save") Save
    .card.mt-4(v-if="data.length > 0")
      .card-header
        H4 History
      .card-body
        .row
          .col Amount
          .col Compounded
          .col Interest %
          .col # of periods
          .col Return
        .row(v-for=("data in data"))
          .col {{data.amount}}
          .col {{data.PeriodType}}
          .col {{data.interest}}
          .col {{data.periods}}
          .col {{data.return.toFixed(2)}}
</template>
<script>
export default {
  data() {
    return {
      amount: 100,
      interest: 10,
      periods: 4,
      PeriodType: "Monthly",
      data: []
    };
  },
  methods: {
    setPeriodType(type) {
      this.PeriodType = type;
    },
    save() {
      this.data.push({
        amount: this.amount,
        interest: this.interest,
        periods: this.periods,
        PeriodType: this.PeriodType,
        return: this.investmentAfter
      });
    }
  },
  computed: {
    investmentAfter() {
      let subtotal = this.amount;
      for (let i = 0; i <= this.periods; i++) {
        subtotal = subtotal * (1 + this.interest / 100);
      }
      return subtotal;
    }
  }
};
</script>
<template>
  <div :class="[isDeposit ? 'bt-deposit' : 'bt-withdrawl']" class="bt-table-row flex flex-vert-center flex-hor-between">
    <div class="bt-table-date">
      {{ date | moment("MMMM Do YYYY") }}
    </div>
    <div class="bt-table-company u-truncate">
      {{ company }}
    </div>
    <div class="bt-table-account u-truncate">
      {{ account }}
    </div>
    <div class="bt-table-amount">
      {{ transformedInteger | currency }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransactionRow',
  data() {
    return {
      isDeposit: false
    }
  },
  props: {
    date: String,
    company: String,
    account: String,
    amount: String
  },
  created() {
    // Check to see if it is a withdrawl or deposit
    parseInt(this.amount) > 0 ? this.isDeposit = true : this.isDeposi = false;
  },

  computed: {
    // Transform value to positive integers
    transformedInteger: function() {
      let integer = +(this.amount);
      if (integer < 0) {
        integer = integer * -1;
      }
      return integer;
    }
  }
}
</script>

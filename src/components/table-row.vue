<template>
  <!-- Dynamic class -->
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
      {{ convertToFloat | currency }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableRow',
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
    // Check to see if it is a withdrawl or deposit and set the flag appropriately
    // The flag is used to select which class the row gets for styling based on deposit/withdrawl
    parseFloat(this.amount) > 0 ? this.isDeposit = true : this.isDeposi = false;
  },

  computed: {
    // Transform value from strings to positive floats
    convertToFloat: function() {
      // Cast amount to float
      let float = parseFloat(this.amount);
      if (float < 0) {
        float = float * -1;
      }
      return float;
    }
  }
}
</script>

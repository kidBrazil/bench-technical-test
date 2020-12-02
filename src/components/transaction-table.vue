<template>
  <div class="bt-transaction-table">
    <table-header :total="calculateTotal"/>
    <table-row
      v-for="(transaction, index) in transactions"
      :key="index"
      :date="transaction.Date"
      :company="transaction.Company"
      :account="transaction.Ledger"
      :amount="transaction.Amount">
    </table-row>
  </div>
</template>

<script>
import TableHeader from '@/components/table-header.vue'
import TableRow from '@/components/table-row.vue'

export default {
  name: 'TransactionTable',
  props: {
    transactions: Array
  },

  computed: {
    calculateTotal: function() {
      // Calculate ledger total
      let total = 0;
      for (let i=0; i < this.transactions.length; i++) {
        // Convert strings to floats
        var castToFloat = +(this.transactions[i].Amount);
        // Add to total
        total += castToFloat;
      }
      // Return total as computed prop
      return total;
    }
  },

  components: {
    'table-header': TableHeader,
    'table-row': TableRow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.bt-transaction-table {
  border-radius: $standard-radius;
  overflow: hidden;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);
}

.bt-table-header {
  width: 100%;
  padding: 25px;
  background: $white;
  color: $color-brand-primary;
  font-weight: $heading-weight;
  font-size: 20px;
}

.bt-table-row {
  width: 100%;
  padding: 25px;
  color: $color-light-grey;
  font-size: 16px;
  background: $color-off-white;
  border-top: 1px solid $color-divider;
}
// Table Columns ----------------------
.bt-table-date {
  width: 10%;

  @media #{$portrait} {
    width: 25%;
  }
}

.bt-table-company {
  width: 38%;
  font-weight: $heading-weight;

  @media #{$portrait} {
    width: 50%;
  }
}

.bt-table-account {
  width: 38%;

  @media #{$portrait} {
    display: none;
  }
}

.bt-table-amount {
  width: 10%;
  text-align: right;
  white-space: nowrap;
  font-weight: $heading-weight;

  @media #{$portrait} {
    width: 25%;
  }
}
// Overrides -----------------------

.bt-deposit {
  color: $color-brand-primary;
}

.bt-withdrawl {
  color: $black;

  .bt-table-date,
  .bt-table-account {
    color: $color-light-grey;
  }

}


</style>

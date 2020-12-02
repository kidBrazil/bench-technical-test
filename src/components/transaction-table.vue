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
        var castToFloat = +(this.transactions[i].Amount)
        // Add to total
        total += castToFloat
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
<style scoped lang="scss">
.bt-transaction-table {
  border-radius: $standard-radius;
  overflow: hidden;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);
}
</style>

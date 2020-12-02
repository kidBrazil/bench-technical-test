<template>
  <div class="bt-transaction-table">
    <h1>Transaction Table</h1>
    <transaction-header />
    <transaction-row />
  </div>
</template>

<script>
import TransactionHeader from '@/components/transaction-header.vue'
import TransactionRow from '@/components/transaction-row.vue'

export default {
  name: 'TransactionTable',
  props: {
    data: Object
  },

  components: {
    'transaction-header': TransactionHeader,
    'transaction-row': TransactionRow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

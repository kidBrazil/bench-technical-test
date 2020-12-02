<template>
  <div class="bt-transaction-table">
    <table-header total="100"/>
    <table-row />
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

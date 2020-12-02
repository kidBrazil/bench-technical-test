<template>
  <transaction-table />
</template>

<script>
import TransactionTable from '@/components/transaction-table.vue'

export default {
  name: 'Transactions',
  async created() {
    try {
      const response = await this.$axios.get('/transactions/1.json');
      console.log(response);
    }
    catch (err){
      console.log('error');
      console.log(err);
    }
  },

  components: {
    'transaction-table': TransactionTable
  }
}
</script>

<template>
  <transaction-table v-bind:transactions="transactionData"/>
</template>

<script>
import TransactionTable from '@/components/transaction-table.vue'

export default {
  name: 'Transactions',
  data() {
    return {
      // Flag for checking for more pages
      pagesToFetch: true,
      // Current page being called
      currentPage: 1,
      // Store returned data
      transactionData: []
    }
  },
  async created() {
    while(this.pagesToFetch) {
      try {
        // Async call to API hoping pages
        const response = await this.$axios.get('/transactions/'+ this.currentPage +'.json');
        // Update pageCount to ensure the loop runs through
        this.pageCount = response.data.totalCount;
        // Loop through array and push objects
        for (let x=0; x<= response.data.transactions.length - 1; x++) {
          this.transactionData.push(response.data.transactions[x]);
        }
        if (response.data.transactions.length < 10) {
          this.pagesToFetch = false
        }
        // Increment to next page
        this.currentPage +=1;

      }
      catch (err){
        if (err.response.status == 404) {
          this.pagesToFetch = false
        }
      }
    }
  },

  components: {
    'transaction-table': TransactionTable
  }
}
</script>

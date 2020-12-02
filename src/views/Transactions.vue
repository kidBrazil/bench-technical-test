<template>
  <transaction-table
    :error="error"
    :errorMessage="errorMessage"
    :transactions="transactionData"/>
</template>

<script>
import TransactionTable from '@/components/transaction-table.vue'

export default {
  name: 'Transactions',
  data() {
    return {
      // Are there more pages to fetch?
      pagesToFetch: true,
      // Current page being fetched
      currentPage: 1,
      // Store returned data in array
      transactionData: [],
      // Simple error handling
      error: false,
      errorMessage: ''
    }
  },

  // Fetch data on Create lifecycle step
  async created() {
    while(this.pagesToFetch) {
      try {
        // Async call to API hoping pages
        const response = await this.$axios.get('/transactions/'+ this.currentPage +'.json');
        // Loop through array and push objects
        for (let i=0; i<= response.data.transactions.length - 1; i++) {
          this.transactionData.push(response.data.transactions[i]);
        }
        // Each page has 10 records, if there are less than 10 good chances there is no next page.
        if (response.data.transactions.length < 10) {
          this.pagesToFetch = false;
        }
        // Increment to next page
        this.currentPage +=1;
      }
      catch (err){
        // Stop fetching
        this.pagesToFetch = false;
        this.error = true;
        // Typically I would have these messages as part of I18n setups
        // Network Error no response
        if ( !err.response ) {
          this.errorMessage = 'Network Error, please check your internet connection.';
        }
        // 404
        else if (err.response.status >= 400 && err.response.status < 500) {
          this.errorMessage = "We couldn't find the requested records, please try again later.";
        }
        // 500's etc..
        else {
          this.errorMessage = "Our server encountered issues processing your request, please try again later.";
        }
      }
    }
  },

  components: {
    'transaction-table': TransactionTable
  }
}
</script>

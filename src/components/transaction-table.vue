<template>
  <div class="bt-transaction-table">
  <h1>Transaction Table</h1>
  </div>
</template>

<script>
export default {
  name: 'TransactionTable',
  props: {
    msg: String
  },
  async created() {
    try {
      const response = await this.$axios.get('/transactions/1.json');
      console.log(response);
    }
    catch (err){
      console.log('error');
      console.log(err);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

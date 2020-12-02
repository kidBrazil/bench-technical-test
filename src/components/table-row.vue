<template>
  <div :class="[isDeposit ? 'bt-deposit' : 'bt-withdrawl']" class="bt-table-row flex flex-vert-center flex-hor-between">
    <div>
      {{ date }}
    </div>
    <div>
      {{ company }}
    </div>
    <div>
      {{ account }}
    </div>
    <div>
      {{ amount }}
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bt-table-row {
  width: 100%;
  padding: 22px;
  color: $color-light-grey;
  font-size: 18px;
  background: $color-off-white;
  border-top: 1px solid $color-divider;
}


</style>

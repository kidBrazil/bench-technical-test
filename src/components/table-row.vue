<template>
  <div class="bt-table-row flex flex-vert-center flex-hor-between">
    <div>
      Date
    </div>
    <div>
      Company
    </div>
    <div>
      Account
    </div>
    <div>
     Transaction
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransactionRow',
  props: {
    msg: String
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

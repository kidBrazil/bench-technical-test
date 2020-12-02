<template>
  <div class="bt-table-header flex flex-vert-center flex-hor-between">
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
      {{total}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransactionHeader',
  props: {
    total: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bt-table-header{
  width: 100%;
  padding: 22px;
  background: $white;
  color: $color-brand-primary;
  font-weight: $heading-weight;
  font-size: 20px;
}

</style>

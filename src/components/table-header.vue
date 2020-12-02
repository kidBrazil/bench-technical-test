<template>
  <div class="bt-table-header flex flex-vert-center flex-hor-between">
    <div class="bt-table-date">
      Date
    </div>
    <div class="bt-table-company">
      Company
    </div>
    <div class="bt-table-account">
      Account
    </div>
    <div class="bt-table-amount">
      {{ total | currency }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableHeader',
  props: {
    total: Number
  }
}
</script>

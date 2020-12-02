<template>
  <nav class="bt-main-nav">
    <span class="bt-main-brand">
      Bench Test
    </span>
  </nav>
</template>

<style lang="scss">
.bt-main-nav {
  width: 100%;
  padding: 40px 0;
  text-align: center;
  background: $color-brand-primary;
  color: $white;

  @media #{$portrait} {
    padding: 25px 0;
  }
}

.bt-main-brand {
  font-size: 20px;
  font-weight: $body-weight;
}
</style>

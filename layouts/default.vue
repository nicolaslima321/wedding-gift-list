<template>
  <div class="default-layout">
    <div class="default-layout__background">
      <span>header</span>

      <div class="default-layout__page">
        <NuxtPage />
      </div>

      <span>footer</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.default-layout {
  // background: url('~/assets/imgs/bg-opacity.png') no-repeat center center fixed;
  // background-size: cover;
  // -webkit-background-size: cover;
  // -moz-background-size: cover;
  // -o-background-size: cover;
  display: flex;
  flex-direction: column;
}

.default-layout__page {
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  max-height: 100vh;
  // padding: var(--unit-0400);
  z-index: 0;

  @media (min-width: 1000px) {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    // padding: var(--unit-0400);
    height: 100%;
    width: 100%;
    // // margin: var(--unit-0200) auto var(--unit-0600) auto;
    max-width: 1000px;
  }
}

.default-layout__page-container {
  align-self: center;
  width: 100%;

  @media (min-width: 1000px) {
    width: 80%;
  }
}

.default-layout__page-container--full-size {
  width: 100%;
}

.default-layout__breadcrumb {
  // margin-bottom: var(--unit-0400);
}

.default-layout__footer {
  // margin-top: var(--layout-footer-margin);
}
</style>

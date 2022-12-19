<template>
  <div class="index">
    oi?
    <IzgCarousel>
      <template #content>
        <div v-for="index in [1,2,3,4,5]" :key="index">
          <span> sua mãe de 4 {{index}}x </span>
        </div>
      </template>
    </IzgCarousel>
  </div>
</template>

<script setup lang="ts">
import IzgButton from '~/components/common/IzgButton';
import IzgCarousel from '~/components/common/IzgCarousel';
</script>

<style lang="scss">
.index {
  height: 100%;
  width: 100%;
}
</style>
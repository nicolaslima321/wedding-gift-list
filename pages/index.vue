<template>
  <div class="index">
    <IzgCarousel class="index__carousel">
      <template #content>
        <div v-for="(src, index) in ['bg-opacity.png', 'background.jpg']" :key="index">
          <img class="index__carousel-image" :src="imageUrl(src)" />
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
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  min-height: 100%;
  min-width: 100%;
}
</style>

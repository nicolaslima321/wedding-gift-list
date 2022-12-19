<template>
  <div
    class="izg-carousel"
  >
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="izg-carousel"
      v-slot="{ currentSlide }"
    >
      <Slide
        v-for="(slide, index) in $slots.content()[0].children"
        v-show="currentSlide === index + 1"
        class="slide-info"
        :key="index"
      >
        <component
          @click="handle(currentSlide)"
          :is="slide"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import Slide from "./Slide.vue";

export default {
  name: "Home",
  mounted() {
    console.log(this.$slots.content()[0].children);
  },
  methods: {
    handle(a, e) {
      console.log(a, e);
    }
  },
  components: { Carousel, Slide },
};
</script>

<style scoped lang="scss">
// .izg-carousel {
//   // align-items: center;
//   // display: flex;
//   // flex-direction: column;
//   // justify-content: center;
//   position: relative;
//   max-height: 100vh;
//   max-width: 100vw;
//   height: 100vh;
//   width: 100vh;
// }

.izg-carousel {
  // align-items: center;
  display: flex;
  flex-direction: column;
  // justify-content: center;
}

// .slide-info {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 100%;
//   min-width: 100%;
//   max-height: 100%;
//   height: 100%;

//   img {
//     min-width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// }

.slide-info {
  display: flex;
  width: 100%;
  min-width: 100%;
  max-height: 100%;
  height: 100%;

  img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.carousel__content {
  width: 100%;
  min-width: 100%;
  max-height: 100%;
  // align-self: center;
  // display: flex;
  // flex-direction: column;
  // justify-self: center;
}

</style>
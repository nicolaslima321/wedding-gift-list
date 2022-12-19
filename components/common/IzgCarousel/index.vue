<template>
  <div class="izg-carousel">
    <Slide
      v-for="(slotToRender, index) in slotsToRender"
      v-show="currentSlide === index + 1"
      class="izg-carousel__container"
      :currentSlide="currentSlide"
      :key="index"
    >
      <component
        class="izg-carousel__content"
        :is="slotToRender"
      />
    </Slide>

    <div
      v-if="navEnabled"
      class="izg-carousel__controls"
    >
      <font-awesome-icon
        class="izg-carousel__slide-action"
        icon="fa-solid fa-chevron-left" @click="prevSlide"
      />

      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        class="izg-carousel__page-indicator"
        :class="{ 'izg-carousel__page-indicator--active': index + 1 === currentSlide }"
      />

      <font-awesome-icon
        class="izg-carousel__slide-action"
        icon="fa-solid fa-chevron-right" @click="nextSlide"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Slide from "./Slide.vue";

export default {
  props: ["startAutoPlay", "timeout", "navigation", "pagination"],
  components: {
    Slide,
  },
  setup(props, $slots) {
    const { slots } = $slots;
    const slotsToRender = slots.content()[0].children;

    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(
      props.startAutoPlay === undefined ? true : props.startAutoPlay
    );

    const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout);
    const pagintationEnabled = ref(
      props.pagination === undefined ? true : props.pagination
    );

    const navEnabled = ref(props.navigation === undefined ? true : props.navigation);
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    if (autoPlayEnabled.value) {
      autoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
      console.log(getSlideCount.value);
    });

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      goToSlide,
      pagintationEnabled,
      navEnabled,
      slotsToRender,
    };
  },
};
</script>

<style scoped lang="scss">
.izg-carousel {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.izg-carousel__container {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 16px 0;
}

.izg-carousel__content {
  width: 100%;
  height: 100%;
}

.izg-carousel__controls {
  align-items: center;
  display: flex;
  width: 100;
}

.izg-carousel__slide-action {
  &:first-child {
    margin-right: 32px;
  }

  &:last-child {
    margin-left: 32px;
  }

  &:hover {
    cursor: pointer;
  }
}

.izg-carousel__page-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0 8px;

  &:hover {
    cursor: pointer;
  }

  &--active {
    background-color: black;
  }
}
</style>

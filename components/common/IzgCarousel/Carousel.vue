<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- Navigation -->
    <div
      v-if="navEnabled"
      class="carousel__controls"
    >
      <font-awesome-icon
        class="carousel__slide-action"
        icon="fa-solid fa-chevron-left" @click="prevSlide"
      />

      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        class="carousel__page-indicator"
        :class="{ 'carousel__page-indicator--active': index + 1 === currentSlide }"
      />

      <font-awesome-icon
        class="carousel__slide-action"
        icon="fa-solid fa-chevron-right" @click="nextSlide"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: ["startAutoPlay", "timeout", "navigation", "pagination"],
  setup(props) {
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

    // next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    // prev slide
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
    // autoplay
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
    };
  },
};
</script>

<style lang="scss">
.carousel__controls {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 16px;
  position: absolute;
  width: 100%;
}

.carousel__slide-action {
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

.pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

.carousel__page-indicator {
  min-width: 8px;
  min-height: 8px;
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

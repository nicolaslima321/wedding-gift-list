<template>
  <button
    class="izg-button"
    :class="{ [`izg-button--${variant}`]: variant }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  variant?: string,
};

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
});
</script>

<template>
  <div
    class="previous-page__click-button"
    :class="{'first-page': isFirstPage}"
    @click="emits('clickPrevPage')"
  >
    <span class="arrow arrow-left"></span>
  </div>
  <slot
    v-if="slots.buttonsPagination"
    name="buttonsPagination"
  />
  <div
    class="next-page__click-button"
    :class="{'last-page': isLastPage}"
    @click="emits('clickNextPage')"
  >
    <span class="arrow arrow-right"></span>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';

defineProps<{
  isFirstPage?: boolean
  isLastPage?: boolean
}>();

const emits = defineEmits<{
  clickPrevPage: []
  clickNextPage: []
}>();

const slots = useSlots();
</script>

<style lang="scss" scoped>
  .previous-page__click-button, .next-page__click-button {
    margin: 0px 5px;
    cursor: pointer;
    .arrow {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-top: 2px solid #000;
      border-left: 2px solid #000;
      &.arrow-right {
        transform: rotate(135deg);
      }
      &.arrow-left {
        transform: rotate(-45deg);
      }
    }
  }
  .previous-page__click-button.first-page, .next-page__click-button.last-page {
    cursor: not-allowed;
    .arrow {
      border-color: #e0e0e0;
    }
  }
</style>

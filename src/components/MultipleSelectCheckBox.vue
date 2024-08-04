<template>
  <div class="easy-checkbox" @click.stop.prevent="toggleChecked">
    <input type="checkbox" :checked="isChecked" :class="status" />
    <label for="checbox" />
  </div>
</template>

<script setup lang="ts">
import { Selection } from '@/enum/table';
import { computed, inject } from 'vue';

const emits = defineEmits<{
  change: [v: boolean]
}>();

const props = defineProps<{
  status: Selection.ALL_SELECTED | Selection.NONE_SELECTED | Selection.PART_SELECTED
}>();

const themeColor = inject('themeColor');

const isChecked = computed(() => props.status === Selection.ALL_SELECTED);

const toggleChecked = () => {
  emits('change', !isChecked.value);
};
</script>

<style lang="scss" scoped>
@import '@/assets/checkbox.scss';

$checkbox-checked-color: v-bind(themeColor);

.easy-checkbox {
  input[type='checkbox'] {
    &.allSelected,
    &.partSelected {
      + label:before {
        background: $checkbox-checked-color;
      }
    }
  }
}
</style>

<template>
  <div class="easy-checkbox" @click.stop.prevent="emits('change')">
    <input type="checkbox" :checked="checked" />
    <label for="checkbox" />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

defineProps<{
  checked: boolean
}>();

const emits = defineEmits<{
  change: []
}>();

const themeColor = inject('themeColor');
</script>

<style lang="scss" scoped>
@import '@/assets/checkbox.scss';

$checkbox-checked-color: v-bind(themeColor);

.easy-checkbox {
  input[type='checkbox'] {
    &:checked {
      + label:before {
        background: $checkbox-checked-color;
      }
    }
  }
}
</style>

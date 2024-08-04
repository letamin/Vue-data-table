<template>
  <div class="easy-data-table__rows-selector">
    <div class="rows-input__wrapper" @click="showList = !showList">
      <div class="rows-input">
        {{ rowsComputed }}
      </div>
      <div class="triangle"></div>
    </div>
    <ul class="select-items" :class="{ show: showList, inside: showInsideOfTable }">
      <li
        v-for="item in rowsItems"
        :key="item"
        :class="{ selected: item === rowsComputed }"
        @click="changeSelectedRows(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, inject, watch, type Ref } from 'vue';

defineProps<{
  rowsItems: number[]
}>();

const dataTable = inject('dataTable') as Ref<HTMLDivElement>;
const themeColor = inject('themeColor');

const rowsComputed = defineModel<number>();

const showList = ref<boolean>(false);
const showInsideOfTable = ref<boolean>(false);

const changeSelectedRows = (value: number) => {
  rowsComputed.value = value;
  showList.value = false;
};

const isDescendant = (child: EventTarget, className: string) => {
  let node = (child as Element).parentNode as HTMLElement;
  while (node != null) {
    if (node.classList && node.classList.contains(className)) {
      return true;
    }
    node = node.parentNode as HTMLElement;
  }

  return false;
};

const closeRowsSelector = (e: Event) => {
  if (!e.target) {
    return;
  }

  if (!isDescendant(e.target, 'easy-data-table__rows-selector')) {
    showList.value = false;
  }
};

watch(showList, (val) => {
  if (val && dataTable) {
    const windowHeight = window.innerHeight;
    const dataTableHeight = dataTable.value.getBoundingClientRect().height;
    const dataTableTop = dataTable.value.getBoundingClientRect().top;
    if (windowHeight - (dataTableHeight + dataTableTop) <= 100) {
      showInsideOfTable.value = true;
    } else {
      showInsideOfTable.value = false;
    }
  }
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeRowsSelector);
});

onMounted(() => {
  document.addEventListener('click', closeRowsSelector);
});
</script>

<style scoped lang="scss">
.easy-data-table__rows-selector {
  display: inline-block;
  min-width: 45px;
  position: relative;
  margin: 0px 10px;
  width: var(--easy-table-rows-per-page-selector-width);
  .rows-input__wrapper {
    height: 20px;
    border-bottom: 1px solid var(--easy-table-footer-font-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5px;
    cursor: pointer;
    .triangle {
      display: inline-block;
      vertical-align: middle;
      width: 0px;
      height: 0px;
      border-top: solid 6px var(--easy-table-footer-font-color);
      border-left: solid 6px transparent;
      border-right: solid 6px transparent;
    }
  }
  ul.select-items {

    position: absolute;
    top: 20px;
    left: 0px;
    width: 100%;
    display: none;
    margin: 0px;
    padding: 0px;
    text-align: left;
    list-style-type: none;
    box-shadow:
      0 5px 5px -3px rgb(0 0 0 / 20%),
      0 8px 10px 1px rgb(0 0 0 / 14%),
      0 3px 14px 2px rgb(0 0 0 / 12%);
    z-index: var(--easy-table-rows-per-page-selector-z-index);

    &.show {
      display: block;
    }
    &.inside {
      bottom: 0px;
      top: auto;
    }

    li {
      cursor: pointer;
      padding: var(--easy-table-rows-per-page-selector-option-padding);
      background-color: var(--easy-table-footer-background-color);

      &.selected {
        color: #fff;
        background-color: v-bind(themeColor);
      }
    }
  }
}
</style>

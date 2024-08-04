<template>
  <div>
    <DataTable
      v-model:items-selected="itemsSelected"
      :headers="headers"
      :items="items"
      alternating
      borderCell
      showIndex
      @expandRow="loadData"
    >
      <template #expand="item">
        <div style="padding: 15px">
          {{ item.newData }}
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataTable from './components/DataTable.vue';
import type { Header, Item } from './types/table';
import data from './data.json';

const headers: Header[] = [
  { text: 'POKEMON', value: 'pokemon', sortable: true },
  { text: 'TYPE', value: 'type' },
  { text: 'SPECIES', value: 'species' },
  { text: 'HEIGHT', value: 'height' },
  { text: 'WEIGHT', value: 'weight' },
  { text: 'CATCH RATE', value: 'catchRate' },
  { text: 'GENDER', value: 'gender' },
  { text: 'HP BASE', value: 'hpBase' },
  { text: 'ATTACK BASE', value: 'attackBase' },
  { text: 'DEFENSE BASE', value: 'defenseBase' },
  { text: 'SPECIAL ATTACK BASE', value: 'specialAttackBase' },
  { text: 'SPEED BASE', value: 'speedBase' }
];

const items = ref<Item[]>(data);

const itemsSelected = ref([]);

const getData = async () => {
  await new Promise((s) => setTimeout(s, 2000));
  const newData = 'new data';
  return newData;
};

const loadData = async (index: number) => {
  const expandedItem = items.value[index];
  expandedItem.expandLoading = true;
  expandedItem.newData = await getData();
  expandedItem.expandLoading = false;
};
</script>

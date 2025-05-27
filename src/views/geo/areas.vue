<template>
  <div>
    <label> Select Areas </label>
    <ElButton @click="handleExportSingle" :loading="exportLoading">
      Export Single File(All In One)</ElButton
    >
    <ElButton @click="handleExportMany" :loading="exportLoading">
      Export Many Files(One Area One File</ElButton
    >
    <ElButton @click="exportAreaTree(selectedAreas)" :loading="exportLoading">
      Export Area Tree</ElButton
    >

    <ElTable
      @selection-change="handleSelectionChange"
      :data="areasTree"
      selection
      row-key="code"
    >
      <ElTableColumn type="selection"></ElTableColumn>
      <ElTableColumn prop="code" label="code"></ElTableColumn>
      <ElTableColumn prop="name" label="name"></ElTableColumn>
      <ElTableColumn prop="level" label="level"></ElTableColumn>
      <ElTableColumn prop="center" label="center"></ElTableColumn>
    </ElTable>
  </div>
</template>

<script lang="ts">
import { ElButton, ElTable, ElTableColumn } from 'element-plus';
import { computed, defineComponent, ref, shallowRef } from 'vue';

import {
  exportAreaTree,
  exportFiles,
  exportSingleFile,
  getAreasTree,
} from '@/views/geo/areas-utils';

export default defineComponent({
  methods: { exportAreaTree },
  components: { ElButton, ElTable, ElTableColumn },
  props: {},
  setup() {
    const selectedAreas = ref([]);
    const areasTree = shallowRef([]);

    const handleSelectionChange = (rows) => {
      selectedAreas.value = rows;
    };

    const selectedAreasCodes = computed(() =>
      selectedAreas.value.map((item) => item.code),
    );

    getAreasTree().then((res) => (areasTree.value = res));

    const exportLoading = ref(false);
    const handleExportSingle = () => {
      exportLoading.value = true;
      exportSingleFile(selectedAreasCodes.value).finally(
        () => (exportLoading.value = false),
      );
    };
    const handleExportMany = () => {
      exportLoading.value = true;
      exportFiles(selectedAreasCodes.value).finally(
        () => (exportLoading.value = false),
      );
    };

    return {
      selectedAreas,
      areasTree,
      exportLoading,

      handleSelectionChange,
      handleExportSingle,
      handleExportMany,
    };
  },
});
</script>

<!--<style lang="scss" scoped>-->
<!--@import '@/styles/common-variables.scss';-->
<!--</style>-->

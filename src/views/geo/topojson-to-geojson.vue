<template>
  <div>
    <el-button @click="triggerUpload" :loading="loading">
      Upload Files
    </el-button>
    <input
      @change="uploadFile"
      style="position: absolute; top: -99999px"
      ref="input"
      type="file"
      accept=".json"
      multiple
    />

    <h3 class="margin-top-medium">TopoJSON To GeoJSON</h3>
    <div class="margin-top-base">
      TopoJSON:
      <pre><code>{ type: 'Topology', arcs: [], objects: {} }</code></pre>
    </div>
    <div class="margin-top-base">
      GeoJSON:
      <pre><code>{ type: 'FeatureCollection', features: [] }</code></pre>
    </div>
  </div>
</template>

<script lang="ts">
import { ElButton } from 'element-plus';
import { defineComponent } from 'vue';

import { downloadByContent, readJSONFile } from '@/utils/file';
import type { DataVJSON } from '@/views/geo/utils';
import { topojsonToGeoJSON } from '@/views/geo/utils';

export default defineComponent({
  components: {
    ElButton,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    uploadFile() {
      const files = Array.from(this.$refs.input.files);
      this.$refs.input.value = '';

      this.loading = true;
      return Promise.all(
        files.map(async (file) => {
          const json = (await readJSONFile(file)) as DataVJSON;

          const geojson = topojsonToGeoJSON(json);

          downloadByContent(JSON.stringify(geojson), `geojson.json`);
        }),
      ).finally(() => (this.loading = false));
    },
    triggerUpload() {
      this.$refs.input.click();
    },
  },
});
</script>

<!--<style lang="scss" scoped>-->
<!--//@import '~@/styles/common-variables.scss';-->
<!--//-->
<!--//.service-data {-->
<!--//}-->
<!--</style>-->

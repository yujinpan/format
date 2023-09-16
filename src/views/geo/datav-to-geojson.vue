<template>
  <div class="padding-medium">
    <el-button @click="triggerUpload" :loading="loading">
      DataVJSON To GeoJSON
    </el-button>
    <input
      @change="uploadFile"
      style="position: absolute; top: -99999px"
      ref="input"
      type="file"
      accept=".json"
      multiple
    />

    <div class="margin-top-base">
      <a
        target="_blank"
        href="http://datav.aliyun.com/portal/school/atlas/level_generator"
        >DataVJSON（导出层级(开放格式）</a
      >:
      <pre><code>{ name: string; payload: TopoJSON; children: {...} }</code></pre>
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
import { datavToGeoJSON } from '@/views/geo/utils';

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
          const geojson = datavToGeoJSON(json);

          if (geojson.features.length) {
            downloadByContent(JSON.stringify(geojson), `${json.name}.json`);
          }
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

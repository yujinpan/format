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

    <h3 class="margin-top-medium">DataVJSON To GeoJSON</h3>
    <div class="margin-top-base">
      <a
        target="_blank"
        href="http://datav.aliyun.com/portal/school/atlas/level_generator"
        >DataVJSON（层级.json(开放格式)）</a
      >:
      <pre><code>{ name: string; payload: TopoJSON; children: {...} }</code></pre>
    </div>
    <div class="margin-top-base">
      GeoJSON:
      <pre><code>{ type: 'FeatureCollection', features: [] }</code></pre>
    </div>
    <h3 class="margin-top-medium">Options</h3>
    <ul>
      <li class="margin-top-base">
        <span>Keep Area Tree</span>&nbsp;&nbsp;
        <el-switch v-model="keepAreaTree" />
        <pre><code>[{ code, name, children, geojson }]</code></pre>
        <ul v-if="keepAreaTree">
          <li class="margin-top-base">
            <span>Save Level</span>&nbsp;&nbsp;
            <ElRadioGroup v-model="saveLevel">
              <ElRadioButton
                v-for="item in AreaLevels"
                :key="item"
                :value="item"
                :label="item"
              />
            </ElRadioGroup>
            <pre class="margin-top-base">
- {{ AreaLevel.COUNTRY }}
  - {{ AreaLevel.PROVINCE }}
    - {{ AreaLevel.CITY }}
      - {{ AreaLevel.DISTRICT }}
            </pre>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ElButton, ElSwitch, ElRadioGroup, ElRadioButton } from 'element-plus';
import { defineComponent } from 'vue';

import { downloadByContent, readJSONFile } from '@/utils/file';
import type { DataVJSON } from '@/views/geo/utils';
import {
  AreaLevel,
  AreaLevels,
  datavToAreaTree,
  datavToGeoJSON,
} from '@/views/geo/utils';

export default defineComponent({
  components: {
    ElButton,
    ElSwitch,
    ElRadioGroup,
    ElRadioButton,
  },
  data() {
    return {
      loading: false,
      keepAreaTree: false,
      saveLevel: AreaLevel.DISTRICT,
      AreaLevels,
      AreaLevel,
    };
  },
  methods: {
    downloadJson(json, name) {
      downloadByContent(JSON.stringify(json), `${name}.json`);
    },
    uploadFile() {
      const files = Array.from(this.$refs.input.files);
      this.$refs.input.value = '';

      this.loading = true;
      return Promise.all(
        files.map(async (file) => {
          const json = (await readJSONFile(file)) as DataVJSON;

          if (this.keepAreaTree) {
            const areaTreeJson = datavToAreaTree(json, this.saveLevel);

            this.downloadJson(areaTreeJson, json.name);
          } else {
            const geojson = datavToGeoJSON(json);

            if (geojson.features.length) {
              this.downloadJson(geojson, json.name);
            }
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

<template>
  <div class="full">
    <div class="padding-medium" v-for="(item, index) in menus" :key="index">
      <h4 class="margin-bottom-medium">{{ item.name }}</h4>
      <ul class="padding-left-large">
        <li v-for="(item, index) in item.children" :key="index">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { subRoutes } from '@/router';

export default defineComponent({
  data() {
    return {
      menus: subRoutes.slice(1),
    };
  },
});
</script>

<!--<style lang="scss" scoped>-->
<!--//@import '~@/styles/common-variables.scss';-->
<!--//-->
<!--//.service-data {-->
<!--//}-->
<!--</style>-->

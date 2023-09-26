<template>
  <div class="padding-medium">
    <router-link to="/">
      <span class="fl-cv">
        <img class="margin-right-base" width="20" src="/logo.svg" />
        Format
      </span>
    </router-link>
    <div class="margin-top-medium">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<!--<style lang="scss" scoped>-->
<!--//@import '~@/styles/common-variables.scss';-->
<!--//-->
<!--//.service-data {-->
<!--//}-->
<!--</style>-->

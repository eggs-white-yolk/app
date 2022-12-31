<template>
  <div id="app">
    <Header></Header>
    <!-- 路由出口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.isFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue';
import Footer from '@/components/Footer/index.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 发请求,获取分类列表
    this.$store.dispatch('categoryList');
  },
};
</script>

<style></style>

<template>
  <div>我是搜索,搜索内容是{{ keyword }}</div>
</template>

<script>
export default {
  name: 'Search',
  // props 只能传递 params 参数
  props: ['keyword'],
};
</script>

<style></style>

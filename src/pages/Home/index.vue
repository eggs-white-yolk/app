<template>
  <div>
    <!-- 三级联动组件已经是全局组件，不需要引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommand></Recommand>
    <Rank></Rank>
    <Like></Like>
    <div>
      <Floor v-for="item in floorList" :key="item.id" :floor="item"></Floor>
    </div>
    <Brand></Brand>
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from '@/pages/Home/ListContainer/index.vue';
import Recommand from '@/pages/Home/Recommand/index.vue';
import Rank from '@/pages/Home/Rank/index.vue';
import Like from '@/pages/Home/Like/index.vue';
import Floor from '@/pages/Home/Floor/index.vue';
import Brand from '@/pages/Home/Brand/index.vue';

import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
  mounted() {
    this.$store.dispatch('getFloorList');
  },
  components: {
    ListContainer,
    Recommand,
    Rank,
    Like,
    Floor,
    Brand,
  },
};
</script>

<style></style>

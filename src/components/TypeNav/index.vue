<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <!-- 事件委派，把子元素的事件，委派给父元素 -->
    <div class="container" @mouseleave="removeIndex" @mouseenter="enterShow">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
        <!-- 三级联动 -->
        <div class="sort" v-show="isShowNav">
          <div class="all-sort-list2" @click="goSearch($event)">
            <div
              class="item"
              :class="{ cur: currentIndex == index }"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
            >
              <h3>
                <a
                  :data-categoryName="c1.categoryName"
                  :data-categoryId1="c1.categoryId"
                  @mouseenter="changeIndex(index)"
                  >{{ c1.categoryName }}</a
                >
              </h3>
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <div
                  class="subitem"
                  v-for="c2 in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-categoryId2="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-categoryId3="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle';
import { mapState } from 'vuex';
export default {
  name: 'TypeNav',
  data() {
    return {
      currentIndex: -1,
      isShowNav: true,
    };
  },
  methods: {
    // 鼠标移出
    removeIndex() {
      if (this.$route.meta.isMoveHiddeNav) {
        this.isShowNav = false;
      }
      this.currentIndex = -1;
    },

    // 鼠标进入
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),

    enterShow() {
      this.isShowNav = true;
    },

    goSearch(e) {
      let element = e.target;
      let { categoryname, categoryid1, categoryid2, categoryid3 } =
        element.dataset;
      if (categoryname) {
        let location = { name: 'search' };
        let query = { categoryName: categoryname };
        if (categoryid1) {
          query.categoryId1 = categoryid1;
        } else if (categoryid2) {
          query.categoryId2 = categoryid2;
        } else {
          query.categoryId3 = categoryid3;
        }
        location.query = query;
        if (this.$route.params) {
          location.params = this.$route.params;
        }
        this.$router.push(location);
      }
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  mounted() {
    if (this.$route.meta.isMoveHiddeNav) this.isShowNav = false;
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
            a:hover {
              cursor: pointer;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }
                dt:hover {
                  cursor: pointer;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                  em:hover {
                    cursor: pointer;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }

    .sort-enter {
      height: 0px;
    }
    .sort-enter-to {
      height: 461px;
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>

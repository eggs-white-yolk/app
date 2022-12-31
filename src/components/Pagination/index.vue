<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev disabled">
          <a @click="prePage(pageNo)">«上一页</a>
        </li>
        <li>
          <a v-if="startNumAndEndNum.start > 1" @click="toPageOne">1</a>
        </li>
        <li>
          <a v-if="startNumAndEndNum.start > 2" @click="toPageOne">...</a>
        </li>
        <!-- <li
          :class="pageNo === index + startNumAndEndNum.start ? 'active' : ''"
          v-for="(page, index) in pageNo - startNumAndEndNum.start + 1"
          :key="index"
          @click="changeCurrentPage(index + 1)"
        >
          <a>{{ index + startNumAndEndNum.start }}</a>
        </li>
        <li
          v-for="(page, index) in startNumAndEndNum.end - pageNo"
          :key="index + pageNo"
          @click="changeCurrentPage(pageNo + index + 1)"
        >
          <a>{{ pageNo + index + 1 }}</a>
        </li> -->
        <li
          :class="pageNo === page ? 'active' : ''"
          v-for="(page, index) in startNumAndEndNum.end"
          :key="index"
          @click="changeCurrentPage(page)"
        >
          <a v-if="page >= startNumAndEndNum.start">{{ page }}</a>
        </li>
        <li>
          <a v-if="startNumAndEndNum.end < totalPages - 1" @click="toPageEnd"
            >...</a
          >
        </li>
        <li>
          <a v-if="startNumAndEndNum.end < totalPages" @click="toPageEnd">{{
            totalPages
          }}</a>
        </li>
        <li class="next">
          <a @click="nextPage(pageNo)">下一页»</a>
        </li>
      </ul>
      <div class="totalPageStyle">
        <span>共{{ totalPages }}页&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pageSize', 'total', 'pageNo', 'continues'],
  updated() {
    this.startNumAndEndNum;
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      this.$nextTick(() => {});
      // 先定义两个变量存储起始数字和结束数字
      let start,
        end = 0;
      // 不正常现象，总页数小于要求的连续页数
      if (this.totalPages < this.continues) {
        start = 1;
        end = this.totalPages;
        return { start, end } || {};
      }
      // 正常情况
      let leftHalf = Math.floor(this.continues / 2);
      // 连续值的一半大于当前页,start置为1
      start = leftHalf >= this.pageNo ? 1 : this.pageNo - leftHalf;
      end = start + this.continues - 1;
      if (end >= this.totalPages) {
        start -= end - this.totalPages;
        if (start < 1) {
          start = 1;
        }
        end = this.totalPages;
      }
      return { start, end } || {};
    },
  },
  methods: {
    // 去第一页
    toPageOne() {
      this.pageNo = 1;
      this.$emit('getPageNo', this.pageNo);
    },
    toPageEnd() {
      this.pageNo = this.totalPages;
      this.$emit('getPageNo', this.pageNo);
    },
    // 上一页
    prePage(pageNo) {
      pageNo--;
      if (pageNo < 1) {
        return;
      }
      this.$emit('getPageNo', pageNo);
    },
    // 下一页
    nextPage(pageNo) {
      pageNo++;
      if (pageNo == this.totalPages + 1) {
        return;
      }
      this.$emit('getPageNo', pageNo);
    },
    // 点击卡片改变页数
    changeCurrentPage(pageNo) {
      this.$emit('getPageNo', pageNo);
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  // width: 1000px;
  height: 66px;
  overflow: hidden;
  float: right;

  .sui-pagination {
    margin: 20px 0;
    .totalPageStyle {
      padding: 9px 18px;
    }
    ul {
      margin-left: 0;
      margin-bottom: 0;
      vertical-align: middle;
      // width: 490px;
      float: left;
      li {
        line-height: 18px;
        display: inline-block;

        a {
          position: relative;
          float: left;
          line-height: 18px;
          margin: 0 5px;
          text-decoration: none;
          background-color: #fff;
          border: 1px solid #e0e9ee;
          margin-left: -1px;
          font-size: 14px;
          padding: 9px 18px;
          color: #333;
        }

        &.active {
          a {
            background-color: #fff;
            color: #e1251b;
            border-color: #fff;
            cursor: default;
          }
          a:hover {
            cursor: pointer;
          }
        }

        &.prev {
          a {
            background-color: #fafafa;
          }
          a:hover {
            cursor: pointer;
          }
        }

        &.disabled {
          a {
            color: #999;
            cursor: default;
          }
        }

        &.dotted {
          span {
            margin-left: -1px;
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            font-size: 14px;
            border: 0;
            padding: 9px 18px;
            color: #333;
          }
        }

        &.next {
          a {
            background-color: #fafafa;
          }
        }
      }
    }
    ul:hover {
      cursor: pointer;
    }

    div {
      color: #333;
      font-size: 14px;
      float: right;
      width: 241px;
    }
  }
}
</style>

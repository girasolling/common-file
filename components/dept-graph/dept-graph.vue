<template>
  <div class="dept-graph">
    <!-- getFlex函数作用：如果同级均为叶子节点，则均分空间。否则按实际大小展示。主要为了美观 -->
    <div v-for="d in list" :key="d.label" :style="{flex:getFlex(d)}" class="dept">
      <!-- 叶子节点[leaf:true]竖向展示,非叶子节点横向展示 -->
      <div :class="{label:true,leaf:d.leaf}">
        {{d.label}}
        <!-- 上下级之间的连接线，topLevel为最高层级，无需连接线 -->
        <span class="line" v-if="!d.topLevel"></span>
      </div>
      <DeptGraph v-if="d.children&&d.children.length" :list="d.children"></DeptGraph>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DeptGraph',
  props: { list: Array },
  data() {
    return {}
  },
  methods: {
    getFlex(d) {
      if (!d.leaf) {
        return 1
      } else if (this.list.some((item) => !item.leaf)) {
        return 0
      } else {
        return 1
      }
    },
  },
}
</script>
<style scoped>
.dept-graph {
  overflow: hidden;
  padding-top: 16px;
  display: flex;
}
.dept + .dept {
  margin-left: 16px;
}
span.line {
  position: absolute;
  border-left: 1px solid #ccc;
  height: 16px;
  top: -16px;
  left: 50%;
}
.label {
  text-align: center;
  padding: 5px;
  letter-spacing: 2px;
  border: 1px solid #ccc;
  position: relative;
  white-space: nowrap;
  background-color: #efefef;
}
.leaf {
  writing-mode: vertical-lr;
  left: 50%;
  transform: translateX(-50%);
}
</style>
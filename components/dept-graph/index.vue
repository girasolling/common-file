<template>
  <div style="padding:20px;overflow:auto;display:flex">
    <DeptGraph :list="dataList" style="flex:0 0 auto;margin:50px auto 20px" />
  </div>
</template>
<script>
// 组织机构图 显示效果见result.png
import DeptGraph from './dept-graph.vue'
import { mockData } from './data.js'
export default {
  components: { DeptGraph },
  data() {
    return {
      dataList: [],
    }
  },
  mounted() {
    this.dataList = mockData
    // 顶级节点设置 topLevel：true 控制连接线显隐
    this.dataList.forEach((d) => this.$set(d, 'topLevel', true))
    // 递归标记叶子节点
    this.dealData()
  },
  methods: {
    dealData(list = this.dataList) {
      list.forEach((d) => {
        if (d.children && d.children.length) {
          this.$set(d, 'leaf', false)
          this.dealData(d.children)
        } else {
          this.$set(d, 'leaf', true)
        }
      })
    },
  },
}
</script>
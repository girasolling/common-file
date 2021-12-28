以向上滚动列表为例，实现如下:

```
/**
 * list:滚动列表数据
 * contentEl: 滚动列表的包裹外层，滚动元素父节点
 * scrollEl:  滚动列表的包裹内层，滚动元素
 * itemHeight: 列表项高度
 * speed:滚动速度 默认为1
**/

scroll(list,contentEl,scrollEl,itemHeight,speed) {
  // 计算可容纳列表项数目 如果可容纳数据大于列表长度 无需滚动
  let canPlaceNum = Math.floor(contentEl.offsetHeight / itemHeight)
  if (canPlaceNum >= list.length) {
    return
  }
  // 修改滚动区域列表数据 变为原先列表数据的两倍 同时修改滚动区域高度
  this.dataList = list.concat(list)
  scrollEl.style.height = itemHeight * this.dataList.length + 'px'
  
  let num = 1
  const fnMove = () => {
    // 此处通过num控制滚动速度，因为offsetHeight值为整数，所以每帧的最小滚动值为1px
    // 但是对于简单的列表项，1px的速度过快，所以通过num，巧妙的控制为每三帧滚动1px
    // num值不易设置过大，不然用户感知强烈
    if (num < 3) {
      num++
      this.ret = window.requestAnimationFrame(fnMove)
      return
    }
    num = 1
    if (scrollEl.offsetTop < -scrollEl.offsetHeight / 2) {
      scrollEl.style.top = '0px'
    } else if (scrollEl.offsetTop > 0) {
      scrollEl.style.top = -scrollEl.offsetHeight / 2 + 'px'
    } //定义到边界的时候，实现无缝衔接
    scrollEl.style.top = scrollEl.offsetTop - speed + 'px'
    //定义图片的右边距随着速度不断不断增加，或减小，实现运动的效果
    this.ret = window.requestAnimationFrame(fnMove)
  }
  this.$nextTick(() => {
    this.ret = window.requestAnimationFrame(fnMove)
  })
  content.onmouseover = () => {
    window.cancelAnimationFrame(this.ret)
  }
  content.onmouseout = () => {
    this.ret = window.requestAnimationFrame(fnMove)
  }
},
```
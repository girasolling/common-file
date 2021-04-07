/**
 * 日期展示格式转换
 *
 * @param {Date} date 要转换的日期
 * @return {String} xxxx年xx月xx日 星期x
 */
 function getDateWithWeek (date = new Date()) {
  if(Object.prototype.toString.call(date)!=="[object Date]"){
    return
  }
  const format1=(num)=>num>10?num:'0'+num;
  const format2= (num) => {
    switch(num){
      case 1:return '一';
      case 2:return '二';
      case 3:return '三';
      case 4:return '四';
      case 5:return '五';
      case 6:return '六';
      case 7:return '七';
    }
  }
  return `${date.getFullYear()}年${format1(date.getMonth() + 1)}月${format1(date.getDate())}日  星期${format2(date.getDay())}`
}

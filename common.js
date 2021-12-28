/**
 * 日期展示格式转换
 *
 * @param {Date} date 要转换的日期
 * @return {String} xxxx年xx月xx日 星期x
 */
function getDateWithWeek(date = new Date()) {
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    return
  }
  const format1 = (num) => num > 10 ? num : '0' + num;
  const format2 = (num) => {
    switch (num) {
      case 1:
        return '一';
      case 2:
        return '二';
      case 3:
        return '三';
      case 4:
        return '四';
      case 5:
        return '五';
      case 6:
        return '六';
      case 0:
        return '日';
    }
  }
  return `${date.getFullYear()}年${format1(date.getMonth() + 1)}月${format1(date.getDate())}日  星期${format2(date.getDay())}`
}

/**
 * 本地图片转base64
 *
 * @param {String} src 要转换的图片路径
 * @return {Promise} promise
 */
function toBase64Url(src) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;
    img.onload = function() {
      const canvas = document.createElement('CANVAS');
      const ctx = canvas.getContext('2d');
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      const dataURL = canvas.toDataURL();
      resolve(dataURL);
    };
  })
}

/**
 * HEX转RGB
 *
 * @param {String} color 要转换的hex色值
 * @return {Object} 转换后的rgb值
 */
function getColorChannels(color) {
  color = color.replace('#', '');
  if (/^[0-9a-fA-F]{3}$/.test(color)) {
    color = color.split('');
    for (let i = 2; i >= 0; i--) {
      color.splice(i, 0, color[i]);
    }
    color = color.join('');
  }
  if (/^[0-9a-fA-F]{6}$/.test(color)) {
    return {
      red: parseInt(color.slice(0, 2), 16),
      green: parseInt(color.slice(2, 4), 16),
      blue: parseInt(color.slice(4, 6), 16)
    };
  } else {
    return {
      red: 255,
      green: 255,
      blue: 255
    };
  }
}
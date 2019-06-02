/**
 * @class Cookies
 */
class Cookies {
  constructor () {
  }

  /*设置cookie*/
  /**
   * @param {string} name: cookie的key值
   * @param {any} value: 保存的cookie值
   * @param {number} day: 过期天数
   * @memberof Cookies
   */
  setCookie (name, value, day) {
      console.log('setting' + setting)
      if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object'){
          for (var i in setting) {
              var oDate = new Date();
              oDate.setDate(oDate.getDate() + day);
              document.cookie = i + '=' + setting[i] + ';expires=' + oDate;
          }
      }else{
          var oDate = new Date();
          oDate.setDate(oDate.getDate() + day);
          document.cookie = name + '=' + value + ';expires=' + oDate;
      }
      
  }

  /*获取cookie*/
  getCookie (name) {
      var arr = document.cookie.split('; ');
      for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('=');
          if (arr2[0] == name) {
              return arr2[1];
          }
      }
      return '';
  }

  /*删除cookie*/
  removeCookie (name) {
      this.setCookie(name, 1, -1);
  }
}

export default Cookies;
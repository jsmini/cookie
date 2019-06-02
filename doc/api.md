# 文档
这是一个cookie库，有设置、删除、获取cookie功能

## api模版
函数简单介绍
setCookie 设置cookie
getCookie 获取cookie
removeCookie 删除cookie

函数详细介绍

函数参数和返回值（要遵守下面的例子的规则）

setCookie 设置cookie
  * @param {string} name: cookie的key值
  * @param {any} value: 保存的cookie值
  * @param {number} day: 过期天数
  * @memberof Cookies
getCookie 获取cookie
  * @param {string} name: cookie的key值
removeCookie 删除cookie
  * @param {string} name: cookie的key值
  
举个例子（要包含代码用例）

```js
// 代码
let cookieTest = new Cookies()
cookieTest.setCookie({
  name: 'zenquan',
  value: '23', 
  day: 10
})
cookieTest.removeCookie('zenquan')
console.log(cookieTest.getCookie('zenquan'))
```

特殊说明，比如特殊情况下会报错等

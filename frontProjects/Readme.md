# 毕业设计

## 移动端电脑商城

### 1.前后台分离得开发方式
### 2.使用node.js实现的后台，vue实现的前台，数据库使用mongoose
### 3.使用rem实现的自适应
### 4.采用flex布局
### 5.利用normalize.css来重置所有样式【发现它并不能将所有的样式都去掉，所以就没用了】
### 6.UI框架，vant
#### 安装教程：
```
step1: 安装normalize.css
npm i normalize.css -S

step2:安装css-loader 和 style-loader
npm install node-sass css-loader style-loader -S

step3:在main.js中全局引入normalize.css
import "normalize.css";
```

## 整体结构
```
登录  注册
导航栏：首页  购物车  个人中心
页面：登录页面  注册页面 首页  分类页面  购买指南  详情页面  购物车页面  个人中心页面   下单页面

头部 ： 图标，标题、登录/注册

将搜索框放于轮播图和导航的中间

首页：轮播图  导航模块：社区、服务（提供技术支持）、资讯（即新闻）、购买指南。
底部导航：首页、分类、购物车、我的
数据结构：
   ｛
      <!-- 图片  电脑名称  简介  价格  -->
   ｝
```

## 实现思路：
1.底部导航栏点击会使顶部的标题改变为点击的导航栏对应的类型：
	1)、路由的跳转是通过watch计算属性来监听的，监听active的改变来变换路由
	2)、导航标题是通过全局的路由守卫来监听实现的，通过在vuex中创建底部导航的路由名称，然后通过mutation将to.name传到vuex并改变标题
	
	
	
## 不理解的点
     在axios请求时，如何才能确定在什么时候使用this.$http或this.$axios,何时才能使用axios：
     
       答：this.$http或this.$axios是给vue的原型添加了http与axios的方法。


## 爬虫获取商品数据
	【代码：H:\毕业设计\我的毕设\项目\reptileData】
	使用的包有：request、cheerio、ip代理池（但未实现）、mongoose。
	使用的对象：promise async await

​	 
## promise的使用:(解决并行，异步的问题)

```
例如上面的爬虫的例子：
   在获取网页的数据时，当涉及到数据的嵌套（即在一个对象数据中，有一个属性也需要再嵌套一个对象来存数据，但这个过程中第二个对象的数据也需要再调用一个request来获取，此时里面存在多个异步的情况）时，就需要用到promise，可将第二个对象的获取封装成一个promise对象，然后返回一个promise对象，接着就可以在第一个request中调用.then的方法,封装的函数中的promise对象的resolve(obj)可将获取到的值传回给.then方法中获取。
```

## callback回调函数的应用
```
  调用 setTimeout 函数会在一个时间段过去后在队列中添加一个消息。这个时间段作为函数的第二个参数被传入。如果队列中没有其它消息，
  消息会被马上处理。但是，如果有其它消息，setTimeout 消息必须等待其它消息处理完。因此第二个参数仅仅表示最少的时间 而非确切的时间
```

## 弹性布局：flex布局

```
http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
```




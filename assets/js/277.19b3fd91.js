(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{606:function(v,t,_){"use strict";_.r(t);var d=_(3),e=Object(d.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"应用生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用生命周期"}},[v._v("#")]),v._v(" 应用生命周期")]),v._v(" "),t("p",[v._v("uni-app 支持如下应用生命周期函数：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("函数名")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("onLaunch")]),v._v(" "),t("td",[v._v("当uni-app "),t("strong",[v._v("初始化完成")]),v._v("时触发（全局只触发一次）")])]),v._v(" "),t("tr",[t("td",[v._v("onShow")]),v._v(" "),t("td",[v._v("当 uni-app "),t("strong",[v._v("启动")]),v._v("，或"),t("strong",[v._v("从后台进入前台")]),v._v("显示")])]),v._v(" "),t("tr",[t("td",[v._v("onHide")]),v._v(" "),t("td",[v._v("当 uni-app 从前台进入后台")])]),v._v(" "),t("tr",[t("td",[v._v("onError")]),v._v(" "),t("td",[v._v("当 uni-app 报错时触发")])]),v._v(" "),t("tr",[t("td",[v._v("onUniNViewMessage")]),v._v(" "),t("td",[v._v("对 nvue 页面发送的数据进行监听")])]),v._v(" "),t("tr",[t("td",[v._v("onUnhandledRejection")]),v._v(" "),t("td",[v._v("对未处理的 Promise 拒绝事件监听函数（2.8.1+）")])]),v._v(" "),t("tr",[t("td",[v._v("onPageNotFound")]),v._v(" "),t("td",[v._v("页面不存在监听函数")])]),v._v(" "),t("tr",[t("td",[v._v("onThemeChange")]),v._v(" "),t("td",[v._v("监听系统主题变化")])])])]),v._v(" "),t("h1",{attrs:{id:"页面生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面生命周期"}},[v._v("#")]),v._v(" 页面生命周期")]),v._v(" "),t("p",[v._v("uni-app 支持如下页面生命周期函数：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("函数名")]),v._v(" "),t("th",[v._v("说明")]),v._v(" "),t("th",[v._v("平台差异说明")]),v._v(" "),t("th",[v._v("最低版本")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("onInit")]),v._v(" "),t("td",[v._v("监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad")]),v._v(" "),t("td",[v._v("百度小程序")]),v._v(" "),t("td",[v._v("3.1.0+")])]),v._v(" "),t("tr",[t("td",[v._v("onLoad")]),v._v(" "),t("td",[v._v("监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参）")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("onShow")]),v._v(" "),t("td",[v._v("监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("onReady")]),v._v(" "),t("td",[v._v("监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("onHide")]),v._v(" "),t("td",[v._v("监听页面隐藏")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("onUnload监听页面卸载")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("onResize")]),v._v(" "),t("td",[v._v("监听窗口尺寸变化")]),v._v(" "),t("td",[v._v("App、微信小程序")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("onPullDownRefresh")]),v._v(" "),t("td",[v._v("监听用户下拉动作，一般用于下拉刷新")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("onReachBottom")]),v._v(" "),t("td",[v._v("页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("onTabItemTap")]),v._v(" "),t("td",[v._v("点击 tab 时触发，参数为Object，具体见下方注意事项")]),v._v(" "),t("td",[v._v("微信小程序、QQ小程序、支付宝小程序、百度小程序、H5、App")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("onShareAppMessage")]),v._v(" "),t("td",[v._v("用户点击右上角分享")]),v._v(" "),t("td",[v._v("微信小程序、QQ小程序、支付宝小程序、字节小程序、飞书小程序、快手小程序")]),v._v(" "),t("td")])])]),v._v(" "),t("p",[v._v("#组件生命周期")]),v._v(" "),t("p",[v._v("uni-app 组件支持的生命周期，与vue标准组件的生命周期相同。这里没有页面级的onLoad等生命周期：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("函数名")]),v._v(" "),t("th",[v._v("说明")]),v._v(" "),t("th",[v._v("平台差异说明")]),v._v(" "),t("th",[v._v("最低版本")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("beforeCreate")]),v._v(" "),t("td",[v._v("在实例初始化之后被调用。详见")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("created")]),v._v(" "),t("td",[v._v("在实例创建完成后被立即调用。详见")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("beforeMount")]),v._v(" "),t("td",[v._v("在挂载开始之前被调用。详见")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("mounted")]),v._v(" "),t("td",[v._v("挂载到实例上去之后调用。详见 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTickVue官方文档")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("beforeUpdate")]),v._v(" "),t("td",[v._v("数据更新时调用，发生在虚拟 DOM 打补丁之前。详见")]),v._v(" "),t("td",[v._v("仅H5平台支持")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("updated")]),v._v(" "),t("td",[v._v("由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。详见")]),v._v(" "),t("td",[v._v("仅H5平台支持")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("beforeDestroy")]),v._v(" "),t("td",[v._v("实例销毁之前调用。在这一步，实例仍然完全可用。详见")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("destroyed")]),v._v(" "),t("td",[v._v("Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。详见")]),v._v(" "),t("td"),v._v(" "),t("td")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
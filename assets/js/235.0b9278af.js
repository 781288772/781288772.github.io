(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{682:function(t,e,s){"use strict";s.r(e);var r=s(17),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"证书生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#证书生成"}},[t._v("#")]),t._v(" 证书生成")]),t._v(" "),s("p",[t._v("在生成证书之前，首先确保电脑中已经配好JRE环境")]),t._v(" "),s("p",[t._v("选择一个要存放证书的路径，打开powershell，输入一下命令生成证书")]),t._v(" "),s("p",[s("code",[t._v("keytool -genkey -alias christina -keyalg RSA -keysize 2048 -validity 36500 -keystore christina.keystore")])]),t._v(" "),s("ul",[s("li",[t._v("christina 是证书别名，可任意修改")]),t._v(" "),s("li",[t._v("christina.keystore 是证书文件名称")]),t._v(" "),s("li",[t._v("36500是证书有效时间，单位是天")])]),t._v(" "),s("p",[t._v("回车之后填写信息，最后输入y，回车之后就会在你刚刚选择的路径下生成证书")]),t._v(" "),s("h1",{attrs:{id:"查看证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看证书"}},[t._v("#")]),t._v(" 查看证书")]),t._v(" "),s("p",[t._v("输入一下命令，再输入刚刚设置的证书密码，就可以看到证书信息了")]),t._v(" "),s("p",[s("code",[t._v("keytool -list -v -keystore christina.keystore")])])])}),[],!1,null,null,null);e.default=a.exports}}]);
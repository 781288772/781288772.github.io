(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{523:function(s,e,t){"use strict";t.r(e);var a=t(21),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("p",[s._v("1.powerShell 7.x")]),s._v(" "),t("p",[s._v("2."),t("a",{attrs:{href:"https://scoop.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Scoop"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("如果出现")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("DownloadString”时发生异常:“未能解析此远程名称: 'raw.githubusercontent.com'”\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("只需要将 raw.githubusercontent.com 对应的ip地址接入到host中即可")]),s._v(" "),t("p",[s._v("3.一款你喜欢的"),t("a",{attrs:{href:"https://www.nerdfonts.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nerd Font"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"在上述软件-字体都安装好之后-你需要在-powershell-里执行一下策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在上述软件-字体都安装好之后-你需要在-powershell-里执行一下策略"}},[s._v("#")]),s._v(" 在上述软件/字体都安装好之后，你需要在 PowerShell 里执行一下策略")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Set-ExecutionPolicy RemoteSigned -Scope CurrentUser\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"之后-我们就可以开始我们的美化操作了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#之后-我们就可以开始我们的美化操作了"}},[s._v("#")]),s._v(" 之后，我们就可以开始我们的美化操作了")]),s._v(" "),t("h1",{attrs:{id:"安装-oh-my-posh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-oh-my-posh"}},[s._v("#")]),s._v(" 安装 oh-my-posh")]),s._v(" "),t("h2",{attrs:{id:"第一步是安装-oh-my-posh-我们可以简单地用-scoop-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步是安装-oh-my-posh-我们可以简单地用-scoop-安装"}},[s._v("#")]),s._v(" 第一步是安装 oh-my-posh，我们可以简单地用 Scoop 安装")]),s._v(" "),t("p",[t("code",[s._v("scoop install https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/oh-my-posh.json")])]),s._v(" "),t("h3",{attrs:{id:"我们安装的版本是-oh-my-posh-3-它能够给我们的-powershell-提供一个非常好看的样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我们安装的版本是-oh-my-posh-3-它能够给我们的-powershell-提供一个非常好看的样式"}},[s._v("#")]),s._v(" 我们安装的版本是 oh-my-posh 3，它能够给我们的 PowerShell 提供一个非常好看的样式")]),s._v(" "),t("h3",{attrs:{id:"终端样式可从官网查找-并替换scoop-apps-oh-my-posh-current-themes下的jandedobbeleer-omp-json-即可"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#终端样式可从官网查找-并替换scoop-apps-oh-my-posh-current-themes下的jandedobbeleer-omp-json-即可"}},[s._v("#")]),s._v(" 终端样式可从"),t("a",{attrs:{href:"https://ohmyposh.dev/docs/themes",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1),s._v("查找，并替换scoop\\apps\\oh-my-posh\\current\\themes下的jandedobbeleer.omp.json 即可")]),s._v(" "),t("h3",{attrs:{id:"下一步打开power-shell-按下快捷键-ctrl-shift-打开终端配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下一步打开power-shell-按下快捷键-ctrl-shift-打开终端配置文件"}},[s._v("#")]),s._v(" 下一步打开power shell 按下快捷键（ctrl+shift+，）打开终端配置文件")]),s._v(" "),t("h3",{attrs:{id:"在配置文件中添加如下代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在配置文件中添加如下代码"}},[s._v("#")]),s._v(" 在配置文件中添加如下代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(' {\n            "profiles":\n            {\n                "defaults":\n                {\n                    "fontFace": "JetBrainsMono NF"\n                }\n            }\n }\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("注：fontFace 处填写你之前下载字体的名称")]),s._v(" "),t("h1",{attrs:{id:"最后再次打开终端-你会发现终端美化已经起效了。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后再次打开终端-你会发现终端美化已经起效了。"}},[s._v("#")]),s._v(" 最后再次打开终端，你会发现终端美化已经起效了。")]),s._v(" "),t("h1",{attrs:{id:"vscode-设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode-设置"}},[s._v("#")]),s._v(" vscode 设置")]),s._v(" "),t("h2",{attrs:{id:"打开vscode设置-搜索terminal-将font-family-设置为你所下载的字体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打开vscode设置-搜索terminal-将font-family-设置为你所下载的字体"}},[s._v("#")]),s._v(" 打开vscode设置，搜索terminal，将Font Family 设置为你所下载的字体")])])}),[],!1,null,null,null);e.default=r.exports}}]);
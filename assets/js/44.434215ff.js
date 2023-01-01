(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{373:function(s,a,e){"use strict";e.r(a);var t=e(3),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_2022-年最受瞩目的新特性-css-layer-到底是个啥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2022-年最受瞩目的新特性-css-layer-到底是个啥"}},[s._v("#")]),s._v(" 2022 年最受瞩目的新特性 CSS @layer 到底是个啥？")]),s._v(" "),a("p",[s._v("步入 2022，CSS 的新特性层出不穷，而最近在 CSS 圈最受瞩目的新特性，非 CSS @layer 莫属。")]),s._v(" "),a("p",[s._v("本文，将用最简洁的语言，快速让读者们搞懂，到底什么是 CSS @layer 新规范。")]),s._v(" "),a("h2",{attrs:{id:"过往-css-优先级中存在的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过往-css-优先级中存在的问题"}},[s._v("#")]),s._v(" 过往 CSS 优先级中存在的问题")]),s._v(" "),a("p",[s._v("如果我们的页面上存在非常多的样式，譬如有我们开发页面的时候的自定义样式，也有引入的组件库样式。这时候样式将会非常混乱难以管理。")]),s._v(" "),a("p",[s._v("当我们想覆盖一些本身非我们书写的样式时候，往往不得不通过使用优先级权重更高的样式名，去覆盖那些样式。")]),s._v(" "),a("p",[s._v("同时，当样式优先级感到难以控制时，开发者习惯滥用 !important 去解决，这又循环导致了后续更混乱的样式结构。")]),s._v(" "),a("p",[s._v("基于让 CSS 得到更好的控制和管理的背景，CSS @layer 应运而生。")]),s._v(" "),a("h2",{attrs:{id:"何为-css-layer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何为-css-layer"}},[s._v("#")]),s._v(" 何为 CSS @layer？")]),s._v(" "),a("p",[s._v("CSS @layer 从 CSS Cascading and Inheritance Level 5[1] 被规范定义。")]),s._v(" "),a("p",[s._v("何为 CSS @layer？简单而言，CSS[2] @规则[3] 中的@layer声明了一个 级联层， 同一层内的规则将级联在一起， 这给予了开发者对层叠机制的更多控制。")]),s._v(" "),a("p",[s._v("语法也非常简单，看这样一个例子：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@layer")]),s._v(" utilities")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 创建一个名为 utilities 的级联层 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这样，我们就创建一个名为 utilities 的 @layer 级联层。")]),s._v(" "),a("p",[s._v("@layer 级联层如何使用呢？")]),s._v(" "),a("h2",{attrs:{id:"通过-layer-级联层管理样式优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-layer-级联层管理样式优先级"}},[s._v("#")]),s._v(" 通过 @layer 级联层管理样式优先级")]),s._v(" "),a("p",[s._v("@layer 级联层最大的功能，就是用于控制不同样式之间的优先级。")]),s._v(" "),a("p",[s._v("看下面这样一个例子，我们定义了两个 @layer 级联层 A 和 B：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<div></div>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("div {\n    width: 200px;\n    height: 200px;\n}\n@layer A {\n    div {\n        background: blue;\n    }\n}\n@layer B {\n    div {\n        background: green;\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("由于 @layer B 的顺序排在 @layer A 之后，所以 @layer B 内的所有样式优先级都会比 @layer A 高，最终 div 的颜色为 green")]),s._v(" "),a("p",[s._v("CSS @layer 的诞生，让我们有能力更好的划分页面的样式层级，更好的处理内部样式与外部引用样式的优先级顺序，属于比较重大的一次革新。")]),s._v(" "),a("p",[s._v("同时，它也让我们意识到要逐渐摒弃大规模使用 !important 去覆盖样式优先级的错误做法，避免许多因为优先级问题带来的不必要的副作用。")])])}),[],!1,null,null,null);a.default=n.exports}}]);
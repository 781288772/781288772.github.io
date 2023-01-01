(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{378:function(n,e,s){"use strict";s.r(e);var a=s(3),i=Object(a.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("介绍")]),n._v(" "),e("p",[n._v("众所周知，在JavaScript 语言中，一个没有被赋值的变量会有个默认值  undefined ，而 undefined  作为全局对象的一个属性经常会用作一些赋值返回，逻辑判断等业务场景中。可本期要说的是，尽量不要直接去拼写 undefined 了，因为那是不太严谨的行为，可能出现很多意外情况。")]),n._v(" "),e("p",[n._v("原因")]),n._v(" "),e("p",[n._v("我们经常在判断某个变量是否等于 undefined ，如下：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function test(value) {\n  if (value === undefined) {\n    return `value is undefined`;\n  }\n  return `value is not undefined`;\n}\nlet value;\ntest(value);  // 'value is undefined'\n\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br")])]),e("p",[n._v("这样看上去没有什么毛病，而且 window.undefined 的 writable 为 false 这意味着它是只读的没发写入修改，你在 window 下，修改 undefined 也是无济于事。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('undefined = "hello world";\nconsole.log(undefined); // undefined\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[n._v("对这样是没错，看似万无一失。但是还有一种情况没有考虑到，那就是 undefined 它是 window 对象的一个全局属性，那么我们可以局部也起一个也叫 undefined 的变量给它赋值，那么问题就来了。如下：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function test(value) {\n  let undefined = \"hello world\";\n  if (value === undefined) {\n    return `value is undefined`;\n  }\n  return `value is not undefined`;\n}\nlet value;\ntest(value);  // 'value is not undefined'\n\n\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br")])]),e("p",[n._v("我们可以看到验证入参是否是 undefined 的方法就出现了bug。因为，我们把 undefined 赋了一个新值，在这个作用域下找到的所有 undefined 都是那个新的值，这样我们就没法通过这种方式去验证判断 undefined 了。")]),n._v(" "),e("p",[n._v("解决")]),n._v(" "),e("p",[n._v("不卖关子了，我们通常会用 void 0 或者 void(0) 来去直接替代 undefined ，因为他返回的也是 undefined 。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function test(value) {\n  let undefined = \"hello world\";\n  if (value === void 0) {\n    return `value is undefined`;\n  }\n  return `value is not undefined`;\n}\nlet value;\ntest(value);  // 'value is undefined'\n\n\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br")])]),e("p",[n._v("void 运算符是对给定的表达式进行求值，然后返回 undefined 。而且， void 是不能重新定义的，不然会报语法错误，这样也保证了用 void 来代替 undefined 的不会出现被重定义而造成的bug。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function func() { \n    var void = function() {}; \n    return void(0); \n}\n// Uncaught SyntaxError: Unexpected token 'void'\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("p",[n._v("结语")]),n._v(" "),e("p",[n._v("其实在很早之前，很多大厂的前端规范都会写到用 void 0 去代替 undefined 作为准则，去防止一些意外发生。对于大型项目来说，这点严谨也是值得考虑的。\nPS：随着前端工程化的推进，打包和校验时都会规避掉这个问题，但我们依然要认识到这个写法背后的原因，养成习惯，虽然后面遇到的可能性概率几乎为0。")])])}),[],!1,null,null,null);e.default=i.exports}}]);
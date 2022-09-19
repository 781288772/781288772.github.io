(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{604:function(e,s,t){"use strict";t.r(s);var r=t(4),n=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Request")]),e._v(" "),s("p",[e._v("处理程序有时需要访问客户端的请求细节。Nest 提供了对底层平台（默认为 Express）的请求对象（request）的访问方式。我们可以在处理函数的签名中使用 @Req() 装饰器，指示 Nest 将请求对象注入处理程序。")]),e._v(" "),s("div",{staticClass:"language-node line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/* cats.controller.ts */\n\nimport { Controller, Get, Req } from '@nestjs/common';\nimport { Request } from 'express';\n\n@Controller('cats')\nexport class CatsController {\n  @Get()\n  findAll(@Req() request: Request): string {\n    return 'This action returns all cats';\n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("为了在 express 中使用 Typescript （如 request: Request 上面的参数示例所示），请安装 @types/express 。")]),e._v(" "),s("p",[e._v("Request 对象代表 HTTP 请求，并具有查询字符串，请求参数参数，HTTP 标头（HTTP header） 和 正文（HTTP body）的属性（在这里阅读更多）。在多数情况下，不必手动获取它们。 我们可以使用专用的装饰器，比如开箱即用的 @Body() 或 @Query() 。 下面是 Nest 提供的装饰器及其代表的底层平台特定对象的对照列表")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("装饰器")]),e._v(" "),s("th",[e._v("对象")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("@Request()，@Req()")]),e._v(" "),s("td",[e._v("req")])]),e._v(" "),s("tr",[s("td",[e._v("@Response()，@Res()*")]),e._v(" "),s("td",[e._v("res")])]),e._v(" "),s("tr",[s("td",[e._v("@Next()")]),e._v(" "),s("td",[e._v("next")])]),e._v(" "),s("tr",[s("td",[e._v("@Session()")]),e._v(" "),s("td",[e._v("req.session")])]),e._v(" "),s("tr",[s("td",[e._v("@Param(key?: string)")]),e._v(" "),s("td",[e._v("req.params/req.params[key]")])]),e._v(" "),s("tr",[s("td",[e._v("@Body(key?: string)")]),e._v(" "),s("td",[e._v("req.body/req.body[key]")])]),e._v(" "),s("tr",[s("td",[e._v("@Query(key?: string)")]),e._v(" "),s("td",[e._v("req.query/req.query[key]")])]),e._v(" "),s("tr",[s("td",[e._v("@Headers(name?: string)")]),e._v(" "),s("td",[e._v("req.headers/req.headers[name]")])]),e._v(" "),s("tr",[s("td",[e._v("@Ip()")]),e._v(" "),s("td",[e._v("req.ip")])]),e._v(" "),s("tr",[s("td",[e._v("@HostParam()")]),e._v(" "),s("td",[e._v("req.hosts")])])])]),e._v(" "),s("p",[e._v("为了与底层 HTTP 平台（例如，Express 和 Fastify）之间的类型兼容， Nest 提供了 @Res()和 @Response() 装饰器。@Res() 只是 @Response() 的别名。两者都直接暴露了底层平台的 response 对象接口。在使用它们时，您还应该导入底层库的类型声明（如：@types/express）以充分利用它们。需要注意的是，在请求处理函数中注入 @Res()或 @Response() 时，会将 Nest 置于该处理函数的特定于库（Library-specific mode）的模式下，并负责管理响应。这样做时，必须通过调用 response 对象（例如，res.json(…) 或 res.send(…)）发出某种响应，否则 HTTP 服务器将挂起。")])])}),[],!1,null,null,null);s.default=n.exports}}]);
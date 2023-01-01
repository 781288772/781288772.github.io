(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{362:function(t,s,v){"use strict";v.r(s);var a=v(3),_=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"导读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导读"}},[t._v("#")]),t._v(" 导读")]),t._v(" "),s("p",[t._v('2021 年，Web 开发整体上仍然处于比较低效的状态，各种开发，部署工具仍未很好的收敛，开发者仍然要面对选择框架，选择各种库，选择部署方式，沟通前后端接口等，一个完整的 Web 应用开发会牵扯很多不同的工种，而不同分工之间的协作却是很低效的，本文旨在能够很好的梳理当下 Web 开发的 "困局"，以及我们通过何种方式，能够走出这些困局，解放生产力，希望能给未来的工具发展给出一定的预测和启发。')]),t._v(" "),s("h1",{attrs:{id:"困境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#困境"}},[t._v("#")]),t._v(" 困境")]),t._v(" "),s("h2",{attrs:{id:"设计-前端协作困境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计-前端协作困境"}},[t._v("#")]),t._v(" 设计/前端协作困境")]),t._v(" "),s("p",[t._v("在实际的 Web 开发中，UI/UX 的工作与前端的工作事实上是在两个完全割裂的环境中进行的，比如，UI 会在 Figma 中完成页面与组件的设计，而前端则是根据设计好的原型图，在代码环境中去复现原型图，这其中就出现了几个协作问题。我把它简要总结成四个问题：")]),t._v(" "),s("p",[t._v("1.应该先设计再开发，还是先开发再设计？（Dev First or Design First？）\n2.如果说设计的原型图是前端开发的上游，那前端应该如何更高效地获取设计的上游更新？\n3.设计图中藏有很多可复用的概念与元素，如何很好的传达给前端？\n4.前端工程师是否有义务参与纯样式的开发？既然 UI 已经完成了样式的设计，为什么前端仍然需要重新实现一遍？")]),t._v(" "),s("p",[t._v("下面我们逐个讨论这些问题，之后给出可能的解决方案。")]),t._v(" "),s("p",[t._v("Dev First Or Design First？")]),t._v(" "),s("p",[t._v("先来讨论第一个问题，这是一个困扰了我很久的问题，在之前的工作经验中，我的处理方式往往是，以功能为主的组件，先开发，再设计（比如富文本编辑器），以展示为主的，先设计，再开发，但是实际的协作仍然会出现很多问题：")]),t._v(" "),s("p",[t._v("Dev First：先开发再设计，往往前端程序员需返工 （比如原来调的现成组件现在不能直接用了，需要自己重新写一个），降低前端程序员工作体验，而在设计图不稳定的时候，前端会反复地 follow 设计图的改动，降低前端程序员的工作体验，有时甚至会引发员工间的矛盾。")]),t._v(" "),s("p",[t._v("Design First：设计对组件逻辑理解较为模糊，难以涵盖组件所有状态的样式，而为了枚举或描述组件的所有可能状态，常常过于繁琐，会有很多长得很像的重复原型图，而缺斤短两的原型图，也容易影响前端工程师的工作体验，甚至会提升责任推卸的可能性 （前端觉得有些组件状态设计图没有给到，就停工了，将责任推卸给 UI）。")]),t._v(" "),s("p",[t._v("之后我们可以看到，如果不改变协作模式和工具，这个 dilemma 是无法消除的。")]),t._v(" "),s("h2",{attrs:{id:"前端应该如何更高效地获取设计的上游更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端应该如何更高效地获取设计的上游更新"}},[t._v("#")]),t._v(" 前端应该如何更高效地获取设计的上游更新？")]),t._v(" "),s("p",[t._v("设想这样一个场景，公司有一个完整的设计团队，它们有时会更新一些组件的图标，当这些图标得到更新后，设计团队可能会手动通知前端工程师，前端工程师再下载到新的 icon 文件，将该文件放入仓库的 src/assets 下，再 push 代码，触发流水线，部署完毕后，icon 得到更新。")]),t._v(" "),s("p",[t._v("上述的过程显然是十分低效的，设想这样一种情形，全公司有上百个网站，几乎每个网站都用到了公司的 logo，但绝大多数网站都是将该 logo 放入 src/assets 这样的形式来部署的，那么当公司更新 logo 的时候，就需要所有代码仓库都更新该 logo，浪费很多团队，很多人的时间，并且更重要的是，公司 logo 的全量更新成为了一个漫长的过程。")]),t._v(" "),s("p",[t._v("除了上面这个例子外，还有很多例子，比如设计经常会给原型图做一些修改，每次修改后，如果我们希望足够敏捷，那 UI 就会当场通知前端，前端再打开 Figma 之类的软件和 VSCode 等开发工具，完成了更改 （更多时候，前端还需要仔细检查到底是哪里更改了，有时需要和 UI 进行同步沟通），在这个场景下，前端像是被 UI 牵着鼻子走的工种，长此以往，前端会觉得自己的工作没有价值，引发更深层次的问题。")]),t._v(" "),s("p",[t._v("那为了防止这样的现象，我们索性牺牲敏捷性，每个月迭代一版，前端统一更新 UI，但这样又抛弃了 Web 的优势之一：用户使用的应用永远都是最新的，在讲究快速迭代的环境中，这种方式越来越少见，一个例子就是现在越来越多的 Web 应用忽略了 版本号 这个概念，因为只要能够很好的追踪 commit history，并规范好 commit message，版本号 这个概念其实也已经变得比较鸡肋，它更多是桌面时代的产物。")]),t._v(" "),s("h2",{attrs:{id:"设计图中可复用的概念与元素-如何很好的传达给前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计图中可复用的概念与元素-如何很好的传达给前端"}},[t._v("#")]),t._v(" 设计图中可复用的概念与元素，如何很好的传达给前端？")]),t._v(" "),s("p",[t._v("成熟的设计团队，往往会给有自己的设计系统，会在团队内部沉淀一些复用的概念与元素出来，比如，规定所有卡片组件的 box-shadow 都是同一种格式，规定调色板的基础色号有哪几种，字体大小有哪几级，但这些信息往往并不能在原型图层面很好的展现出来，而 UI 也很少会将这些概念很好的传达给前端，前端也觉得自己没有义务理解这些设计层面的概念，进一步加深了两个工种的分裂。")]),t._v(" "),s("p",[t._v("UI/UX 和 前端工程师之间的概念往往并不互通，而互相也觉得自己并没有义务去了解对方专业中的知识，但日常的协作又有极多的的深度交织，UI/UX 是最了解设计里面的逻辑和复用的，但真正实现逻辑和复用的却是前端工程师。这种职能的错配和重叠是问题的根源所在")]),t._v(" "),s("p",[t._v("设想这样一个情景：一个 Web 应用起初的设计，并未把主题色更换考虑在内，而 UI 团队内部有基础调色板，很多组件都共用一些基础色号，但并未在原型图中展示这些信息，事实上前端工程师也不关心这些，这就导致了几乎所有前端代码中，组件的颜色都是 hardcoded 的，并未体现出逻辑性和复用性，然后过了两个月，UI 团队决定支持主题色更换，于是前端团队又面临着巨量的体力活。")]),t._v(" "),s("h2",{attrs:{id:"既然-ui-已经完成了样式的设计-为什么前端仍然需要重新实现一遍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#既然-ui-已经完成了样式的设计-为什么前端仍然需要重新实现一遍"}},[t._v("#")]),t._v(" 既然 UI 已经完成了样式的设计，为什么前端仍然需要重新实现一遍？")]),t._v(" "),s("p",[t._v("设计师给出原型图，前端再实现一遍，这很契合我们往常的经验，但是仔细思考会发现这是很荒诞的，这就像游戏行业的 建模师 建好了人物模型后，游戏开发者竟然还需要在游戏中重新实现一遍模型。")]),t._v(" "),s("p",[t._v("设备的尺寸布局，responsive 排版方式，这些层面的设计，按理来说应该由 UI/UX 来把控，可事实上却是由前端工程师把控的，前端工程师似乎承担了太多设计层面的 实现任务。")]),t._v(" "),s("p",[t._v("就像上文提到的，造成这四个 UI/前端 的协作困局，根本原因在于 职能的错配和重叠，两个工种深度耦合，互相牵制")]),t._v(" "),s("h1",{attrs:{id:"数据交互困境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据交互困境"}},[t._v("#")]),t._v(" 数据交互困境")]),t._v(" "),s("p",[t._v("桌面应用诞生的最早期，客户端是可以直接连接数据库的，在当时，关于怎样获取数据，怎样存数据的逻辑，是放在客户端负责的，之后 Web 的发展，让更多的逻辑放在了后端，后端负责连接数据库，并且将更简单规范的 HTTP （以 Restful 为代表） 请求转换成对应的 SQL 等数据库语句，在后端完成和数据库的交互 （此处的数据库指广义的数据库，可能包含各种中间件，各种形式的存储等），前端只需要消费这些简单的接口即可，看起来是降低了前端的负担 （无需思考如何和后端的数据库等服务交互，后端已经封装好了）。")]),t._v(" "),s("p",[t._v("但在实际的业务场景下，以 Restful[1] 为主的这种后端 API 思路仍然出现了很多问题，我们发现实际的前端场景下，前端往往需要对数据有更精细的控制：")]),t._v(" "),s("p",[t._v("试想这样一个情景：前端显示一个评论列表，这里只用到了每个人的头像和昵称，但是后端提供的 profile 接口却会连着其它的手机号，个性签名等等一系列信息全部返回了，这个时候后端就返回了很多无用信息。")]),t._v(" "),s("p",[t._v("上面的场景说明，如果后端将用于操纵数据的接口封装的抽象层级过高，会出现无法满足前端的灵活使用的问题，除此之外还有处理一对多关系，比如一个班级里面包含很多学生，students 是 class 的一个属性，那使用 GET 请求请求 class 的时候，是否应该返回它的子属性 students 呢？如果前端希望能够控制，那往往又需要引入新的 query parameter 来控制，这又增加了协商成本和文档成本。")]),t._v(" "),s("p",[t._v("基于 Restful 的开发模式，实际体验往往是前端仍然需要去看接口文档，为了让接口有灵活性，需要引入很多自定义的 query params，由于接口本身的灵活性差，导致前端程序员需要思考使用什么样的顺序和方式调用接口，才能实现一个功能，很多时候前端需要被迫拼接，堆积接口调用，甚至会出现在前端手动递归调用后端接口获得一个树状文件夹数据这种现象，可见这种方式是有很大问题的。")]),t._v(" "),s("p",[t._v("除此之外，普通的后端 CRUD 接口，本身的实现很简单，但是由于前后端分离，语言也可能不同，导致前端遇到接口问题时，必须要和后端协商，后端再做出改动，真实情况是 让前端去学习后端 CRUD，并且直接对后端做出改动，比前端和后端协商来的效率高，根本原因第一在于 Restful 本身的灵活性问题，其次在于简单的后端查询业务由于和前端的业务深度耦合，这部分工作应该收敛到一个工种上，并且考虑到传统的后端 CRUD 的代码很大程度可以自动生成，")]),t._v(" "),s("p",[t._v("所以我们接下来要做的事可以总结为：把常规的后端业务实现的任务收敛到前端工种，并且通过更好的 API + SDK + P/F/SaaS 让常规的后端业务尽可能自动化+服务化，从而淘汰掉传统的后端 CRUD 工种，提升整个系统的效率。")]),t._v(" "),s("p",[t._v("回过头来想一下，如果后端希望暴露给前端一个安全的操纵数据的接口，使用 HTTP Path + Method 的这种方式显然不够强，关于数据关系模型是一个关于集合的数学理论，它在数学中一开始的描述方式是使用 关系代数[2] 这样的语言描述的，基于树状关系（HTTP Path 是一种树状的命名空间） + 方法（Get Post Delete Put 等） 的描述方式过弱，远远无法支撑实际的数据操作，")]),t._v(" "),s("p",[t._v("但直接使用 SQL 语言，一方面是安全性的问题（可以通过代理+一些权限验证方式解决，不是问题的关键），一方面是 SQL 语言这种模式和前端的语言环境太过割裂，前端被迫进行字符串拼接，与之相对的是 MongoDB 的查询语言，其和 javascript 语言的贴合度较之 SQL 要好很多，前端程序员可以用很自然的方式写出一个查询语句。")]),t._v(" "),s("p",[t._v("与此同时，基于 Restful 这样的模式，让很多的后端代码变成了非常简单的 CRUD 代码，很多代码就是为了将 restful 接口转化成 SQL 语句，大量的时间被耗费在了这些无聊的事情上，降低了开发效率，这些简单的操作应该被自动化。")]),t._v(" "),s("h1",{attrs:{id:"构建困境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建困境"}},[t._v("#")]),t._v(" 构建困境")]),t._v(" "),s("p",[t._v("DevOps 平台是一个资源消耗大户：每当应用仓库的 release 分支发生 commit 的时候，往往就会触发流水线的测试，构建，部署等一系列运维操作，而目前的生态，前端的构建涉及到依赖的拉取，依赖图分析，打包依赖，打包产物优化等步骤。")]),t._v(" "),s("h1",{attrs:{id:"代码管理困境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码管理困境"}},[t._v("#")]),t._v(" 代码管理困境")]),t._v(" "),s("p",[t._v("没有包管理的时代，人们的应用都包含了全部代码，有了包管理后，人们倾向于每个包都有自己独立的 git 仓库来管理，但是有时候又想将一些包放在一起来开发，于是又有了 monorepo")])])}),[],!1,null,null,null);s.default=_.exports}}]);
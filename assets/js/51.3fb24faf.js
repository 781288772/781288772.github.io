(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{378:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("程序员都知道的 Vuex 的小技巧，超好用")]),s._v(" "),a("p",[s._v("当访问某个数据项嵌套太深了，优化一下访问的方式")]),s._v(" "),a("p",[s._v("我相信每一个程序员都会使用vuex吧,首先我承认vuex真的超好用,尤其是在项目特别大的时候,代码会看起来非常的简洁,也方便维护,但是项目大了,vuex的公共数据的嵌套也会越来越深,在组件中使用的时候就会像下面这张图一样,我要一直点啊点,才能拿到最里面的数据,项目大了点都要点老半天......")]),s._v(" "),a("p",[s._v("在我的不断尝试中,成功的发现了,vuex其实有一个辅助函数map可以解决这个问题,下面就把我总结到的语法分享给大家啦~希望可以帮到你")]),s._v(" "),a("p",[s._v("辅助函数map作用：简化使用state, getters, mutatioins, actions")]),s._v(" "),a("p",[s._v("1.mapState的使用步骤")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 1. 导入辅助函数mapState，它是在vuex中定义的一个工具函数。\n//  es6 按需导入 import { mapState } from 'vuex' \nimport { mapState } from 'vuex'\n\ncomputed: {\n   // 说明1：...对象 是把对象展开，合并到computed\n   // 说明2：mapState是一个函数 \n   //  ['数据项1'， '数据项2']\n   ...mapState(['xxx'])，\n   ...mapState({'新名字': 'xxx'})\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("2.使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("script:   this.xxx\n模板:     {{xxx}}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("原理")]),s._v(" "),a("p",[s._v("1.mapState是辅助函数，将vuex中的数据投射到组件内部；\n2.computed:{ ...mapState() } 这里的...是对象的展开运算符，整体来看是对象的合并。")]),s._v(" "),a("p",[s._v("如果vuex中的数据与本组件内的数据名相同,怎么办呢?")]),s._v(" "),a("p",[s._v("辅助函数mapState对数据重命名")]),s._v(" "),a("p",[s._v("...mapState({'新名字': 'xxx'})")]),s._v(" "),a("p",[s._v("使用全局state")]),s._v(" "),a("p",[s._v("直接使用：this.$store.state.xxx;")]),s._v(" "),a("p",[s._v("map辅助函数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("computed: { \n  // 省略其他计算属性\n  ...mapState(['xxx']), \n  ...mapState({'新名字': 'xxx'})\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("那如果是分模块化呢?如何使用modules中的state?")]),s._v(" "),a("p",[s._v("直接使用： this.$store.state.模块名.xxx;")]),s._v(" "),a("p",[s._v("map辅助函数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("computed: { \n  ...mapState('模块名', ['xxx']), \n  ...mapState('模块名', {'新名字': 'xxx'})\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用全局getters")]),s._v(" "),a("p",[s._v("直接使用：this.$store.getters.xxx")]),s._v(" "),a("p",[s._v("map辅助函数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("computed: { \n  ...mapGetters(['xxx']), \n  ...mapGetters({'新名字': 'xxx'})\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用modules中的getters")]),s._v(" "),a("p",[s._v("直接使用： this.$store.getters.模块名.xxx")]),s._v(" "),a("p",[s._v("map辅助函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("computed: { \n  ...mapGetters('模块名', ['xxx']), \n  ...mapGetters('模块名',{'新名字': 'xxx'})\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用全局mutations")]),s._v(" "),a("p",[s._v("直接使用：this.$store.commit('mutation名', 参数)")]),s._v(" "),a("p",[s._v("map辅助函数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("methods: { \n  ...mapMutations(['mutation名']), \n  ...mapMutations({'新名字': 'mutation名'})\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用modules中的mutations（namespaced:true）")]),s._v(" "),a("p",[s._v("直接使用： this.$store.commit('模块名/mutation名', 参数)")]),s._v(" "),a("p",[s._v("map辅助函数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("methods: {\n...mapMutations('模块名', ['xxx']),\n...mapMutations('模块名',{'新名字': 'xxx'})\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用全局actions")]),s._v(" "),a("p",[s._v("直接使用：this.$store.dispatch('action名', 参数)")]),s._v(" "),a("p",[s._v("map辅助函数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("methods: {\n...mapActions(['actions名']),\n...mapActions({'新名字': 'actions名'})\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用modules中的actions（namespaced:true）")]),s._v(" "),a("p",[s._v("直接使用： this.$store.dispatch('模块名/action名', 参数)")]),s._v(" "),a("p",[s._v("map辅助函数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("methods: {\n...mapActions('模块名', ['xxx']),\n...mapActions('模块名',{'新名字': 'xxx'})\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("如果namespaced为true，则需要额外去补充模块名\n如果namespaced为false，则不需要额外补充模块名")])])}),[],!1,null,null,null);a.default=n.exports}}]);
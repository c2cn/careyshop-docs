(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{379:function(t,s,a){"use strict";a.r(s);var n=a(25),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"接口版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口版本"}},[t._v("#")]),t._v(" 接口版本")]),t._v(" "),a("p",[t._v("Api 接口调用控制器默认占用 v1 版本号，在二次开发中您都应该另起一个版本号进行新增或修改。")]),t._v(" "),a("p",[t._v("下面将举例对"),a("code",[t._v("App")]),t._v("控制器进行「新增接口」和「修改接口」的操作：")]),t._v(" "),a("p",[a("strong",[t._v("[ 新增接口 ]")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在"),a("code",[t._v("application\\api\\controller")]),t._v("目录下新建"),a("code",[t._v("v2")]),t._v("目录。")])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v("v2")]),t._v("目录下创建控制器类"),a("code",[t._v("App")]),t._v("，文件名为"),a("code",[t._v("App.php")]),t._v("，并且继承于"),a("code",[t._v("\\app\\api\\controller\\v1\\App")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("v2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * 方法路由器\n    * @access protected\n    * @return array\n    */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加一个广告")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'test.app.item'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'testAppItem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testAppItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'v2新增接口调用成功'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("li",[a("p",[t._v("调用并测试接口："),a("code",[t._v("http://localhost:8080/api/v2/app/method/test.app.item")]),t._v("，返回请求结果。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v2新增接口调用成功"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("如果不是对已有接口进行操作而是新建的话，则应该继承"),a("code",[t._v("\\app\\api\\controller\\CareyShop")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("v2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CareyShop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NewApi")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CareyShop")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 方法路由器\n     * @access protected\n     * @return array\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),a("p",[a("strong",[t._v("[ 修改接口 ]")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在"),a("code",[t._v("application\\api\\controller")]),t._v("目录下新建"),a("code",[t._v("v2")]),t._v("目录。")])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v("v2")]),t._v("目录下创建控制器类"),a("code",[t._v("App")]),t._v("，文件名为"),a("code",[t._v("App.php")]),t._v("，并且继承于"),a("code",[t._v("\\app\\api\\controller\\CareyShop")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("修改控制器方法路由，以"),a("code",[t._v("命名空间")]),t._v("的方式指向待新建的模型。")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("v2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CareyShop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NewApi")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CareyShop")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 方法路由器\n     * @access protected\n     * @return array\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取应用列表")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'get.app.list'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'getAppList'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'app\\api\\model\\App'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("li",[a("p",[t._v("新建一个模型后继承"),a("code",[t._v("\\app\\common\\model\\CareyShop")]),t._v("，或继承被修改的模型。")]),t._v(" "),a("blockquote",[a("p",[t._v("之所以新建一个模型是不建议对框架的模型进行改动，用新建或继承模型的方式比较稳妥。")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CareyShop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CareyShop")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * 获取应用列表\n     * @access public\n     * @param  array $data 外部数据\n     * @return bool\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAppList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'修改后的接口'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("li",[a("p",[t._v("调用并测试接口："),a("code",[t._v("http://localhost:8080/api/v2/app/method/get.app.list")]),t._v("，返回请求结果。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"修改后的接口"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("确认 v1 版本号的接口是否也正常："),a("code",[t._v("http://localhost:8080/api/v1/app/method/get.app.list")]),t._v("，返回请求结果。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"app_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"app_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("p",[a("strong",[t._v("备注：")]),t._v("\n在示例中"),a("code",[t._v("方法路由器")]),t._v("的具体使用可以查阅，"),a("RouterLink",{attrs:{to:"/guide/controller/",title:"接口控制器"}},[t._v("接口控制器")]),t._v("。")],1)])}),[],!1,null,null,null);s.default=p.exports}}]);
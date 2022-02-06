(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{479:function(t,a,s){"use strict";s.r(a);var r=s(56),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自定义语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义语言"}},[t._v("#")]),t._v(" 自定义语言")]),t._v(" "),s("blockquote",[s("p",[t._v("本章前置知识：")]),t._v(" "),s("p",[t._v("​\t"),s("RouterLink",{attrs:{to:"/vanilla/more-assets.html"}},[t._v("额外的资源文件")])],1),t._v(" "),s("p",[t._v("​\t"),s("a",{attrs:{href:"https://www.runoob.com/json/json-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON的基本语法"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"修改现有的语言文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改现有的语言文件"}},[t._v("#")]),t._v(" 修改现有的语言文件")]),t._v(" "),s("p",[t._v("如果你不知道怎么做，甚至还头疼原版资源包里怎么只有英语语言文件的话，看看本章前置知识。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("从1.13起，语言文件的格式从lang（本质properties格式）变成了json格式。")])]),t._v(" "),s("h2",{attrs:{id:"如何添加一门语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何添加一门语言"}},[t._v("#")]),t._v(" 如何添加一门语言")]),t._v(" "),s("p",[t._v("Minecraft 是支持添加新语言的，在"),s("a",{attrs:{href:"https://minecraft-zh.gamepedia.com/%E8%B5%84%E6%BA%90%E5%8C%85#.E5.86.85.E5.AE.B9",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("有专业的说明。")]),t._v(" "),s("p",[t._v("pack.memeta 编写示例：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_format"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"添加自定义语言"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"language"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"my_lang"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//语言的编号，也就是语言文件的名字，例如简体中文是 "zh_cn"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"语言的完整名称"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"国家或地区名称"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bidirectional"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//若为true，语言将会从右到左显示。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("ol",[s("li",[t._v("务必注意 json 的语法，"),s("code",[t._v("pack.mcmeta")]),t._v(" 的格式不正确的话，可能连资源包都无法加载，在 1.13 以上的版本中，语言文件也使用 json 格式，同样需要注意语法。")]),t._v(" "),s("li",[t._v("json规范本身是不支持注释的，请不要把注释也抄上。我在这里添加注释只是为了方便解说。")]),t._v(" "),s("li",[t._v("语言文件中 "),s("code",[t._v("language.code")]),t._v("，"),s("code",[t._v("language.name")]),t._v("，"),s("code",[t._v("language.region")]),t._v(" 三个键对应的值需要和 "),s("code",[t._v("pack.mcmeta")]),t._v("中的一致。")])])]),t._v(" "),s("h2",{attrs:{id:"拓展阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://minecraft-zh.gamepedia.com/%E8%AF%AD%E8%A8%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minecraft中文wiki：语言"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://www.mcbbs.net/thread-997830-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("制作自定义语言包：从入门到入完门"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"圈内笑话"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#圈内笑话"}},[t._v("#")]),t._v(" 圈内笑话")]),t._v(" "),s("p",[t._v("拆包 1.3.1 的 jar 文件，在 lang 文件夹中找到 zh_CN.lang（那时候中文语言文件是被包装在 jar 里的，文件名还允许大写字母）")]),t._v(" "),s("p",[t._v("第 559 行：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("item.diode.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("雷石东直放站")]),t._v("\n")])])]),s("p",[t._v("这一版本的语言文件还有一些十分有趣的翻译，感兴趣可以自己查看")]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://www.mcbbs.net/thread-40209-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minecraft中文WIKI关于1.3.1中部分译名错乱的说明"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);
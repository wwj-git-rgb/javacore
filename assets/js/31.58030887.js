(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{453:function(t,a,s){"use strict";s.r(a);var n=s(19),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"深入理解-java-string-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入理解-java-string-类型"}},[t._v("#")]),t._v(" 深入理解 Java String 类型")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("📦 本文以及示例源码已归档在 "),s("a",{attrs:{href:"https://github.com/dunwu/javacore/",target:"_blank",rel:"noopener noreferrer"}},[t._v("javacore"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("String 类型可能是 Java 中应用最频繁的引用类型，但它的性能问题却常常被忽略。高效的使用字符串，可以提升系统的整体性能。当然，要做到高效使用字符串，需要深入了解其特性。")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#1-string-%E7%9A%84%E4%B8%8D%E5%8F%AF%E5%8F%98%E6%80%A7"}},[t._v("1. String 的不可变性")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#2-string-%E7%9A%84%E6%80%A7%E8%83%BD%E8%80%83%E9%87%8F"}},[t._v("2. String 的性能考量")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#21-%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%8B%BC%E6%8E%A5"}},[t._v("2.1. 字符串拼接")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#22-%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%88%86%E5%89%B2"}},[t._v("2.2. 字符串分割")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#23-stringintern"}},[t._v("2.3. String.intern")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#3-stringstringbufferstringbuilder-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB"}},[t._v("3. String、StringBuffer、StringBuilder 有什么区别")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#4-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("4. 参考资料")])])]),t._v(" "),s("h2",{attrs:{id:"_1-string-的不可变性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-string-的不可变性"}},[t._v("#")]),t._v(" 1. String 的不可变性")]),t._v(" "),s("p",[t._v("我们先来看下 "),s("code",[t._v("String")]),t._v(" 的定义：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Serializable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Comparable")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CharSequence")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** The value is used for character storage. */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("String")]),t._v(" 类被 "),s("code",[t._v("final")]),t._v(" 关键字修饰，表示"),s("strong",[t._v("不可继承 "),s("code",[t._v("String")]),t._v(" 类")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("String")]),t._v(" 类的数据存储于 "),s("code",[t._v("char[]")]),t._v(" 数组，这个数组被 "),s("code",[t._v("final")]),t._v(" 关键字修饰，表示 "),s("strong",[s("code",[t._v("String")]),t._v(" 对象不可被更改")]),t._v("。")]),t._v(" "),s("p",[t._v("为什么 Java 要这样设计？")]),t._v(" "),s("p",[t._v("（1）"),s("strong",[t._v("保证 String 对象安全性")]),t._v("。避免 String 被篡改。")]),t._v(" "),s("p",[t._v("（2）"),s("strong",[t._v("保证 hash 值不会频繁变更")]),t._v("。")]),t._v(" "),s("p",[t._v("（3）"),s("strong",[t._v("可以实现字符串常量池")]),t._v("。通常有两种创建字符串对象的方式，一种是通过字符串常量的方式创建，如 "),s("code",[t._v('String str="abc";')]),t._v(" 另一种是字符串变量通过 new 形式的创建，如 "),s("code",[t._v('String str = new String("abc")')]),t._v("。")]),t._v(" "),s("p",[t._v("使用第一种方式创建字符串对象时，JVM 首先会检查该对象是否在字符串常量池中，如果在，就返回该对象引用，否则新的字符串将在常量池中被创建。这种方式可以减少同一个值的字符串对象的重复创建，节约内存。")]),t._v(" "),s("p",[s("code",[t._v('String str = new String("abc")')]),t._v(" 这种方式，首先在编译类文件时，"),s("code",[t._v('"abc"')]),t._v(" 常量字符串将会放入到常量结构中，在类加载时，"),s("code",[t._v('"abc"')]),t._v(" 将会在常量池中创建；其次，在调用 new 时，JVM 命令将会调用 "),s("code",[t._v("String")]),t._v(" 的构造函数，同时引用常量池中的 "),s("code",[t._v('"abc"')]),t._v(" 字符串，在堆内存中创建一个 "),s("code",[t._v("String")]),t._v(" 对象；最后，str 将引用 "),s("code",[t._v("String")]),t._v(" 对象。")]),t._v(" "),s("h2",{attrs:{id:"_2-string-的性能考量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-string-的性能考量"}},[t._v("#")]),t._v(" 2. String 的性能考量")]),t._v(" "),s("h3",{attrs:{id:"_2-1-字符串拼接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-字符串拼接"}},[t._v("#")]),t._v(" 2.1. 字符串拼接")]),t._v(" "),s("p",[s("strong",[t._v("字符串常量的拼接，编译器会将其优化为一个常量字符串")]),t._v("。")]),t._v(" "),s("p",[t._v("【示例】字符串常量拼接")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本行代码在 class 文件中，会被编译器直接优化为：")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// String str = "abc";')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str = "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("字符串变量的拼接，编译器会优化成 "),s("code",[t._v("StringBuilder")]),t._v(" 的方式")]),t._v("。")]),t._v(" "),s("p",[t._v("【示例】字符串变量的拼接")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本行代码会被编译器优化为：")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// str = (new StringBuilder(String.valueOf(str))).append(i).toString();")]),t._v("\n        str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("但是，每次循环都会生成一个新的 "),s("code",[t._v("StringBuilder")]),t._v(" 实例，同样也会降低系统的性能。")]),t._v(" "),s("p",[t._v("字符串拼接的正确方案：")]),t._v(" "),s("ul",[s("li",[t._v("如果需要使用"),s("strong",[t._v("字符串拼接，应该优先考虑 "),s("code",[t._v("StringBuilder")]),t._v(" 的 "),s("code",[t._v("append")]),t._v(" 方法替代使用 "),s("code",[t._v("+")]),t._v(" 号")]),t._v("。")]),t._v(" "),s("li",[t._v("如果在并发编程中，"),s("code",[t._v("String")]),t._v(" 对象的拼接涉及到线程安全，可以使用 "),s("code",[t._v("StringBuffer")]),t._v("。但是要注意，由于 "),s("code",[t._v("StringBuffer")]),t._v(" 是线程安全的，涉及到锁竞争，所以从性能上来说，要比 "),s("code",[t._v("StringBuilder")]),t._v(" 差一些。")])]),t._v(" "),s("h3",{attrs:{id:"_2-2-字符串分割"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-字符串分割"}},[t._v("#")]),t._v(" 2.2. 字符串分割")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("String")]),t._v(" 的 "),s("code",[t._v("split()")]),t._v(" 方法使用正则表达式实现其强大的分割功能")]),t._v("。而正则表达式的性能是非常不稳定的，使用不恰当会引起回溯问题，很可能导致 CPU 居高不下。")]),t._v(" "),s("p",[t._v("所以，应该慎重使用 "),s("code",[t._v("split()")]),t._v(" 方法，"),s("strong",[t._v("可以考虑用 "),s("code",[t._v("String.indexOf()")]),t._v(" 方法代替 "),s("code",[t._v("split()")]),t._v(" 方法完成字符串的分割")]),t._v("。如果实在无法满足需求，你就在使用 Split() 方法时，对回溯问题加以重视就可以了。")]),t._v(" "),s("h3",{attrs:{id:"_2-3-string-intern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-string-intern"}},[t._v("#")]),t._v(" 2.3. String.intern")]),t._v(" "),s("p",[s("strong",[t._v("在每次赋值的时候使用 "),s("code",[t._v("String")]),t._v(" 的 "),s("code",[t._v("intern")]),t._v(" 方法，如果常量池中有相同值，就会重复使用该对象，返回对象引用，这样一开始的对象就可以被回收掉")]),t._v("。")]),t._v(" "),s("p",[t._v("在字符串常量中，默认会将对象放入常量池；在字符串变量中，对象是会创建在堆内存中，同时也会在常量池中创建一个字符串对象，复制到堆内存对象中，并返回堆内存对象引用。")]),t._v(" "),s("p",[t._v("如果调用 "),s("code",[t._v("intern")]),t._v(" 方法，会去查看字符串常量池中是否有等于该对象的字符串，如果没有，就在常量池中新增该对象，并返回该对象引用；如果有，就返回常量池中的字符串引用。堆内存中原有的对象由于没有引用指向它，将会通过垃圾回收器回收。")]),t._v(" "),s("p",[t._v("【示例】")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SharedLocation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" city"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" region"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" countryCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SharedLocation")]),t._v(" sharedLocation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SharedLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsharedLocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("messageInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("intern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\tsharedLocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCountryCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("messageInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRegion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("intern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsharedLocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRegion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("messageInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCountryCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("intern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("使用 "),s("code",[t._v("intern")]),t._v(" 方法需要注意：一定要结合实际场景。因为常量池的实现是类似于一个 HashTable 的实现方式，HashTable 存储的数据越大，遍历的时间复杂度就会增加。如果数据过大，会增加整个字符串常量池的负担。")])]),t._v(" "),s("h2",{attrs:{id:"_3-string、stringbuffer、stringbuilder-有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-string、stringbuffer、stringbuilder-有什么区别"}},[t._v("#")]),t._v(" 3. String、StringBuffer、StringBuilder 有什么区别")]),t._v(" "),s("p",[s("code",[t._v("String")]),t._v(" 是 Java 语言非常基础和重要的类，提供了构造和管理字符串的各种基本逻辑。它是典型的 "),s("code",[t._v("Immutable")]),t._v(" 类，被声明成为 "),s("code",[t._v("final class")]),t._v("，所有属性也都是 "),s("code",[t._v("final")]),t._v(" 的。也由于它的不可变性，类似拼接、裁剪字符串等动作，都会产生新的 "),s("code",[t._v("String")]),t._v(" 对象。由于字符串操作的普遍性，所以相关操作的效率往往对应用性能有明显影响。")]),t._v(" "),s("p",[s("code",[t._v("StringBuffer")]),t._v(" 是为解决上面提到拼接产生太多中间对象的问题而提供的一个类，我们可以用 "),s("code",[t._v("append")]),t._v(" 或者 "),s("code",[t._v("add")]),t._v(" 方法，把字符串添加到已有序列的末尾或者指定位置。"),s("code",[t._v("StringBuffer")]),t._v(" 是一个"),s("strong",[t._v("线程安全的")]),t._v("可修改字符序列。"),s("code",[t._v("StringBuffer")]),t._v(" 的线程安全是通过在各种修改数据的方法上用 "),s("code",[t._v("synchronized")]),t._v(" 关键字修饰实现的。")]),t._v(" "),s("p",[s("code",[t._v("StringBuilder")]),t._v(" 是 Java 1.5 中新增的，在能力上和 StringBuffer 没有本质区别，但是它去掉了线程安全的部分，有效减小了开销，是绝大部分情况下进行字符串拼接的首选。")]),t._v(" "),s("p",[s("code",[t._v("StringBuffer")]),t._v(" 和 "),s("code",[t._v("StringBuilder")]),t._v(" 底层都是利用可修改的（char，JDK 9 以后是 byte）数组，二者都继承了 "),s("code",[t._v("AbstractStringBuilder")]),t._v("，里面包含了基本操作，区别仅在于最终的方法是否加了 "),s("code",[t._v("synchronized")]),t._v("。构建时初始字符串长度加 16（这意味着，如果没有构建对象时输入最初的字符串，那么初始值就是 16）。我们如果确定拼接会发生非常多次，而且大概是可预计的，那么就可以指定合适的大小，避免很多次扩容的开销。扩容会产生多重开销，因为要抛弃原有数组，创建新的（可以简单认为是倍数）数组，还要进行 "),s("code",[t._v("arraycopy")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("除非有线程安全的需要，不然一般都使用 "),s("code",[t._v("StringBuilder")])]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"_4-参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考资料"}},[t._v("#")]),t._v(" 4. 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://book.douban.com/subject/2130190/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Java 编程思想（Thinking in java）》"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://book.douban.com/subject/26880667/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Java 核心技术 卷 I 基础知识》"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://time.geekbang.org/column/intro/100028001",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Java 性能调优实战》"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://time.geekbang.org/column/intro/82",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Java 核心技术面试精讲》"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/59cd71835188255d3448faf6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 基本数据类型和引用类型"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/dolphin0520/p/3780005.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入剖析 Java 中的装箱和拆箱"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);
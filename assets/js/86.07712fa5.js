(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{597:function(s,t,a){"use strict";a.r(t);var n=a(15),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("C++库函数，二分查找"),a("code",[s._v("std::low_bound")]),s._v("，注意，使用该库函数时，容器的迭代器应该是随机迭代器；且值是升序排序，或者说，在迭代器范围内[first, last)，值是升序排序")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\nReturns an iterator pointing to the first element in the range [first, last) that is not less than (i.e. greater or equal to) value, or last if no such element is found.\nReturn value：\n找到第一个大于等于value的的下标\nfirst, last\t -\titerators defining the partially-ordered range to examine\nvalue\t     -\tvalue to compare the elements to\ncomp\t     -\tbinary predicate which returns true if the first argument is less than (i.e. is ordered before) the second.\n*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForwardIt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nForwardIt "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lower_bound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" ForwardIt first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ForwardIt last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForwardIt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constexpr")]),s._v(" ForwardIt "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lower_bound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" ForwardIt first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ForwardIt last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForwardIt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Compare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nForwardIt "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lower_bound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" ForwardIt first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ForwardIt last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Compare comp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForwardIt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Compare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constexpr")]),s._v(" ForwardIt "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lower_bound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" ForwardIt first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ForwardIt last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Compare comp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("简洁实现")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForwardIt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nForwardIt "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lower_bound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ForwardIt first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ForwardIt last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ForwardIt it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("std")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("iterator_traits"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ForwardIt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("difference_type count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// distance计算出两个迭代器之间距离")]),s._v("\n    count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("distance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        it "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        step "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("advance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("it "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            first "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n            count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" step "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n            count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[a("code",[s._v("std:upper_bound")]),s._v("，与"),a("code",[s._v("std:lower_bound")]),s._v("区别的是，找到第一个大于value的索引。")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForwardIt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nForwardIt "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("upper_bound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" ForwardIt first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ForwardIt last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForwardIt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Compare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nForwardIt "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("upper_bound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" ForwardIt first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ForwardIt last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Compare comp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForwardIt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nForwardIt "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("upper_bound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ForwardIt first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ForwardIt last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ForwardIt it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("std")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("iterator_traits"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ForwardIt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("difference_type count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("distance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        it "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        step "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("advance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 大于等于")]),s._v("\n            first "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" step "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n            count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("如果数组是升序，那么"),a("code",[s._v("lower_bound")]),s._v("和"),a("code",[s._v("upper_bound")]),s._v("获得是第一个大于等于/大于value的数。如果数组是降序的，那么获得的就是最后一个小于等于/小于value的数。")])])}),[],!1,null,null,null);t.default=r.exports}}]);
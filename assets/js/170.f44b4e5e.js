(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{505:function(t,s,a){"use strict";a.r(s);var e=a(15),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"batch-normalization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-normalization"}},[t._v("#")]),t._v(" Batch Normalization")]),t._v(" "),a("p",[t._v("为什么需要Batch Normalization呢？首先从feature scaling看起")]),t._v(" "),a("h2",{attrs:{id:"feature-scaling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature-scaling"}},[t._v("#")]),t._v(" Feature Scaling")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"33%"},attrs:{src:"/img/AI/optimization/batch norm/1.png",alt:"image-20210819225000432"}})]),t._v(" "),a("p",[t._v("假设特征"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("x")]),a("mn",[t._v("1")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x_1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("和"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("x")]),a("mn",[t._v("2")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x_2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("的范围差异很大。如果它们对结果影响是同样重要的话，那么"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("w")]),a("mn",[t._v("1")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("w_1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.02691em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("与"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("w")]),a("mn",[t._v("2")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("w_2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.02691em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("的是相同的，会出现左下的loss空间。因为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("x")]),a("mn",[t._v("1")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x_1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("的值比较小，那么"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("w")]),a("mn",[t._v("1")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("w_1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.02691em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("的变动对Loss的影响会比较小，而"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("w")]),a("mn",[t._v("2")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("w_2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.02691em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("对loss的影响比较大。所以，在学习的时候，loss对"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("w")]),a("mn",[t._v("1")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("w_1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.02691em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("的学习率要比较小，而对"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("w")]),a("mn",[t._v("2")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("w_2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.02691em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("的梯度比较大。当然有方法可以做到，但是比较难。如果将特征都缩放到同样的空间时，那么"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("w")]),a("mn",[t._v("1")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("w_1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.02691em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("和"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("w")]),a("mn",[t._v("2")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("w_2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.02691em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("对loss的影响是相同的，")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"33%"},attrs:{src:"/img/AI/optimization/batch norm/2.png",alt:"image-20210819225505731"}})]),t._v(" "),a("p",[t._v("在缩放时，对不同data的同一维度做缩放，使得每个特征空间都在均值为0，方差为1的空间里。")]),t._v(" "),a("h2",{attrs:{id:"internal-covariate-shift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal-covariate-shift"}},[t._v("#")]),t._v(" Internal Covariate Shift")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"33%"},attrs:{src:"/img/AI/optimization/batch norm/3.png",alt:"image-20210819230414455"}})]),t._v(" "),a("p",[t._v("如果单独对每一次层的输出做一次feature scaling，然后输如到下一层的话，那么等于告诉下一层要根据这一层的统计信息做改变。但是，如果每一层都在改变，在更新参数后，每一层的参数都会更新，改变就会出现偏差，减小学习率或许能减轻偏差，但是也会使得训练变慢。")]),t._v(" "),a("h2",{attrs:{id:"batch-normalization-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-normalization-2"}},[t._v("#")]),t._v(" Batch Normalization")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"33%"},attrs:{src:"/img/AI/optimization/batch norm/4.png",alt:"image-20210819231750319"}})]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"33%"},attrs:{src:"/img/AI/optimization/batch norm/5.png",alt:"image-20210819231935152"}})]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"33%"},attrs:{src:"/img/AI/optimization/batch norm/6.png",alt:"image-20210819232547829"}})]),t._v(" "),a("p",[t._v("或许有网络需要特殊的均值和方差，那么可以乘以"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("γ")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\gamma")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05556em"}},[t._v("γ")])])])]),t._v("和加上一个"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("β")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\beta")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05278em"}},[t._v("β")])])])]),t._v("。这两个值是可以训练的，所以尽管当"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("γ")]),a("mo",[t._v("=")]),a("mi",[t._v("σ")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("β")]),a("mo",[t._v("=")]),a("mi",[t._v("μ")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\gamma=\\sigma,\\beta=\\mu")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05556em"}},[t._v("γ")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("σ")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05278em"}},[t._v("β")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("μ")])])])]),t._v("时，做不做都是一样，但是参数会在反向传播的时候被更新到。")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"33%"},attrs:{src:"/img/AI/optimization/batch norm/7.png",alt:"image-20210819233202039"}})]),t._v(" "),a("p",[t._v("在更新的时候，计算"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("μ")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("σ")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mu,\\sigma")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("μ")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("σ")])])])]),t._v("是由模型在训练集训练的过程中使用移动平均获得的。越后面的的"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("μ")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("σ")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mu,\\sigma")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("μ")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("σ")])])])]),t._v("有更高的权重。")]),t._v(" "),a("p",[t._v("优点")]),t._v(" "),a("ul",[a("li",[t._v("由于减少了Internal Covariate Shift，所以可以设置更大的学习率，训练更加快速")]),t._v(" "),a("li",[t._v("因为每次做完batch normaliztion后，特征都在[0,1]之间，那么如果使用sigmoid函数，值会落在斜率比较大的地方，保证了梯度的有效性，就会减少梯度消失和梯度爆炸。特别适用于sigmoid和tanh等这种激活函数。")]),t._v(" "),a("li",[t._v("由于使用Batch Normalization后，参数的范围取决于"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("[")]),a("mi",[t._v("μ")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("σ")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[\\mu,\\sigma]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("μ")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("σ")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("，所以不会受太多初始化的影响")]),t._v(" "),a("li",[t._v("减少正则化的需要。因为就算数据集中又噪声，使用batch normalization后，也会将输出给矫正过来，可以对抗overfiting。")]),t._v(" "),a("li",[t._v("batch normalization可以在tranining 和testing两个阶段都有用，但是主要在trainning比较有用。")])]),t._v(" "),a("h2",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note:")]),t._v(" "),a("ul",[a("li",[t._v("由于batch normalization在计算均值和方差的时候，假定这个均值和方差是整个数据集的，"),a("font",{attrs:{color:"yellow"}},[t._v("那么这个batch_size是不能太小的。")])],1)]),t._v(" "),a("h3",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://arxiv.org/abs/1502.03167",target:"_blank",rel:"noopener noreferrer"}},[t._v("Batch normalization: Accelerating deep network training by reducing internal covariate shift"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://arxiv.org/pdf/1806.02375.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding batch normalization"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://export.arxiv.org/pdf/1805.11604",target:"_blank",rel:"noopener noreferrer"}},[t._v("How does batch normalization help optimization?"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=BZh1ltr5Rkg",target:"_blank",rel:"noopener noreferrer"}},[t._v("李宏毅老师：Batch Normalization"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=i.exports}}]);
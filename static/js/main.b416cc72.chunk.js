(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(45)},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(11),l=a.n(c),s=a(47),m=a(50),o=a(49),f=a(48),i=(a(29),[[1,2,3],[4,5,6],[7,8,9]]),E=function(e){var t=e.row,a=e.col,r=t-1,c=a-1,l=[1,2,3].map(function(e){var t="".concat(i[r][c]," \xd7 ").concat(e," = ").concat(i[r][c]*e);return n.a.createElement("p",{className:"b1_result"},t)}),s=[4,5,6,7,8,9].map(function(e){var t="".concat(i[r][c]," \xd7 ").concat(e," = ").concat(i[r][c]*e);return n.a.createElement("p",{className:"b1_result"},t)});return n.a.createElement("div",{className:"b1_card"},n.a.createElement("div",{style:{width:"50%",float:"left",paddingLeft:10}},n.a.createElement("p",{className:"b1_number"},i[r][c]),l),n.a.createElement("div",{style:{width:"50%",float:"right",marginTop:58,paddingLeft:20}},s))},x=(a(31),function(){return n.a.createElement("div",{className:"b1_wrapper"},n.a.createElement("span",{className:"b1_x",style:{left:0,top:3.5}},"\xd7"),n.a.createElement("span",{className:"b1_x",style:{right:0,top:3.5}},"\xd7"),n.a.createElement("span",{className:"b1_x",style:{left:0,bottom:6}},"\xd7"),n.a.createElement("span",{className:"b1_x",style:{right:0,bottom:6}},"\xd7"),n.a.createElement("div",{className:"b1_box"},n.a.createElement("p",{className:"b1_box-title"},"\u4e5d\u4e5d\u4e58\u6cd5\u8868"),n.a.createElement("p",{className:"b1_box-sub"},"MULTIPLICATION CHART")))}),p=(a(33),function(){var e=[1,2,3].map(function(e){return n.a.createElement("div",{key:e},[1,2,3].map(function(t){return 1===e&&1===t?n.a.createElement(x,{key:t}):n.a.createElement(E,{key:t,row:e,col:t})}))});return n.a.createElement("div",null,n.a.createElement("div",{className:"b1_bg"},e),n.a.createElement("div",{className:"b1_footer"},n.a.createElement("p",{className:"b1_footer-title"},"Copyright \xa9 2019 HexSchool. All rights reserved.")))}),u=a(14),d=a(5),N=a(6),y=a(8),h=a(7),b=a(9),v=a(15);a(35);function w(){var e=Object(u.a)(["\n      position: absolute;\n      left: 50%;\n      top: 400px;\n      transform: translate(-6px, 3px);\n      transform-origin: 6px -3px;\n      transform: rotate(","deg);\n    "]);return w=function(){return e},e}function g(){var e=Object(u.a)(["\n      position: absolute;\n      left: 50%;\n      top: 305px;\n      transform: translate(-4px, -92px);\n      transform-origin: 4px 92px;\n      transform: rotate(","deg);\n    "]);return g=function(){return e},e}function _(){var e=Object(u.a)(["\n      position: absolute;\n      left: 50%;\n      top: 400px;\n      transform: translate(-4px, -4px);\n      transform-origin: 4px 4px;\n      transform: rotate(\n        ","deg\n      );\n    "]);return _=function(){return e},e}var k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={hour:0,minute:0,second:0},a.update=function(){a.setState({hour:(new Date).getHours(),minute:(new Date).getMinutes(),second:(new Date).getSeconds()})},a}return Object(b.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){this.setState({hour:(new Date).getHours(),minute:(new Date).getMinutes(),second:(new Date).getSeconds()}),setInterval(this.update,1e3)}},{key:"render",value:function(){var e=v.a.div(_(),30*this.state.hour-90+this.state.minute/2),t=v.a.div(g(),6*this.state.minute),a=v.a.div(w(),6*this.state.second+180);return console.log(new Date),n.a.createElement("div",{className:"b2_wrapper"},n.a.createElement("div",{className:"b2_box"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"500",height:"500",viewBox:"0 0 500 500"},n.a.createElement("defs",null,n.a.createElement("style",null,".a {\n              fill: #3d5a45;\n            }\n      \n            .b {\n              fill: #293b29;\n              stroke: #212f0b;\n              stroke-width: 3px;\n            }\n      \n            .c,\n            .f {\n              fill: #fff;\n            }\n      \n            .c {\n              font-size: 10px;\n              font-family: HelveticaNeue, Helvetica Neue;\n            }\n      \n            .d {\n              fill: #ccc;\n              stroke: #ff7600;\n              stroke-linejoin: round;\n            }\n      \n            .e {\n              fill: #ff7600;\n            }\n      \n            .g {\n              filter: url(#a);\n            }"),n.a.createElement("filter",{id:"a",x:"0",y:"0",width:"500",height:"500",filterUnits:"userSpaceOnUse"},n.a.createElement("feOffset",{dy:"3",input:"SourceAlpha"}),n.a.createElement("feGaussianBlur",{stdDeviation:"25",result:"b"}),n.a.createElement("feFlood",{floodOpacity:"0.302"}),n.a.createElement("feComposite",{operator:"in",in2:"b"}),n.a.createElement("feComposite",{in:"SourceGraphic"}))),n.a.createElement("g",{transform:"translate(-390 -153)"},n.a.createElement("g",{className:"g",transform:"matrix(1, 0, 0, 1, 390, 153)"},n.a.createElement("rect",{className:"a",width:"350",height:"350",rx:"72",transform:"translate(75 72)"})),n.a.createElement("path",{className:"b",d:"M155,0h0A155,155,0,0,1,310,155h0A155,155,0,0,1,155,310h0A155,155,0,0,1,0,155H0A155,155,0,0,1,155,0Z",transform:"translate(485 245)"}),n.a.createElement("text",{className:"c",transform:"translate(640 299.315)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"12")),n.a.createElement("text",{className:"c",transform:"translate(692.127 314.521)"},n.a.createElement("tspan",{x:"-2.78",y:"0"},"1")),n.a.createElement("text",{className:"c",transform:"translate(588.718 314.521)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"11")),n.a.createElement("text",{className:"c",transform:"translate(709.403 281.671)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"13")),n.a.createElement("text",{className:"c",transform:"translate(570.598 281.671)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"23")),n.a.createElement("text",{className:"c",transform:"translate(728.824 350.597)"},n.a.createElement("tspan",{x:"-2.78",y:"0"},"2")),n.a.createElement("text",{className:"c",transform:"translate(551.176 350.597)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"10")),n.a.createElement("text",{className:"c",transform:"translate(742.565 403.757)"},n.a.createElement("tspan",{x:"-2.78",y:"0"},"3")),n.a.createElement("text",{className:"c",transform:"translate(537.436 403.757)"},n.a.createElement("tspan",{x:"-2.78",y:"0"},"9")),n.a.createElement("text",{className:"c",transform:"translate(728.824 454.813)"},n.a.createElement("tspan",{x:"-2.78",y:"0"},"4")),n.a.createElement("text",{className:"c",transform:"translate(551.176 454.813)"},n.a.createElement("tspan",{x:"-2.78",y:"0"},"8")),n.a.createElement("text",{className:"c",transform:"translate(692.127 493.809)"},n.a.createElement("tspan",{x:"-2.78",y:"0"},"5")),n.a.createElement("text",{className:"c",transform:"translate(589.185 493.809)"},n.a.createElement("tspan",{x:"-2.78",y:"0"},"7")),n.a.createElement("text",{className:"c",transform:"translate(640 507.605)"},n.a.createElement("tspan",{x:"-2.78",y:"0"},"6")),n.a.createElement("text",{className:"c",transform:"translate(762.209 332.477)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"14")),n.a.createElement("text",{className:"c",transform:"translate(517.435 332.477)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"22")),n.a.createElement("text",{className:"c",transform:"translate(780.805 403.757)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"15")),n.a.createElement("text",{className:"c",transform:"translate(498.822 403.757)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"21")),n.a.createElement("text",{className:"c",transform:"translate(762.209 475.132)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"16")),n.a.createElement("text",{className:"c",transform:"translate(517.435 475.132)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"20")),n.a.createElement("text",{className:"c",transform:"translate(709.402 525.813)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"17")),n.a.createElement("text",{className:"c",transform:"translate(570.597 525.813)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"19")),n.a.createElement("text",{className:"c",transform:"translate(640 263.075)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"24")),n.a.createElement("text",{className:"c",transform:"translate(640 543.642)"},n.a.createElement("tspan",{x:"-5.56",y:"0"},"18")),n.a.createElement("line",{className:"d",y2:"24",transform:"translate(640 265.435)"}),n.a.createElement("line",{className:"d",x1:"12",y2:"20.785",transform:"translate(695.282 283.464)"}),n.a.createElement("line",{className:"d",x1:"20.785",y2:"12",transform:"translate(735.752 332.718)"}),n.a.createElement("line",{className:"d",x1:"24",transform:"translate(750.565 400)"}),n.a.createElement("line",{className:"d",x1:"20.785",y1:"12",transform:"translate(735.752 455.282)"}),n.a.createElement("line",{className:"d",x1:"12",y1:"20.785",transform:"translate(695.282 495.752)"}),n.a.createElement("line",{className:"d",y1:"24",transform:"translate(640 510.565)"}),n.a.createElement("line",{className:"d",y1:"20.785",x2:"12",transform:"translate(572.718 495.752)"}),n.a.createElement("line",{className:"d",y1:"12",x2:"20.785",transform:"translate(523.464 455.282)"}),n.a.createElement("line",{className:"d",x2:"24",transform:"translate(505.435 400)"}),n.a.createElement("line",{className:"d",x2:"20.785",y2:"12",transform:"translate(523.464 332.718)"}),n.a.createElement("line",{className:"d",x2:"12",y2:"20.785",transform:"translate(572.718 283.464)"}),n.a.createElement("path",{className:"e",d:"M852.375,191.945l.7,2.864,2.132,2.035-2.864.7-2.035,2.132-.7-2.864-2.132-2.035,2.864-.7Z",transform:"translate(-179.549 86)"}),n.a.createElement("path",{className:"e",d:"M909,224.711l-.828,2.828.828,2.828-2.828-.828-2.828.828.828-2.828-.828-2.828,2.828.828Z",transform:"translate(-179.549 86)"}),n.a.createElement("path",{className:"e",d:"M941.665,281.4l-2.132,2.035-.7,2.864-2.035-2.132-2.864-.7,2.132-2.035.7-2.864L938.8,280.7Z",transform:"translate(-179.549 86)"}),n.a.createElement("path",{className:"e",d:"M941.6,346.826l-2.864.7-2.035,2.132-.7-2.864-2.132-2.035,2.864-.7,2.035-2.132.7,2.864Z",transform:"translate(-179.549 86)"}),n.a.createElement("path",{className:"e",d:"M908.839,403.455l-2.828-.828-2.828.828.828-2.828-.828-2.828,2.828.828,2.828-.828-.828,2.828Z",transform:"translate(-179.549 86)"}),n.a.createElement("path",{className:"e",d:"M852.149,436.116l-2.035-2.132-2.864-.7,2.132-2.035.7-2.864,2.035,2.132,2.864.7-2.132,2.035Z",transform:"translate(-179.549 86)"}),n.a.createElement("path",{className:"e",d:"M786.723,436.055l-.7-2.864-2.132-2.035,2.864-.7,2.035-2.132.7,2.864,2.132,2.035-2.864.7Z",transform:"translate(-179.549 86)"}),n.a.createElement("path",{className:"e",d:"M730.094,403.29l.828-2.828-.828-2.828,2.828.828,2.828-.828-.828,2.828.828,2.828-2.828-.828Z",transform:"translate(-179.549 86)"}),n.a.createElement("path",{className:"e",d:"M697.433,346.6l2.132-2.035.7-2.864,2.035,2.132,2.864.7-2.132,2.035-.7,2.864L700.3,347.3Z",transform:"translate(-179.549 86)"}),n.a.createElement("path",{className:"e",d:"M697.494,281.175l2.864-.7,2.035-2.132.7,2.864,2.132,2.035-2.864.7-2.035,2.132-.7-2.864Z",transform:"translate(-179.549 86)"}),n.a.createElement("path",{className:"e",d:"M730.258,224.545l2.828.828,2.828-.828-.828,2.828.828,2.828-2.828-.828-2.828.828.828-2.828Z",transform:"translate(-179.549 86)"}),n.a.createElement("path",{className:"e",d:"M786.948,191.885l2.035,2.132,2.864.7-2.132,2.035-.7,2.864-2.035-2.132-2.864-.7,2.132-2.035Z",transform:"translate(-179.549 86)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(649.638 277.41)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(660.195 278.799)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(680.746 284.306)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(690.584 288.381)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(709.01 299.02)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(717.457 305.502)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(732.502 320.547)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(738.984 328.995)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(749.621 347.421)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(753.696 357.259)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(759.202 377.81)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(760.591 388.368)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(760.59 409.638)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(759.201 420.195)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(753.694 440.746)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(749.619 450.584)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(738.98 469.01)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(732.498 477.457)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(717.453 492.501)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(709.005 498.984)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(690.579 509.621)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(680.741 513.696)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(660.19 519.202)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(649.632 520.591)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(628.362 520.59)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(617.805 519.201)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(597.254 513.694)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(587.416 509.619)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(568.99 498.98)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(560.543 492.498)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(545.499 477.453)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(539.016 469.005)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(528.379 450.579)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(524.304 440.741)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(518.799 420.19)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(517.409 409.632)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(517.41 388.362)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(518.799 377.805)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(524.306 357.254)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(528.381 347.416)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(539.02 328.99)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(545.502 320.543)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(560.547 305.498)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(568.995 299.016)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(587.421 288.379)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(597.259 284.304)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(617.81 278.798)"}),n.a.createElement("circle",{className:"f",cx:"1",cy:"1",r:"1",transform:"translate(628.368 277.409)"}))),n.a.createElement(e,null,n.a.createElement("svg",{className:"hour",xmlns:"http://www.w3.org/2000/svg",width:"72",height:"8",viewBox:"0 0 72 8"},n.a.createElement("g",{transform:"translate(-636 -396)"},n.a.createElement("path",{style:{fill:"#fff"},d:"M4,72a4,4,0,0,1-4-4V0H8V68A4,4,0,0,1,4,72ZM3,3V23H5V3Z",transform:"translate(708 396) rotate(90)"})))),n.a.createElement(t,null,n.a.createElement("svg",{className:"minute",xmlns:"http://www.w3.org/2000/svg",width:"8",height:"96",viewBox:"0 0 8 96"},n.a.createElement("g",{transform:"translate(-636 -396)"},n.a.createElement("rect",{style:{fill:"#ff7600"},width:"8",height:"96",rx:"4",transform:"translate(636 396)"}),n.a.createElement("circle",{style:{fill:"#fff"},cx:"2",cy:"2",r:"2",transform:"translate(638 486)"}),n.a.createElement("circle",{style:{fill:"#ff7600"},cx:"1",cy:"1",r:"1",transform:"translate(639 455)"}),n.a.createElement("path",{style:{fill:"#b1ff00",stroke:"#fff",strokeLinecap:"round"},d:"M0,0V32",transform:"translate(640 456)"})))),n.a.createElement(a,null,n.a.createElement("svg",{className:"second",xmlns:"http://www.w3.org/2000/svg",width:"13.251",height:"126",viewBox:"0 0 13.251 126"},n.a.createElement("g",{transform:"translate(646.618 400) rotate(180)"},n.a.createElement("g",{style:{fill:"#293b29",stroke:"#b1ff00"},transform:"translate(636 274)"},n.a.createElement("circle",{style:{stroke:"none"},cx:"4",cy:"4",r:"4"}),n.a.createElement("circle",{style:{fill:"none"},cx:"4",cy:"4",r:"3.5"})),n.a.createElement("g",{style:{fill:"#b1ff00",stroke:"#b1ff00"},transform:"translate(638 276)"},n.a.createElement("circle",{style:{stroke:"none"},cx:"2",cy:"2",r:"2"}),n.a.createElement("circle",{style:{fill:"none"},cx:"2",cy:"2",r:"1.5"})),n.a.createElement("path",{style:{fill:"none",stroke:"#b1ff00"},d:"M0,3.61V50l6,8L-6,75l6,7v40",transform:"translate(640 278)"}))))))}}]),t}(n.a.Component),O=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){a.props.handleClick(a.props.text)},a}return Object(b.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"b3_button",onClick:this.onClick},this.props.text)}}]),t}(n.a.Component),C=(a(42),function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={text:"0",procedure:"0",reset:!1},a.handleClick=function(e){"0"===a.state.text&&"."!==e?(a.setState({text:"",procedure:""}),a.setState(function(t){return{procedure:t.procedure+e,text:t.text+e}})):a.state.reset?a.setState(function(t){return{procedure:t.procedure+e,text:e,reset:!1}}):a.setState(function(t){return{procedure:t.procedure+e,text:t.text+e,reset:!1}})},a.handleOperate=function(e){a.setState(function(t){return{procedure:t.procedure+e,text:t.text,reset:!0}})},a.handleEvaluate=function(){var e=Math.round(1e8*a.eval(a.state.procedure))/1e8;a.setState({text:e,reset:!0})},a.handleClear=function(){a.setState({text:"0",procedure:"0",reset:!1})},a.handleDelete=function(){a.setState(function(e){return{procedure:e.procedure.length<=1?"0":e.procedure.slice(0,-1),text:e.text.length<=1?"0":e.text.slice(0,-1)}})},a}return Object(b.a)(t,e),Object(N.a)(t,[{key:"eval",value:function(e){return new Function("return "+e)()}},{key:"render",value:function(){var e=this,t=[7,8,9,4,5,6,1,2,3,0,"00","."].map(function(t){return n.a.createElement(O,{key:t,text:t,handleClick:e.handleClick})});return n.a.createElement("div",{className:"b3_wrapper"},n.a.createElement("div",{className:"b3_calculator"},n.a.createElement("div",{className:"b3_monitor"},n.a.createElement("div",{className:"b3_procedure"},this.state.procedure),n.a.createElement("div",{className:"b3_result"},this.state.text)),n.a.createElement("div",{className:"b3_button-wrapper"},t),n.a.createElement("div",{className:"b3_operate",onClick:function(){return e.handleOperate("/")}},"\xf7"),n.a.createElement("div",{className:"b3_operate",onClick:function(){return e.handleOperate("*")}},"\xd7"),n.a.createElement("div",{className:"b3_operate",onClick:function(){return e.handleOperate("+")}},"+"),n.a.createElement("div",{className:"b3_operate",onClick:function(){return e.handleOperate("-")}},"\u2212"),n.a.createElement("div",{className:"b3_delete",onClick:this.handleClear},"AC"),n.a.createElement("div",{className:"b3_delete",onClick:this.handleDelete},"\u232b"),n.a.createElement("div",{className:"b3_equal",text:"=",onClick:this.handleEvaluate},"=")))}}]),t}(n.a.Component));l.a.render(n.a.createElement(s.a,null,n.a.createElement("div",null,n.a.createElement(m.a,null,n.a.createElement(o.a,{path:"/3F_BOSS_CALCULATOR",component:C}),n.a.createElement(o.a,{path:"/2F_BOSS_CLOCK",component:k}),n.a.createElement(o.a,{path:"/1F_BOSS_9x9",component:p}),n.a.createElement(o.a,{path:"/"},n.a.createElement(f.a,{to:{pathname:"/1F_BOSS_9x9"}}))))),document.querySelector("#root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.b416cc72.chunk.js.map
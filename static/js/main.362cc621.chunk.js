(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(13),c=n.n(o),r=n(5),l=(n(29),n(15)),s=n(16),m=n(18),d=n(17),u=n(19),p=(n(30),n(8)),b=n(9),g={mylist:[{title:"Futurama",id:1,img:"http://cdn1.nflximg.net/webp/7621/3787621.webp"},{title:"The Interview",id:2,img:"http://cdn1.nflximg.net/webp/1381/11971381.webp"},{title:"Gilmore Girls",id:3,img:"http://cdn1.nflximg.net/webp/7451/11317451.webp"}],recommendations:[{title:"Family Guy",id:4,img:"http://cdn5.nflximg.net/webp/5815/2515815.webp"},{title:"The Croods",id:5,img:"http://cdn3.nflximg.net/webp/2353/3862353.webp"},{title:"Friends",id:6,img:"http://cdn0.nflximg.net/webp/3200/9163200.webp"}]},f={type:"REMOVE",id:""},h={type:"ADD",id:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action: "+t.type),console.log(t),t.type){case"REMOVE":var n=e.mylist.filter(function(e){return e.id!==t.id});return console.log(n),Object(b.a)({},e,{mylist:n});case"ADD":var a=e.recommendations.filter(function(e){return e.id===t.id}),i=[].concat(Object(p.a)(e.mylist),Object(p.a)(a)),o=e.recommendations.filter(function(e){return e.id!==t.id});return Object(b.a)({},e,{recommendations:o,mylist:i});default:return e}},y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleRemove=function(e){console.log(e.target.id),n.props.removeMyList(parseInt(e.target.id))},n.handleAdd=function(e){n.props.addMyList(parseInt(e.target.id))},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("h2",{className:"title"},"Mylist"),i.a.createElement("ul",{className:"container"},this.props.mylist.map(function(t){return i.a.createElement("li",{className:"list"},i.a.createElement("span",null,t.title),i.a.createElement("span",{className:"overlay"}),i.a.createElement("img",{src:t.img,className:"image"}),i.a.createElement("button",{className:"button",id:t.id,onClick:e.handleRemove}," Remove "))})),i.a.createElement("h2",{className:"title"},"Recommendations "),i.a.createElement("ul",{className:"container"},this.props.recommendations.map(function(t){return i.a.createElement("li",{className:"list"},i.a.createElement("span",null,t.title),i.a.createElement("span",{className:"overlay"}),i.a.createElement("img",{src:t.img,className:"image"}),i.a.createElement("button",{className:"button",id:t.id,onClick:e.handleAdd}," ADD "))})))}}]),t}(a.Component),v=Object(r.b)(function(e){return{mylist:e.mylist,recommendations:e.recommendations}},function(e){return{removeMyList:function(t){f.id=t,e(f)},addMyList:function(t){h.id=t,e(h)}}})(y),E=n(4);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=Object(E.b)(w);c.a.render(i.a.createElement(r.a,{store:N},i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.362cc621.chunk.js.map
(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(2),c=t.n(o),i=(t(13),t(3)),s=t(4),m=t(6),l=t(5),u=t(7),h=(t(14),t(15),t(16),t(17),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null," ",e.monster.name),r.a.createElement("h2",null," ",e.monster.email," "))}),d=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})})))},f=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(m.a)(this,Object(l.a)(a).call(this))).state={SearchVal:"",monsters:[{name:"Jahangeer",id:"1",email:"abc@gmail.com"},{name:"Anas Khan",id:"2",email:"abc@gmail.com"},{name:"Ahmad Asrani",id:"3",email:"abc@gmail.com"},{name:"Jahangeer",id:"4",email:"abc@gmail.com"},{name:"Anas Khan",id:"5",email:"abc@gmail.com"},{name:"Ahmad Asrani",id:"6",email:"abc@gmail.com"}]},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.monsters,n=a.SearchVal,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"h1"}," Cartoons I know "),r.a.createElement("input",{type:"search",placeholder:"search monsters",onChange:function(a){return e.setState({SearchVal:a.target.value})}}),r.a.createElement(d,{monsters:o}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.537bea1f.chunk.js.map
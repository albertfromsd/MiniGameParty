(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){},12:function(e,t,a){e.exports={flexRow:"GlobalComponents_flexRow__2JSrw",flexRowCen:"GlobalComponents_flexRowCen__22HLQ",flexColCen:"GlobalComponents_flexColCen__32gkU",textWhite:"GlobalComponents_textWhite__7iibq",sbUser:"GlobalComponents_sbUser__LGtwO",sbScore:"GlobalComponents_sbScore__6Qhxn",cellWidth:"GlobalComponents_cellWidth__zGtay",navButton:"GlobalComponents_navButton__2jhmB"}},14:function(e,t,a){e.exports={loginForm:"Form_loginForm__3jRnC",formRow:"Form_formRow__3Supy",rowCenter:"Form_rowCenter__1Asse"}},150:function(e,t){},165:function(e,t,a){e.exports=a.p+"static/media/game (1).87e5da07.gif"},166:function(e,t,a){e.exports=a.p+"static/media/game (2).50a2c1df.gif"},167:function(e,t,a){e.exports=a.p+"static/media/game (3).7682298c.gif"},168:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),m=a(5),l=a(6),s=(a(103),a(37),a(1)),i=(a(84),a(43),a(14),a(27)),u=a(13);var b=a(85),d=a.n(b),E=a(44);var N=Object(m.b)((function(e){return{socket:e.socket,userName:e.userName}}))((function(e){var t=e.socket,a=e.roomName,n=(e.userName,e.dispatch);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"outline-secondary",onClick:function(e){t.emit("navigateParty",{roomName:a,gameName:""})}},"Return to Game Room"),r.a.createElement(E.a,{variant:"outline-secondary",onClick:function(e){t.disconnect(),n({type:"LOGOUT"}),Object(l.b)("/")}},"Logout"))})),h=a(12),g=a.n(h),f=a(35),v=a(57);var p=Object(m.b)((function(e){return{userName:e.userName,admin:e.admin}}))((function(e){var t=e.socket,a=(e.dispatch,e.roomName),o=e.userName;e.admin;Object(n.useEffect)((function(){(void 0==o||o.length<1||void 0==a||a.length<1)&&Object(l.b)("/")}),[t,o,a]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{bg:"secondary",variant:"dark"},r.a.createElement(f.a.Brand,{href:"/".concat(a)},"MiniGame Party"),r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(v.a,{className:"mr-auto"},r.a.createElement(v.a.Link,{href:"#"},"Home")),r.a.createElement("div",null,r.a.createElement("p",{className:g.a.textWhite},"Logged in as: ",r.a.createElement("i",null," ",o," "))),r.a.createElement(N,{className:g.a.flexColCen,roomName:a}))))})),_=a(88);var O=Object(m.b)((function(e){return{userName:e.userName}}))((function(e){var t=e.socket,a=e.userName,o=e.roomName,c=e.dispatch,m=Object(n.useState)([]),i=Object(s.a)(m,2),u=i[0],b=i[1],d=Object(n.useState)([]),E=Object(s.a)(d,2),N=E[0],h=E[1];return Object(n.useEffect)((function(){(null===a||a.length<1||void 0===a||null===o||o.length<1||void 0===o)&&Object(l.b)("/"),t.on("refreshScoreboard",(function(e){b(e.userList),h(e.scoreList),c({type:"SETSCOREBOARD",scoreboard:e.scoreboardList,userList:e.userList,scoreList:e.scoreList})}))}),[t,o,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:[g.a.flexRowCen,g.a.textWhite].join(" ")},r.a.createElement(_.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:g.a.sbUser},u.map((function(e,t){return r.a.createElement("td",{key:t,className:g.a.cellWidth},e)}))),r.a.createElement("tr",{className:g.a.sbScore},N.map((function(e,t){return r.a.createElement("td",{key:t},e," ")})))))))})),j=a(3),y=a.n(j);var C=Object(m.b)((function(e){return{userName:e.userName,admin:e.admin}}))((function(e){var t,a=e.socket,o=e.dispatch,c=e.userName,m=(e.admin,e.roomName),i=Object(n.useState)(""),u=Object(s.a)(i,2),b=u[0],d=u[1];Object(n.useEffect)((function(){a.on("fullParty",(function(e){d(e)}))}),[a]);var E=function(e){(void 0==c||c.length<1||void 0==m||m.length<1)&&Object(l.b)("/"),t=e.target.value,o({type:"SETGAMENAME",gameName:t}),o({type:"SETROOMNAME",roomName:m}),a.emit("navigateParty",{roomName:m,userName:c,gameName:t})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:[y.a.flexColCen,y.a.textWhite,y.a.onlyDiv].join(" ")},r.a.createElement("div",{className:y.a.flexColCen},r.a.createElement("h2",{className:y.a.textWhite},"Welcome, ",c,"!"),r.a.createElement("h3",{className:y.a.textWhite},"You are in Room: ",m),r.a.createElement("br",null),r.a.createElement("h3",{className:y.a.textWhite},"Pick a game below:"),r.a.createElement("br",null),r.a.createElement("p",{style:{color:"red"}},b),r.a.createElement("div",{className:y.a.flexRowCen},r.a.createElement("div",{className:y.a.flexColCen},r.a.createElement("button",{onClick:E,value:"mathhead",className:y.a.gameBtn},"Math Head")," "),r.a.createElement("div",{className:y.a.flexColCen},r.a.createElement("button",{onClick:E,value:"typefastermaster",className:y.a.gameBtn},"Type Faster Master")," ")))))})),w=a(31),S=a.n(w);var x=Object(m.b)((function(e){return{userName:e.userName}}))((function(e){var t=e.socket,a=e.userName,o=e.roomName,c=Object(n.useState)([]),m=Object(s.a)(c,2),i=m[0],u=m[1],b=Object(n.useState)(""),d=Object(s.a)(b,2),E=d[0],N=d[1],h=Object(n.useState)(!1),g=Object(s.a)(h,2);g[0],g[1];Object(n.useEffect)((function(){(null===a||a.length<1||void 0===a||null===o||o.length<1||void 0===o)&&Object(l.b)("/"),t.on("updateChatLog",(function(e){u(e)}))}),[t,o,a]);return r.a.createElement("div",{style:{height:"60%"}},r.a.createElement("div",{className:S.a.chatBox},i.map((function(e,t){return e.userName===a?r.a.createElement("div",{key:t,className:S.a.sentMessage},r.a.createElement("p",{style:{backgroundColor:"royalblue"}}," ",e.msg," ")):r.a.createElement("div",{key:t,className:S.a.recievedMessage},r.a.createElement("p",{style:{backgroundColor:"silver"}}," ",e.userName.toLocaleUpperCase()," : ",e.msg))}))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=new Date;t.emit("newMsg",{roomName:o,userName:a,userInput:E,timestamp:n}),N("")}},r.a.createElement("input",{type:"text",placeholder:"Type message here",value:E,onChange:function(e){return N(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Send"})))}));var k=Object(m.b)((function(e){return{socket:e.socket,roomName:e.roomName,gameName:e.gameName,userName:e.userName}}))((function(e){var t=e.socket,a=Object(n.useState)(0),o=Object(s.a)(a,2),c=o[0],m=o[1],l=Object(n.useState)(new Date),i=Object(s.a)(l,2),u=i[0],b=(i[1],function(){var e=c-(+new Date-+u),t={};return e>0&&(t={seconds:Math.floor(e/1e3%60),milliseconds:e%1e3}),t}),d=Object(n.useState)(b()),E=Object(s.a)(d,2),N=E[0],h=E[1];Object(n.useEffect)((function(){setTimeout((function(){h(b())}),1)})),Object(n.useEffect)((function(){t.on("startTimer",(function(e){m(e.timeAllowed),console.log("incoming data.timeAllowed: "+e.timeAllowed)}))}),[t]);var f=[];return Object.keys(N).forEach((function(e){N[e]||(N[e]=0),f.push(r.a.createElement("span",{key:e},N[e]," ",e," "))})),r.a.createElement("div",{className:g.a.textWhite},f.length?f:r.a.createElement("span",null,"Time's up!"))}));var T=Object(m.b)((function(e){return{userName:e.userName}}))((function(e){var t=e.socket,a=e.userName,o=e.roomName,c=Object(n.useState)(!1),m=Object(s.a)(c,2),i=(m[0],m[1],Object(n.useState)("hidden")),u=Object(s.a)(i,2),b=u[0],d=u[1],E=Object(n.useState)("hidden"),N=Object(s.a)(E,2),h=N[0],g=N[1],f=Object(n.useState)("Medium"),v=Object(s.a)(f,2),p=v[0],_=v[1],O=Object(n.useState)(),j=Object(s.a)(O,2),C=j[0],w=j[1],S=Object(n.useState)(),x=Object(s.a)(S,2),T=x[0],M=x[1],R=Object(n.useState)(""),G=Object(s.a)(R,2),F=G[0],B=G[1],A=Object(n.useState)([]),W=Object(s.a)(A,2),D=W[0],L=W[1],P=Object(n.useState)("white"),I=Object(s.a)(P,2),U=I[0],Y=I[1],V=Object(n.useState)(""),H=Object(s.a)(V,2),q=H[0],z=H[1],J=Object(n.useState)(0),K=Object(s.a)(J,2),Q=(K[0],K[1]),X=Object(n.useState)(0),Z=Object(s.a)(X,2),$=(Z[0],Z[1]);Object(n.useEffect)((function(){(null===a||void 0===a||a.length<1||null===o||void 0===o||o.length<1)&&Object(l.b)("/"),t.emit("mathHeadEntered",{userName:a,roomName:o,gameName:"mathhead"}),t.on("syncNewUser",(function(e){dispatchEvent({}),Object(l.b)("/"+o+"/"+e)})),t.on("sharedMathHeadTarget",(function(e){d("hidden"),d("visible"),g("hidden"),w(e.question),M(e.answer),z(e.createdAt),$(e.timeAllowed)})),t.on("answeredMathHeadTarget",(function(e){d("hidden"),g("visible"),L([e.userName+" beat you! ",e.question+" equals "+e.answer+"!","They beat you in "+e.totalTimeTaken+" seconds","They scored "+e.points+" points!","You can get it next time!"]),Y("orange")}))}),[t,o,a,"mathhead"]);var ee=function(e){_(e.target.value)};return r.a.createElement("div",{className:y.a.entirePage},r.a.createElement("h3",{className:y.a.textWhite}," ",r.a.createElement("i",null," ",a," "),"  "),r.a.createElement("br",null),r.a.createElement("h2",{className:y.a.textWhite},"Math Head"),r.a.createElement("br",null),r.a.createElement("div",null,["Easy","Medium","Hard","Genius"].map((function(e,t){return r.a.createElement("button",{onClick:ee,key:t,name:e,value:e,className:e===p?y.a.activeBtn:y.a.inactiveBtn},e)}))),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(e){var a=(new Date).getTime();z(a),Q(0),L([]),d("visible");var n,r,o,c,m=["+","-","\xd7"],l=function(e,t){return Math.floor(Math.random()*(e-t)+t)};"Easy"===p&&(n=21,r=2,o=2,c=0),"Medium"===p&&(n=52,r=5,o=3,c=0),"Hard"===p&&(n=102,r=11,o=3,c=0),"Genius"===p?(n=1002,r=11,o=3,c=0):_("Easy"),function(e,n,r,o){var c,s=l(e,n),i=l(e,n),u=m[l(r,o)];"+"===u&&(c=s+i),"-"===u&&(c=s-i),"\xd7"===u&&(c=s*i),t.emit("mathHeadTargetGenerated",{question:s+" "+u+" "+i,answer:c,createdAt:a,timeAllowed:2e4})}(n,r,o,c)},className:y.a.createBtn},"Create "+p+" Problem"),r.a.createElement("br",null),r.a.createElement("div",{className:"hidden"===b?y.a.hiddenForm:y.a.visibleForm},"hidden"===b?r.a.createElement("p",null," Countdown timer not yet activated "):r.a.createElement(k,null),r.a.createElement("p",{className:y.a.textWhite},C),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),F==T){var n=(new Date).getTime(),r=Math.round(+n-+q)/1e3,c=20-r;console.log("points: "+c),z(""),L(["\ud83c\udfc6\ud83c\udfc6 You got it! \ud83c\udfc6\ud83c\udfc6",C+" does equal "+F+"!","You scored "+c+" points!","It took you "+r+" seconds"]),Y("green"),B(""),d("hidden"),t.emit("mathHeadTargetAnswered",{socketId:t.id,userName:a,roomName:o,question:C,answer:T,totalTimeTaken:r,points:c.toFixed(3)})}else L(["WRONG!",C+" does not equal "+F+"!"]),Y("red");B(""),g("visible")}},r.a.createElement("input",{type:"text",placeholder:"Enter you answer here",value:F,onChange:function(e){return B(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Submit"}))),r.a.createElement("br",null),r.a.createElement("div",{className:"hidden"===h?y.a.hiddenForm:y.a.visibleForm},D.length>0&&D.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{color:U},key:t},e),r.a.createElement("br",null))}))))}));var M=Object(m.b)((function(e){return{socket:e.socket,userName:e.userName,userScore:e.userScore}}))((function(e){e.roomName;var t=Object(n.useState)(null),a=Object(s.a)(t,2),o=(a[0],a[1],Object(n.useState)("")),c=Object(s.a)(o,2);c[0],c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.entirePage},r.a.createElement("h2",{className:y.a.textWhite},"Wise to Memorize")))})),R=a(155);var G=Object(m.b)((function(e){return{userName:e.userName}}))((function(e){var t=e.socket,a=e.userName,o=e.roomName,c=Object(n.useState)(!1),m=Object(s.a)(c,2),i=(m[0],m[1],Object(n.useState)("hidden")),u=Object(s.a)(i,2),b=u[0],d=u[1],E=Object(n.useState)("hidden"),N=Object(s.a)(E,2),h=N[0],g=N[1],f=Object(n.useState)("Easy"),v=Object(s.a)(f,2),p=v[0],_=v[1],O=Object(n.useState)(""),j=Object(s.a)(O,2),C=j[0],w=j[1],S=Object(n.useState)(""),x=Object(s.a)(S,2),k=x[0],T=x[1],M=Object(n.useState)([]),G=Object(s.a)(M,2),F=G[0],B=G[1],A=Object(n.useState)("white"),W=Object(s.a)(A,2),D=W[0],L=W[1],P=Object(n.useState)(""),I=Object(s.a)(P,2),U=I[0],Y=I[1],V=Object(n.useState)(0),H=Object(s.a)(V,2),q=(H[0],H[1]);Object(n.useEffect)((function(){(null==a||void 0==a||a.length<1||null==o||void 0==o||o.length<1)&&Object(l.b)("/"),t.emit("typeFasterEntered",{userName:a,roomName:o,gameName:"typefastermaster"}),t.on("syncNewUser",(function(e){Object(l.b)("/"+o+"/"+e)})),t.on("sharedTypeFasterTarget",(function(e){console.log("sharedTypeFasterTarget activated:"+e.target),d("hidden"),d("visible"),g("hidden"),w(e.target),Y(e.createdAt)})),t.on("answeredTypeFasterTarget",(function(e){console.log("Data from typeFaster client: "+e.userName),d("hidden"),g("visible"),B([e.userName+" beat you! ","They beat you in"+e.totalTimeTaken+" seconds","They scored "+e.points+" points!","You can get it next time!"]),L("orange")}))}),[t,o,a,"typefastermaster"]);var z=function(e){_(e.target.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.entirePage},r.a.createElement("h3",{className:y.a.textWhite}," ",r.a.createElement("i",null," ",a," "),"  "),r.a.createElement("br",null),r.a.createElement("h2",{className:y.a.textWhite},"Type Faster Master"),r.a.createElement("br",null),r.a.createElement("div",null,["Easy","Medium","Hard","Genius"].map((function(e,t){return r.a.createElement("button",{onClick:z,key:t,name:e,value:e,className:e==p?y.a.activeBtn:y.a.inactiveBtn},e)}))),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){var e,a=(new Date).getTime();Y(a),q(0),B([]),d("visible"),"Easy"===p&&(e=R(2)),"Medium"==p&&(e=R(4)),"Hard"==p&&(e=R(6)),"Genius"==p&&(e=Math.random().toString(36).substring(2,20)+R(4).join(""),console.log("Genius string: "+e)),t.emit("typeFasterTargetGenerated",{target:e,createdAt:a})},className:y.a.createBtn},"Create "+p+" Problem"),r.a.createElement("br",null),r.a.createElement("div",{className:"hidden"==b?y.a.hiddenForm:y.a.visibleForm},r.a.createElement("p",{className:y.a.textWhite}," ",C," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),"Genius"==p&&k==C.join("")){var n=new Date,r=n.getTime();n.getSeconds().toString();var c=Math.round(+r-+U)/1e3,m=40-(+r-+U)/1e3;Y(""),B(["\ud83c\udfc6\ud83c\udfc6 You got it! Genius! \ud83c\udfc6\ud83c\udfc6","You scored "+m+" points!","It took you "+c+" seconds"]),L("green"),T(""),d("hidden"),t.emit("typeFasterTargetAnswered",{socketId:t.id,userName:a,roomName:o,string:C,totalTimeTaken:c,points:m.toFixed(3)})}if("Genius"!=p&&k==C.join("")){var l=(new Date).getTime(),s=Math.round(+l-+U)/1e3,i=20-(+l-+U)/1e3;Y(""),B(["\ud83c\udfc6\ud83c\udfc6 You got it! \ud83c\udfc6\ud83c\udfc6","You scored "+i+" points!","It took you "+s+" seconds"]),L("green"),T(""),d("hidden"),t.emit("typeFasterTargetAnswered",{socketId:t.id,userName:a,roomName:o,string:C,totalTimeTaken:s,points:i})}else B(["WRONG!","You had a typo in there!"]),L("red");T(""),g("visible")}},r.a.createElement("input",{type:"text",placeholder:"Type faster here",value:k,onChange:function(e){return T(e.target.value)},onPaste:function(e){return e.preventDefault()}}),r.a.createElement("button",{name:"submitButton",style:{backgroundColor:"pink"},type:"submit"},"Go!"))),r.a.createElement("br",null),r.a.createElement("div",{className:"hidden"==h?y.a.hiddenForm:y.a.visibleForm},F.length>0&&F.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{color:D},key:t},e),r.a.createElement("br",null))})))))}));var F=Object(m.b)((function(e){return{socket:e.socket,userName:e.userName,userScore:e.userScore}}))((function(e){e.roomName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.entirePage},r.a.createElement("h2",{className:y.a.textWhite}," Little Boxes ")))}));var B=Object(m.b)((function(e){return{userName:e.userName}}))((function(e){e.roomName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.entirePage},r.a.createElement("h2",{className:y.a.textWhite},"Don't Come Inside Me!")))}));var A=Object(m.b)((function(e){return{userName:e.userName}}))((function(e){e.roomName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.entirePage},r.a.createElement("h2",{className:y.a.textWhite}," Drop a Fat Shot ")))})),W=a(9),D=a.n(W),L=a(54),P=a.n(L);var I=Object(m.b)((function(e){return{userName:e.userName,admin:e.admin}}))((function(e){var t=e.dispatch,a=e.userName,o=e.roomName,c=Object(n.useState)((function(){return d()(":8000")})),m=Object(s.a)(c,1)[0],i=Object(n.useState)(!1),u=Object(s.a)(i,2);u[0],u[1];return Object(n.useEffect)((function(){m.emit("enteredGameRoom",{userName:a,roomName:o,gameName:" "}),t({type:"SETSOCKET",socket:m}),t({type:"SETUSERNAME",userName:a}),t({type:"SETROOMNAME",roomName:o}),t({type:"SETGAMENAME",gameName:" "})}),[]),Object(n.useEffect)((function(){return(null===a||a.length<1||void 0===a||null===o||o.length<1||void 0===o)&&Object(l.b)("/"),m.on("setAdmin",(function(e){console.log(e),t({type:"SETADMIN",admin:e})})),m.emit("chatLogUpdate",{userName:a,roomName:o}),m.emit("scoreboardUpdate",{userName:a,roomName:o}),m.on("syncNewUser",(function(e){t({type:"SETADMIN",admin:e.name}),Object(l.b)("/"+o+"/"+e.currentGame)})),m.on("partyNavigator",(function(e){Object(l.b)("/"+e.roomName+"/"+e.gameName)})),function(){m.disconnect()}}),[m,a,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{top:!0,big:!0},r.a.createElement(p,{socket:m,roomName:o}),r.a.createElement(O,{socket:m,roomName:o}),r.a.createElement("div",{className:D.a.contentRow},r.a.createElement("div",{className:y.a.gameComponent},r.a.createElement(l.a,null,r.a.createElement(C,{path:"/",socket:m,roomName:o}),r.a.createElement(T,{path:"/mathhead",socket:m,roomName:o}),r.a.createElement(G,{path:"/typefastermaster",socket:m,roomName:o}),r.a.createElement(M,{path:"/wisetomemorize",socket:m,roomName:o}),r.a.createElement(F,{path:"/littleboxes",socket:m,roomName:o}),r.a.createElement(B,{path:"/dontcomeinsideme",socket:m,roomName:o}),r.a.createElement(A,{path:"/dropafatshot",socket:m,roomName:o}))),r.a.createElement("div",{className:S.a.chatComponent},r.a.createElement(x,{socket:m,roomName:o})))))})),U=a(90);Object(m.b)((function(e){return{socket:e.socket,roomName:e.roomName,gameName:e.gameName,userName:e.userName}}))((function(e){e.socket,e.roomName,e.gameName,e.userName,e.startTime;var t=Object(n.useState)([]),a=Object(s.a)(t,2),o=a[0],c=a[1],m=0,l=o.length%2==0?"Start":"Stop";return r.a.createElement("div",{className:"elapsedTime"},r.a.createElement("p",{style:{color:"white"}},function(){for(var e=0;e<o.length;e+=2){var t=o[e],a=o[e+1]||new Date;m+=a-t}return m/1e3+" seconds"}()),r.a.createElement("button",{onClick:function(e){c([].concat(Object(U.a)(o),[new Date]))},style:{color:"white"}},l))}));var Y=a(34);var V=Object(m.b)((function(e){return{userName:e.userName}}))((function(e){var t=e.dispatch,o=Object(n.useState)({uName:"",rName:"",rPassword:""}),c=Object(s.a)(o,2),m=c[0],b=c[1],d=Object(n.useState)(""),E=Object(s.a)(d,2),N=E[0],h=E[1],g=function(e){b(Object(u.a)({},m,Object(i.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:[D.a.textWhite,D.a.onlyDiv].join(" ")},r.a.createElement("br",null),r.a.createElement("div",{className:D.a.flexColCen},r.a.createElement(Y.a,null,r.a.createElement(Y.a.Item,null,r.a.createElement("img",{height:"420px",alt:"minigameparty.gif",src:a(165)})),r.a.createElement(Y.a.Item,null,r.a.createElement("img",{height:"420px",alt:"mathhead",src:a(166)})),r.a.createElement(Y.a.Item,null,r.a.createElement("img",{height:"420px",alt:"typefastermaster",src:a(167)}))),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:[D.a.textWhite,D.a.onlyDiv,D.a.flexColCen].join(" ")},r.a.createElement("h1",null,"Join the Party, Join the Fun!"),r.a.createElement("p",{className:D.a.textRed},"Please enter your desired nick name and room you wish to enter or create"),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("form",{className:D.a.flexColCen,onSubmit:function(e){e.preventDefault(),m.uName.length>0&&m.rName.length>0?(t({type:"SETUSERNAME",userName:m.uName}),t({type:"SETROOMNAME",roomName:m.rName}),Object(l.b)("/"+m.rName)):h("Please enter both a user and room name")}},r.a.createElement("p",{style:{color:"red"}},N),r.a.createElement("div",{className:D.a.inputRow},r.a.createElement("label",null,"Nick Name: "),r.a.createElement("input",{type:"text",name:"uName",value:m.uName,onChange:g})),r.a.createElement("br",null),r.a.createElement("div",{className:D.a.inputRow},r.a.createElement("label",null,"Room Name:"),r.a.createElement("input",{type:"text",name:"rName",value:m.rName,onChange:g})),r.a.createElement("br",null),r.a.createElement("div",{className:D.a.inputRow},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"rPassword",value:m.rPassword,onChange:g})),r.a.createElement("br",null),r.a.createElement("div",{className:D.a.buttonRow},r.a.createElement("button",{type:"submit",name:"roomButton",value:"enterRoom",className:D.a.prettyBtn},"Enter Room"),r.a.createElement("button",{type:"submit",name:"roomButton",value:"createRoom",className:D.a.prettyBtn},"Create Room"))))))}));var H=Object(m.b)((function(e){return{}}))((function(e){return e.dispatch,r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(V,{path:"/"}),r.a.createElement(I,{path:"/:roomName/*"})))})),q=a(40),z=function(e,t){switch(t.type){case"SETSOCKET":return Object(u.a)({},e,{socket:t.socket});case"SETADMIN":return Object(u.a)({},e,{admin:t.admin});case"SETROOMNAME":return Object(u.a)({},e,{roomName:t.roomName});case"SETGAMENAME":return Object(u.a)({},e,{gameName:t.gameName});case"SETUSERNAME":return Object(u.a)({},e,{userName:t.userName});case"SETSCOREBOARD":return Object(u.a)({},e,{scoreboard:t.scoreboard,userList:t.userList,scoreList:t.scoreList});case"LOGOUT":return Object(u.a)({},e,{socket:null,userName:null,roomName:null,gameName:null});default:return e}},J=Object(q.b)(z,{socket:null,roomName:null,admin:null,userName:null,gameName:null});a(168),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m.a,{store:J},r.a.createElement(H,null)),document.getElementById("minigameapp")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){e.exports={entirePage:"Games_entirePage__1cnte",flexColCen:"Games_flexColCen__39eYA",flexRowCen:"Games_flexRowCen__2XsI6",onlyDiv:"Games_onlyDiv__h4Cq2",gameComponent:"Games_gameComponent__1dDdz",textRed:"Games_textRed__33dc2",textWhite:"Games_textWhite__2rsfO",gameBtn:"Games_gameBtn__3tgiA",buttonMsg:"Games_buttonMsg__gN0yM",focus:"Games_focus__2y6pc",activeBtn:"Games_activeBtn__1EOdD",inactiveBtn:"Games_inactiveBtn__7L0zO",createBtn:"Games_createBtn__1zq-V",hiddenForm:"Games_hiddenForm__s_VAT",visibleForm:"Games_visibleForm__1xiGu"}},31:function(e,t,a){e.exports={chatComponent:"Chat_chatComponent__1WldI",chatBox:"Chat_chatBox__Y5YCr",chatLogMsgs:"Chat_chatLogMsgs__3xJBU",chatFormBox:"Chat_chatFormBox__3uJYu",inputMsg:"Chat_inputMsg__38Ah3",msgLog:"Chat_msgLog__1OGkj",message:"Chat_message__2W5D0",recievedMessage:"Chat_recievedMessage__3Ur7C",sentMessage:"Chat_sentMessage__Np0Yf",container:"Chat_container__7z5hS",buttonMsg:"Chat_buttonMsg__19Sri",focus:"Chat_focus__zdCyw",buttonReset:"Chat_buttonReset__1KgDu",user:"Chat_user__3HVhS"}},84:function(e,t,a){e.exports={entirePage:"LoginReg_entirePage__2n3EE",loginReg:"LoginReg_loginReg__IzJXY",hidden:"LoginReg_hidden__p1j6C",regform:"LoginReg_regform__28i1v"}},9:function(e,t,a){e.exports={flexColCen:"Views_flexColCen__mzneq",flexRowCen:"Views_flexRowCen__3YTGs",contentRow:"Views_contentRow__m3-vG",onlyDiv:"Views_onlyDiv__1DMrm",textWhite:"Views_textWhite__2ZAQU",textRed:"Views_textRed__1IfLO",btn:"Views_btn__35cjE",buttonMsg:"Views_buttonMsg__1Leqh",focus:"Views_focus__2OPqs",activeBtn:"Views_activeBtn__1T9f1",inactiveBtn:"Views_inactiveBtn__oRts5",prettyBtn:"Views_prettyBtn__26K0t",inputRow:"Views_inputRow__3tMPp",buttonRow:"Views_buttonRow__3nuYP"}},91:function(e,t,a){e.exports=a(169)}},[[91,1,2]]]);
//# sourceMappingURL=main.1e1540af.chunk.js.map
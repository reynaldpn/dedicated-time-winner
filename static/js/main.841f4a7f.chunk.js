(this["webpackJsonpdedicated-time-winner"]=this["webpackJsonpdedicated-time-winner"]||[]).push([[0],{30:function(e,t,a){e.exports=a(47)},44:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),s=a.n(i),o=a(20);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(13),l=a(4),m=a(5),u=a(6),d=a(7),p=a(15),f=a(2),v=a.n(f),h=a(8),y=a(17),g=a(11),k=a(1),E=a.n(k),S=(a(43),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.symbol;return r.a.createElement("span",{"aria-hidden":t?"false":"true","aria-label":t||"",className:"emoji",role:"img"},a)}}]),a}(r.a.Component)),N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.focusAtIndex,a=e.index,n=e.item,i=e.mode,s=e.onRemove,o=e.onStart,c=n.activityName,l=n.emoji,m=n.startedAt,u=n.minutes,d=n.taskName;return r.a.createElement("div",{className:"View Edit"===i?"productivity-item-container-edit-mode":"productivity-item-container-main-mode",style:{backgroundColor:t===a?"mediumseagreen":"white"}},r.a.createElement("div",{className:"productivity-item-top-details-container"},r.a.createElement("div",null,r.a.createElement("p",{className:"productivity-item-activity-name",style:{color:t===a?"white":"gray"}},c),r.a.createElement("p",{className:"productivity-item-task-name"},d),""!==m?r.a.createElement("p",{className:"productivity-item-started-at-and-minutes"},"Started at ",m," (",u," minutes)"):null),""!==m?""!==l?r.a.createElement("div",{className:"productivity-item-emoji-background"},r.a.createElement("p",{className:"productivity-item-emoji"},r.a.createElement(S,{symbol:l}))):null:r.a.createElement("div",{className:"productivity-item-options-container"},"Main"===i&&t===a?r.a.createElement("a",{className:"productivity-item-start-button",href:"/dedicated-time-winner/#",onClick:o},"Start"):null,"View Edit"===i?r.a.createElement("a",{className:"productivity-item-remove-button",href:"/dedicated-time-winner/#",onClick:s},"Remove"):null)))}}]),a}(r.a.Component),O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.focusAtIndex,a=e.index,n=e.item,i=e.mode,s=e.onRemove,o=e.onStart,c=n.minutes,l=n.startedAt;return r.a.createElement("div",{className:"View Edit"===i?"break-item-container-edit-mode":"break-item-container-main-mode",style:{backgroundColor:t===a?"darkslateblue":"gray"}},r.a.createElement("div",null,r.a.createElement("p",{className:"break-item-title"},"Break"),""!==l?r.a.createElement("p",{className:"break-item-started-at-and-minutes"},"Started at ",l," (",c," minutes)"):null),""!==l?r.a.createElement("div",{className:"break-item-emoji-background"},r.a.createElement("p",{className:"break-item-emoji"},r.a.createElement(S,{symbol:"\ud83d\udca4"}))):r.a.createElement("div",{className:"break-item-options-container"},"Main"===i&&t===a?r.a.createElement("a",{className:"break-item-start-button",href:"/dedicated-time-winner/#",onClick:o},"Start"):null,"View Edit"===i?r.a.createElement("a",{className:"break-item-remove-button",href:"/dedicated-time-winner/#",onClick:s},"Remove"):null))}}]),a}(r.a.Component),A=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={activityName:"",taskName:""},e.handleActivityNameChange=function(t){e.setState({activityName:t.target.value,taskName:""})},e.handleTaskNameChange=function(t){return e.setState({taskName:t.target.value})},e.onKeyDown=function(t){27===t.keyCode&&setTimeout(e.props.onDismiss,100)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){var e=this.props,t=this.state,a=e.onDismiss,n=e.onAddTask,i=t.activityName,s=t.taskName,o=""!==i.trim()&&""!==s.trim();return r.a.createElement("div",{className:"add-task-modal-main-container"},r.a.createElement(g.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,""===i.trim()?"Add Task":"Add ".concat(i,"'s Task"))),r.a.createElement("div",{className:"add-task-modal-background",onClick:a}),r.a.createElement("div",{className:"add-task-modal-container"},r.a.createElement("div",{className:"add-task-modal-top-content-container"},r.a.createElement("h2",{className:"add-task-modal-title"},"Add Task"),r.a.createElement("a",{href:"/dedicated-time-winner/#",onClick:a},r.a.createElement("p",{className:"add-task-modal-close-button"},"X"))),r.a.createElement("input",{autoFocus:!0,className:"add-task-modal-input",id:"activity-name",name:"activity-name",onChange:this.handleActivityNameChange,placeholder:"Input activity name...",type:"text",value:i}),r.a.createElement("input",{className:"add-task-modal-input",disabled:""===i.trim(),id:"".concat(i.trim(),"-task-name"),name:"".concat(i.trim(),"-task-name"),onChange:this.handleTaskNameChange,placeholder:"Input task name...",style:{backgroundColor:""===i.trim()?"darkgray":"white"},type:"text",value:s}),o?r.a.createElement("a",{className:"add-task-modal-add-button",href:"/dedicated-time-winner/#",onClick:function(){return n(i,s)},style:{backgroundColor:"mediumseagreen"}},"Add"):r.a.createElement("div",{className:"add-task-modal-add-button",style:{backgroundColor:"dimgray"}},"Add")))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}}]),a}(r.a.Component),D=a(23),b={LOCAL_STORAGE_DATA:"v2data",LOCAL_STORAGE_INDEX:"v2index",LOCAL_STORAGE_RUNNING_PROGRESS:"v2running_progress",LOCAL_STORAGE_RUNNING_BREAK_PROGRESS:"v2running_break_progress",LOCAL_STORAGE_RUNNING_BREAK_PROGRESS_DAY_DATE:"v2running_break_progress_day_date",LOCAL_STORAGE_ASSIGNED_COLORS:"v2assigned_colors"},T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={minutes:0,seconds:0,isBreaking:!1,startTime:E()(),progresses:[]},e.isCounting=!0,e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem(b.LOCAL_STORAGE_RUNNING_PROGRESS);case 2:null!==(t=e.sent)?(t=JSON.parse(t),this.setState({startTime:E()(t[t.length-1].startedAt),isBreaking:"break"===t[t.length-1].type}),t.pop(),this.setState({progresses:t})):localStorage.setItem(b.LOCAL_STORAGE_RUNNING_PROGRESS,JSON.stringify([{startedAt:this.state.startTime.toString(),minutes:0,emoji:"",type:"productivity",dayDate:E()().format("YYYY-MM-DD")}])),this.startTickingTheTimer();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=this.state,n=t.currentTask,i=a.minutes,s=a.seconds,o=a.isBreaking;return r.a.createElement("div",{className:"counter-modal-background-container"},r.a.createElement(g.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,this.toTickNumber(i),":",this.toTickNumber(s)," - ",o?"Breaking":n)),r.a.createElement("div",{className:"counter-modal-container",style:{backgroundColor:o?"darkslateblue":"white"}},r.a.createElement("h3",{className:"counter-modal-title",style:{color:o?"white":"gray"}},o?"Breaking...":"Let's go, get them!"),r.a.createElement("h2",{className:"counter-modal-task-name"},n),r.a.createElement("p",{className:"counter",style:{color:o?"white":"gray"}},this.toTickNumber(i),":",this.toTickNumber(s)),r.a.createElement("div",{className:"counter-choice-buttons-container"},[{value:"\ud83d\udca9 Not achieved at all",minimumMinutes:0},{value:"\ud83d\udc0c Just making a progress",minimumMinutes:3},{value:"\ud83c\udfaf Achieved",minimumMinutes:3},{value:"\ud83d\udcaa\ud83c\udffb More than achieved, bro!",minimumMinutes:3}].map((function(t){return i>=t.minimumMinutes&&!o?r.a.createElement("a",{className:"counter-choice-button",href:"/dedicated-time-winner/#",key:JSON.stringify(t),onClick:function(){return e.markProgressAs(t)}},t.value):r.a.createElement("div",{className:"counter-choice-button",key:JSON.stringify(t),style:{opacity:.3}},t.value)})),r.a.createElement("a",{className:"counter-break-button",href:"/dedicated-time-winner/#",onClick:function(){return e.setBreakOrContinue()},style:{backgroundColor:o?"mediumseagreen":"crimson"}},o?"Continue":"Break"))))}},{key:"componentWillUnmount",value:function(){this.isCounting=!1}},{key:"startTickingTheTimer",value:function(){var e=this,t=Math.floor((E()().toDate()-this.state.startTime.toDate())/1e3),a=t%60,n=(t-a)/60;this.setState({minutes:n,seconds:a}),this.isCounting&&setTimeout((function(){return e.startTickingTheTimer()}),100)}},{key:"toTickNumber",value:function(e){return e<10?"0"+e.toString():e.toString()}},{key:"markProgressAs",value:function(){var e=Object(h.a)(v.a.mark((function e(t){var a,n,r,i,s,o,c,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem(b.LOCAL_STORAGE_RUNNING_PROGRESS);case 2:return a=e.sent,n=this.props,r=this.state,i=r.minutes,s=r.progresses,o=r.startTime,c={startedAt:o.format("HH:mm"),minutes:i,emoji:t.value.split(" ")[0].trim(),type:"productivity"},null!==a&&(a=JSON.parse(a),c.dayDate=a[a.length-1].dayDate),l=JSON.parse(JSON.stringify(s)).concat(c),e.next=10,localStorage.removeItem(b.LOCAL_STORAGE_RUNNING_PROGRESS);case 10:n.sendProgresses(l),this.setState({progresses:l});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setBreakOrContinue",value:function(){var e=Object(h.a)(v.a.mark((function e(){var t,a,n,r,i,s,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.isBreaking,n=t.minutes,r=t.progresses,i=t.startTime,s=JSON.parse(JSON.stringify(r)),o={startedAt:i.format("HH:mm"),minutes:n},e.next=6,localStorage.getItem(b.LOCAL_STORAGE_RUNNING_PROGRESS);case 6:if(null!==(c=e.sent)&&(c=JSON.parse(c),o.dayDate=c[c.length-1].dayDate),a){e.next=14;break}return e.next=11,this.setState({progresses:s.concat(Object(D.a)({},o,{emoji:"",type:"productivity"}))});case 11:localStorage.setItem(b.LOCAL_STORAGE_RUNNING_PROGRESS,JSON.stringify(this.state.progresses.concat({startedAt:E()().toString(),minutes:0,type:"break",dayDate:E()().format("YYYY-MM-DD")}))),e.next=17;break;case 14:return e.next=16,this.setState({progresses:s.concat(Object(D.a)({},o,{type:"break"}))});case 16:localStorage.setItem(b.LOCAL_STORAGE_RUNNING_PROGRESS,JSON.stringify(this.state.progresses.concat({startedAt:E()().toString(),minutes:0,emoji:"",type:"productivity",dayDate:E()().format("YYYY-MM-DD")})));case 17:this.setState({isBreaking:!a,minutes:0,seconds:0,startTime:E()()});case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(r.a.Component),_=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={minutes:0,seconds:0,startTime:E()()},e.isCounting=!0,e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem(b.LOCAL_STORAGE_RUNNING_BREAK_PROGRESS);case 2:return t=e.sent,e.next=5,localStorage.getItem(b.LOCAL_STORAGE_RUNNING_BREAK_PROGRESS_DAY_DATE);case 5:null===e.sent&&localStorage.setItem(b.LOCAL_STORAGE_RUNNING_BREAK_PROGRESS_DAY_DATE,E()().format("YYYY-MM-DD")),null!==t?this.setState({startTime:E()(t)}):localStorage.setItem(b.LOCAL_STORAGE_RUNNING_BREAK_PROGRESS,E()().toString()),this.startTickingTheTimer();case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.minutes,n=t.seconds;return r.a.createElement("div",{className:"break-counter-modal-background-container"},r.a.createElement(g.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,this.toTickNumber(a),":",this.toTickNumber(n)," - Breaking")),r.a.createElement("div",{className:"break-counter-modal-container"},r.a.createElement("h3",{className:"break-counter-modal-title"},"Breaking..."),r.a.createElement("p",{className:"counter",style:{color:"white"}},this.toTickNumber(a),":",this.toTickNumber(n)),r.a.createElement("a",{className:"break-counter-button",href:"/dedicated-time-winner/#",onClick:function(){return e.done()},style:{backgroundColor:"mediumseagreen"}},"Done")))}},{key:"componentWillUnmount",value:function(){this.isCounting=!1}},{key:"startTickingTheTimer",value:function(){var e=this,t=Math.floor((E()().toDate()-this.state.startTime.toDate())/1e3),a=t%60,n=(t-a)/60;this.setState({minutes:n,seconds:a}),this.isCounting&&setTimeout((function(){return e.startTickingTheTimer()}),100)}},{key:"toTickNumber",value:function(e){return e<10?"0"+e.toString():e.toString()}},{key:"done",value:function(){var e=Object(h.a)(v.a.mark((function e(){var t,a,n,r,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem(b.LOCAL_STORAGE_RUNNING_BREAK_PROGRESS);case 2:return t=this.props,a=this.state,n=a.startTime,r=a.minutes,e.next=6,localStorage.getItem(b.LOCAL_STORAGE_RUNNING_BREAK_PROGRESS_DAY_DATE);case 6:return i=e.sent,e.next=9,localStorage.removeItem(b.LOCAL_STORAGE_RUNNING_BREAK_PROGRESS_DAY_DATE);case 9:t.sendBreakProgress(n.format("HH:mm"),i,r);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(r.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:[],maxSpendMinutes:360},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.calculateMaxSpendTime()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{bottom:0,display:"flex",justifyContent:"center",left:0,position:"fixed",right:0,top:0}},r.a.createElement(g.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"This week's performance chart")),r.a.createElement("a",{href:"/dedicated-time-winner/#",onClick:this.props.onDismiss,style:{backgroundColor:"rgba(0,0,0,0.8)",bottom:0,left:0,position:"absolute",right:0,top:0}}),r.a.createElement("div",{style:{bottom:80,display:"flex",position:"absolute",top:80,zIndex:1}},r.a.createElement("div",{style:{backgroundColor:"white",borderRadius:7,display:"flex",minWidth:250,padding:20}},this.getPerformanceData().map((function(t,a){return r.a.createElement("div",{key:E()(t.date).format("DD/MM"),style:{alignItems:"center",display:"flex",flexDirection:"column",marginLeft:0===a?0:10}},r.a.createElement("a",{href:"#progresses"},r.a.createElement("p",{style:{color:"black",fontSize:12}},E()(t.date).format("DD/MM"))),r.a.createElement("div",{style:{alignItems:"flex-end",display:"flex",marginTop:10,minHeight:"calc(100% - 20px)"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column-reverse",height:Number(e.getTotalThisDateDataValue(t)/e.state.maxSpendMinutes*100).toString()+"%",width:30}},t.values.map((function(e){return r.a.createElement("a",{href:"#progresses",key:e.id,onClick:function(){setTimeout((function(){if("productivity"===e.type){var t="".concat(e.activityName," (").concat(e.spendMinutes," mins)\n\n").concat(e.taskName);""!==e.progress&&(t="".concat(t,"\nProgress: ").concat(e.progress)),alert(t)}else"break"===e.type&&alert("Break (".concat(e.spendMinutes," mins)"))}),100)},style:{alignItems:"center",backgroundColor:e.color,border:"2px dotted black",color:"white",display:"flex",flexDirection:"column",fontSize:12,fontWeight:"bold",flex:e.spendMinutes,justifyContent:"center",textShadow:"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}},r.a.createElement("p",null,e.spendMinutes),r.a.createElement("p",null,e.progress))})))))})))))}},{key:"getPerformanceData",value:function(){var e,t=this.props,a=t.colorsData,n=t.nativeData,r=[],i=Object(p.a)(n);try{for(i.s();!(e=i.n()).done;){var s=e.value,o=null;for(var c in r)if(r[c].date===s.dayDate){o=c;break}var l={};"productivity"===s.type?l={color:void 0===a?"gray":a[s.activityName],start:s.startedAt,spendMinutes:s.minutes,activityName:s.activityName,taskName:s.taskName,progress:s.emoji,type:s.type,id:s.id}:"break"===s.type&&(l={color:"darkslateblue",start:s.startedAt,spendMinutes:s.minutes,activityName:"Break",taskName:"",progress:"",type:s.type,id:s.id}),null===o?r.push({date:s.dayDate,values:[l]}):(r[o].values.push(l),r[o].values.sort((function(e,t){return e.start>t.start?1:t.start>e.start?-1:0})))}}catch(S){i.e(S)}finally{i.f()}for(var m=[],u=0;u<7;u++){var d=new Date;d.setDate(d.getDate()-u),m.unshift({date:E()(d).format("YYYY-MM-DD"),values:[]})}for(var f=0,v=m;f<v.length;f++){var h,y=v[f],g=Object(p.a)(r);try{for(g.s();!(h=g.n()).done;){var k=h.value;y.date===k.date&&(y.values=k.values)}}catch(S){g.e(S)}finally{g.f()}}return m}},{key:"calculateMaxSpendTime",value:function(){var e,t=this.state.maxSpendMinutes,a=Object(p.a)(this.getPerformanceData());try{for(a.s();!(e=a.n()).done;){var n=e.value;this.getTotalThisDateDataValue(n)>t&&(t=this.getTotalThisDateDataValue(n))}}catch(r){a.e(r)}finally{a.f()}this.setState({maxSpendMinutes:t})}},{key:"getTotalThisDateDataValue",value:function(e){var t,a=0,n=Object(p.a)(e.values);try{for(n.s();!(t=n.n()).done;){a+=t.value.spendMinutes}}catch(r){n.e(r)}finally{n.f()}return a}}]),a}(r.a.Component),R=["#1d8ec2","#80c6e2","#3c8172","#6b740c","#edc112","#cd6242","#7f2937","#c41818","#eb4166","#e5a6c9","#2c3f8c","#2e3659"];function I(){return R[function(e,t){var a=Math.ceil(e),n=Math.floor(t);return Math.floor(Math.random()*(n-a))+a}(0,R.length)]}var w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).latestId=0,e.progresses=[],e.activityName="",e.taskName="",e.state={addTaskToIndex:null,colorsData:void 0,data:[],index:null,isBreakProcessingCount:!1,isProcessingCount:!1,isShowPerformanceChart:!1,mode:"Main",selectedDate:E()().format("YYYY-MM-DD")},e.sendProgresses=function(){var t=Object(h.a)(v.a.mark((function t(a){var n,r,i,s,o,c,l,m;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(c in n=Object(y.a)(e),r=n.state,i=r.data,s=r.index,e.setState({isProcessingCount:!1}),o=JSON.parse(JSON.stringify(i)),e.activityName=o[s].activityName,e.taskName=o[s].taskName,e.progresses=a,e.progresses)l=e.progresses[c],0!==Number(c)&&(m=l.type,e.latestId++,"productivity"===m?o.splice(s,0,{type:"productivity",activityName:e.activityName,taskName:e.taskName,startedAt:"",minutes:0,emoji:"",id:e.latestId}):"break"===m&&o.splice(s,0,{type:"break",startedAt:"",minutes:0,id:e.latestId}));return e.setState({selectedDate:E()().format("YYYY-MM-DD"),index:s+e.progresses.length-1,data:o}),e.updateProgresses(o,s+e.progresses.length-1),t.next=12,e.assignColorIfHaveNoColor(o[s].activityName);case 12:e.updateColorsData();case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.sendBreakProgress=function(t,a,n){var r=Object(y.a)(e).state,i=r.data,s=r.index,o=JSON.parse(JSON.stringify(i)),c=s-1<0?null:s-1;o[s].startedAt=t,o[s].minutes=n,o[s].dayDate=a,e.setState({selectedDate:E()().format("YYYY-MM-DD"),isBreakProcessingCount:!1,data:o,index:c}),null!==c?localStorage.setItem(b.LOCAL_STORAGE_INDEX,c):localStorage.removeItem(b.LOCAL_STORAGE_INDEX),localStorage.setItem(b.LOCAL_STORAGE_DATA,JSON.stringify(o))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.addTaskToIndex,n=t.colorsData,i=t.data,s=t.index,o=t.mode,c=t.isProcessingCount,l=t.isBreakProcessingCount,m=t.isShowPerformanceChart,u=t.selectedDate;return r.a.createElement("div",{className:"home-container",style:{backgroundColor:"Main"===o?"black":"rgb(50,50,50)"}},r.a.createElement(g.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Main"===o?"Main Area":"View Edit Area - ".concat(E()(u).format("DD MMMM YYYY")))),r.a.createElement("div",{className:"home-title-container"},r.a.createElement("h1",{style:{color:"white",opacity:"Main"===o&&null!==s&&u===E()().format("YYYY-MM-DD")?.2:1}},"Dedicated Time Winner")),r.a.createElement("div",{className:"top-buttons-container"},"View Edit"===o?r.a.createElement("a",{className:"top-button",href:"/dedicated-time-winner/#",onClick:function(){return e.seeMyPerformance()},style:{opacity:"Main"===o&&null!==s&&u===E()().format("YYYY-MM-DD")?.2:1}},"See my performance"):null,r.a.createElement("a",{className:"top-button",href:"/dedicated-time-winner/#",onClick:function(){"View Edit"===o&&e.setState({selectedDate:E()().format("YYYY-MM-DD")}),e.setState({mode:"View Edit"===o?"Main":"View Edit"})},style:{opacity:"Main"===o&&null!==s&&u===E()().format("YYYY-MM-DD")?.2:1}},"View Edit"===o?"Back to Main Area":"Go to View-Edit Area")),"View Edit"===o?r.a.createElement("div",{className:"date-indicator-container"},r.a.createElement("a",{className:"date-navigator",href:"/dedicated-time-winner/#",onClick:function(){return e.incrementSelectedDateWith(-1)}},"< Previous day"),r.a.createElement("p",{className:"date-indicator",href:"/dedicated-time-winner/#"},E()(u).format("DD MMMM YYYY")),u===E()().format("YYYY-MM-DD")?r.a.createElement("div",{style:{marginLeft:20,marginRight:20,width:92.5}}):r.a.createElement("a",{className:"date-navigator",href:"/dedicated-time-winner/#",onClick:function(){return e.incrementSelectedDateWith(1)}},"Next day >")):null,r.a.createElement("div",{className:"home-content-container"},"View Edit"===o&&u===E()().format("YYYY-MM-DD")?r.a.createElement("div",{className:"add-item-container",style:{marginBottom:30}},r.a.createElement("div",{className:"add-item"},r.a.createElement("a",{href:"/dedicated-time-winner/#",onClick:function(){return e.addTask(0)}},r.a.createElement("p",null,"+ Add Task"))),r.a.createElement("div",{className:"add-item-divider"}),r.a.createElement("div",{className:"add-item"},r.a.createElement("a",{href:"/dedicated-time-winner/#",onClick:function(){return e.addBreak(0)}},r.a.createElement("p",null,"+ Add Break")))):null,i.map((function(t,a){return r.a.createElement("div",{key:t.id},t.dayDate===u||u===E()().format("YYYY-MM-DD")&&void 0===t.dayDate?r.a.createElement(r.a.Fragment,null,t.id!==e.getTodayTopMostItemId()?"View Edit"===o&&null!=s&&a<=s+1?r.a.createElement("div",{className:"item-filler"},r.a.createElement("div",{className:"add-item-filler-container"},r.a.createElement("div",{className:"add-item",style:{margin:0}},r.a.createElement("a",{href:"/dedicated-time-winner/#",onClick:function(){return e.addTask(a)}},r.a.createElement("p",null,"+ Add Task"))),r.a.createElement("div",{className:"add-item-divider"}),r.a.createElement("div",{className:"add-item",style:{margin:0}},r.a.createElement("a",{href:"/dedicated-time-winner/#",onClick:function(){return e.addBreak(a)}},r.a.createElement("p",null,"+ Add Break"))))):r.a.createElement("div",{className:"item-filler-permanent"}):null,r.a.createElement("div",{style:{opacity:("Main"===o&&null!==s&&s!==a||"View Edit"===o&&null!==s&&s<a)&&u===E()().format("YYYY-MM-DD")?.2:1}},"productivity"===t.type?r.a.createElement(N,{focusAtIndex:s,index:a,item:t,mode:o,onRemove:function(){return e.removeItem(a)},onStart:function(){return e.setState({isProcessingCount:!0})}}):r.a.createElement(O,{focusAtIndex:s,index:a,item:t,mode:o,onRemove:function(){return e.removeItem(a)},onStart:function(){return e.setState({isBreakProcessingCount:!0})}}))):null)})),"View Edit"===o&&i.length>0&&s===i.length-1&&u===E()().format("YYYY-MM-DD")?r.a.createElement("div",{className:"add-item-container",style:{marginTop:30}},r.a.createElement("div",{className:"add-item"},r.a.createElement("a",{href:"/dedicated-time-winner/#",onClick:function(){return e.addTask(i.length)}},r.a.createElement("p",null,"+ Add Task"))),r.a.createElement("div",{className:"add-item-divider"}),r.a.createElement("div",{className:"add-item"},r.a.createElement("a",{href:"/dedicated-time-winner/#",onClick:function(){return e.addBreak(i.length)}},r.a.createElement("p",null,"+ Add Break")))):null),m?r.a.createElement(C,{colorsData:n,nativeData:i,onDismiss:function(){return e.setState({isShowPerformanceChart:!1})}}):null,c?r.a.createElement(T,{currentTask:i[s].taskName,sendProgresses:this.sendProgresses}):null,l?r.a.createElement(_,{sendBreakProgress:this.sendBreakProgress}):null,null!==a?r.a.createElement(A,{onAddTask:function(t,a){return e.applyAddTask(t,a)},onDismiss:function(){return e.setState({addTaskToIndex:null})}}):null)}},{key:"getTodayTopMostItemId",value:function(){var e=-1,t=JSON.parse(JSON.stringify(this.state.data));for(var a in t.reverse(),t)this.state.selectedDate===E()().format("YYYY-MM-DD")?void 0!==t[a].dayDate&&t[a].dayDate!==this.state.selectedDate||(e=t[a].id):t[a].dayDate===this.state.selectedDate&&(e=t[a].id);return e}},{key:"loadData",value:function(){var e=Object(h.a)(v.a.mark((function e(){var t,a,n,r,i,s,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem(b.LOCAL_STORAGE_DATA);case 2:return t=e.sent,e.next=5,localStorage.getItem(b.LOCAL_STORAGE_INDEX);case 5:return a=e.sent,e.next=8,localStorage.getItem(b.LOCAL_STORAGE_RUNNING_PROGRESS);case 8:return n=e.sent,e.next=11,localStorage.getItem(b.LOCAL_STORAGE_RUNNING_BREAK_PROGRESS);case 11:if(r=e.sent,this.updateColorsData(),null!==t){t=JSON.parse(t),i=Object(p.a)(t);try{for(i.s();!(s=i.n()).done;)o=s.value,this.latestId<o.id&&(this.latestId=o.id+1)}catch(c){i.e(c)}finally{i.f()}this.setState({data:t})}null!==a&&this.setState({index:Number(a)}),null!==n&&this.setState({isProcessingCount:!0}),null!==r&&this.setState({isBreakProcessingCount:!0});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeItem",value:function(e){var t=this.state,a=t.data,n=t.index,r=[];for(var i in a)e!==Number(i)&&r.push(a[i]);var s=e>n?n:n>0?n-1:null;this.setState({data:r,index:s}),null!==s?localStorage.setItem(b.LOCAL_STORAGE_INDEX,s):localStorage.removeItem(b.LOCAL_STORAGE_INDEX),localStorage.setItem(b.LOCAL_STORAGE_DATA,JSON.stringify(r))}},{key:"addTask",value:function(e){this.setState({addTaskToIndex:e})}},{key:"addBreak",value:function(){var e=Object(h.a)(v.a.mark((function e(t){var a,n,r,i,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=this.state,n=a.data,r=a.index,i=JSON.parse(JSON.stringify(n)),this.latestId++,i.splice(t,0,{type:"break",startedAt:"",minutes:0,id:this.latestId}),s=null==r?0:r+1,this.setState({data:i,index:s}),null!==s?localStorage.setItem(b.LOCAL_STORAGE_INDEX,s):localStorage.removeItem(b.LOCAL_STORAGE_INDEX),localStorage.setItem(b.LOCAL_STORAGE_DATA,JSON.stringify(i));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"applyAddTask",value:function(){var e=Object(h.a)(v.a.mark((function e(t,a){var n,r,i,s,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.state,r=n.addTaskToIndex,i=n.data,s=n.index,o=JSON.parse(JSON.stringify(i)),this.latestId++,o.splice(r,0,{type:"productivity",activityName:t,taskName:a,startedAt:"",minutes:0,emoji:"",id:this.latestId}),c=null==s?0:s+1,this.setState({data:o,index:c,addTaskToIndex:null}),null!==c?localStorage.setItem(b.LOCAL_STORAGE_INDEX,c):localStorage.removeItem(b.LOCAL_STORAGE_INDEX),localStorage.setItem(b.LOCAL_STORAGE_DATA,JSON.stringify(o));case 9:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"assignColorIfHaveNoColor",value:function(){var e=Object(h.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem(b.LOCAL_STORAGE_ASSIGNED_COLORS);case 2:return a=e.sent,n={},null!==a?void 0===(n=JSON.parse(a))[t]&&(n[t]=I()):n[t]=I(),e.next=7,localStorage.setItem(b.LOCAL_STORAGE_ASSIGNED_COLORS,JSON.stringify(n));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateProgresses",value:function(e,t){var a=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=t,i=this.progresses[n];if(0===Number(n))e[r].startedAt=i.startedAt,e[r].minutes=i.minutes,e[r].emoji=i.emoji,e[r].dayDate=i.dayDate;else{var s=i.type;"productivity"===s?(e[r].startedAt=i.startedAt,e[r].minutes=i.minutes,e[r].emoji=i.emoji,e[r].dayDate=i.dayDate):"break"===s&&(e[r].startedAt=i.startedAt,e[r].minutes=i.minutes,e[r].dayDate=i.dayDate)}--r<0&&(r=null),this.setState({data:e,index:r}),n<this.progresses.length-1?setTimeout((function(){return a.updateProgresses(e,r,Number(n)+1)}),150):(r?localStorage.setItem(b.LOCAL_STORAGE_INDEX,r):localStorage.removeItem(b.LOCAL_STORAGE_INDEX),localStorage.setItem(b.LOCAL_STORAGE_DATA,JSON.stringify(e)))}},{key:"seeMyPerformance",value:function(){this.setState({isShowPerformanceChart:!0})}},{key:"updateColorsData",value:function(){var e=Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem(b.LOCAL_STORAGE_ASSIGNED_COLORS);case 2:null!==(t=e.sent)&&(t=JSON.parse(t),this.setState({colorsData:t}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"incrementSelectedDateWith",value:function(e){var t=new Date(this.state.selectedDate);t.setDate(t.getDate()+e),this.setState({selectedDate:E()(t).format("YYYY-MM-DD")})}}]),a}(r.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return a(44),r.a.createElement(w,null)}}]),n}(r.a.Component);s.a.render(r.a.createElement(o.a,null,r.a.createElement(c.c,null,r.a.createElement(x,null),r.a.createElement(c.a,{to:"/dedicated-time-winner/#"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.841f4a7f.chunk.js.map
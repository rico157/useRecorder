(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(6),i=n.n(c),o=(n(16),n(2)),s=n(3),u=n.n(s),d=n(4);function f(){return(f=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0});case 2:return t=e.sent,e.abrupt("return",new MediaRecorder(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),i=Object(o.a)(c,2),s=i[0],u=i[1],d=Object(r.useState)(null),b=Object(o.a)(d,2),p=b[0],v=b[1];Object(r.useEffect)((function(){if(null!==p){s?p.start():p.stop();var e=function(e){a(URL.createObjectURL(e.data))};return p.addEventListener("dataavailable",e),function(){return p.removeEventListener("dataavailable",e)}}s&&function(){return f.apply(this,arguments)}().then(v,console.error)}),[p,s]);return[n,s,function(){u(!0)},function(){u(!1)}]};n(18);var p=n(7),v=n(8),j=n(11),l=n(10),O=n(1),g=(a.a.Component,n(9)),m=(navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){Object(d.a)(u.a.mark((function e(){var t,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 2:return t=e.sent,(n=new g.RecordRTCPromisesHandler(t,{type:"audio",mimeType:"audio/mp3"})).startRecording(),r=function(e){return new Promise((function(t){return setTimeout(t,e)}))},e.next=8,r(3e3);case 8:return e.next=10,n.stopRecording();case 10:return e.next=12,n.getBlob();case 12:c=e.sent,console.log(c),a(URL.createObjectURL(c));case 15:case"end":return e.stop()}}),e)})))()}),[]),Object(O.jsxs)("div",{children:[JSON.stringify(n),Object(O.jsx)("audio",{controls:!0,src:n}),"mp3"]})});var h=function(){var e=b(),t=Object(o.a)(e,4);return t[0],t[1],t[2],t[3],Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(m,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(h,{})}),document.getElementById("root")),x()}},[[22,1,2]]]);
//# sourceMappingURL=main.b0f639ad.chunk.js.map
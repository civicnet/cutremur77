(this.webpackJsonpcutremur=this.webpackJsonpcutremur||[]).push([[0],{196:function(e,t){},290:function(e,t,a){e.exports=a(410)},295:function(e,t,a){},296:function(e,t,a){},405:function(e,t){},410:function(e,t,a){"use strict";a.r(t);var n,r,l=a(1),c=a.n(l),o=a(43),i=a.n(o),s=(a(295),a(12)),m=a(47),u=a(0),f=(a(296),a(442)),p=a(260),d=a.n(p),h=a(261),g=a.n(h),E=a(439),b=a(465),v=a(173),O=a(443),y=a(455),w=a(467);!function(e){e.EW="EW",e.NS="NS",e.Z="Z"}(n||(n={})),function(e){e.P="P",e.S="S"}(r||(r={}));var L=a(13),N=a.n(L),S=a(26),j=a(134),x=a.n(j),C=a(117),A=function(e){return"https://cdn.jsdelivr.net/gh/civicnet/cutremur77@latest/public/data/".concat(e)};function V(e,t){return{type:"RECEIVE_ACCELERATION",direction:e,values:t}}function k(e,t){return{type:"RECEIVE_WAVE",waveType:e,waveData:t}}var P,Z=a(96),M=(P={},Object(u.a)(P,n.EW,"#c43a31"),Object(u.a)(P,n.NS,"#eceac7"),Object(u.a)(P,n.Z,"#c0978d"),P),R=Object(Z.b)((function(e){return{data:e.data}}),(function(e){return{fetchAccelerationAction:function(){return e(function(){var e=Object(S.a)(N.a.mark((function e(t,a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a().acceleration){e.next=2;break}return e.abrupt("return",Promise.resolve());case 2:Object.keys(n).forEach((function(e){var a=0;x()(A("".concat(e.toLocaleLowerCase(),"_min.json"))).node("!.*",(function(e){return 10===a?(a=0,e):(a++,x.a.drop)})).done((function(a){var n=a.map((function(t){return t[e.toLowerCase()]})).filter((function(e){return!!e}));t(V(e,Object(C.a)(n)))}))}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.fetchAccelerationAction;return Object(l.useEffect)((function(){t()}),[t]),e.data.acceleration.EW.size&&e.data.acceleration.NS.size&&e.data.acceleration.Z.size?c.a.createElement("div",{style:Object(m.a)({},e.style,{flexDirection:"column"})},Object.keys(e.data.acceleration).map((function(t,a){return c.a.createElement("div",{key:t},c.a.createElement("span",{style:{position:"absolute",top:20*a,left:"-70%",fontSize:12,color:M[t],pointerEvents:"none"}},"Accelera\u021bie ",t," (cm/s",c.a.createElement("sup",null,"2"),")"),c.a.createElement(y.a,{height:25,width:400,data:e.data.acceleration[t].toJS(),containerComponent:c.a.createElement(w.a,{responsive:!0,height:25}),padding:0,style:{data:{stroke:M[t],strokeWidth:1.5},parent:{position:"absolute",top:20*a,zIndex:3-a}}}))}))):null})),_=a(19),T=Object(E.a)((function(e){return Object(b.a)({root:{width:2,height:"100%",background:"#fff",position:"absolute",zIndex:100},topNotch:{position:"absolute",top:0,left:-9,width:0,height:0,borderLeft:"10px solid transparent",borderRight:"10px solid transparent",borderTop:"10px solid #fff"},bottomNotch:{position:"absolute",bottom:0,left:-9,width:0,height:0,borderLeft:"10px solid transparent",borderRight:"10px solid transparent",borderBottom:"10px solid #fff"}})})),I=function(e){var t=T();return c.a.createElement("div",{className:t.root,style:{left:"calc(".concat(e.progress,"% - 3px)")}},c.a.createElement("div",{className:t.topNotch}),c.a.createElement("div",{className:t.bottomNotch}))},W=Object(E.a)((function(e){return Object(b.a)({root:{flexGrow:1,display:"flex",position:"relative"},bar:{flex:1,height:20,alignSelf:"flex-end",borderTop:"2px dashed #3A3630",flexDirection:"row",justifyContent:"space-between",display:"flex",paddingTop:4},barLabels:{display:"inline-block",color:"#fff",fontSize:12,opacity:.7,cursor:"pointer"},barLabelsUnit:{fontSize:10},activeBarLabel:{fontWeight:"bold",opacity:1}})})),z=function(e){var t=W();return c.a.createElement("div",{className:t.root},e.children,c.a.createElement("div",{className:t.bar},Array.from(Array(F/10+1).keys()).map((function(a){var n=10*a;return c.a.createElement(v.a,{key:"timestamp-".concat(a),onClick:function(){return e.jumpToTime(n)},className:Object(_.a)(t.barLabels,n<e.timeElapsed?t.activeBarLabel:null),component:"span"},n||"00",c.a.createElement(v.a,{className:t.barLabelsUnit,component:"span"},"S"))}))),c.a.createElement(I,{progress:e.progress}))};var B=a(259),H=a.n(B),D=Object(E.a)((function(e){return Object(b.a)({root:{position:"absolute",background:"#5B554D",width:"60vw",bottom:20,left:"20vw",padding:8,paddingRight:20},timelineContents:{display:"flex",flex:1,height:84},title:{color:"#38342F",textAlign:"left",fontWeight:"bold",fontSize:12,marginBottom:12,textTransform:"uppercase"},debug:{position:"absolute",bottom:20,left:20,textAlign:"left",minWidth:200,minHeight:100},controls:{height:"100%",alignSelf:"center",justifySelf:"center",minWidth:80,position:"relative"},clock:{fontSize:12,fontWeight:"bold",position:"absolute",width:"100%",bottom:-4}})})),F=80,U=Object(Z.b)((function(e){return{ui:e.ui}}),(function(e){return{play:function(){return e({type:"CONTROLS_PLAY"})},pause:function(){return e({type:"CONTROLS_PAUSE"})},stop:function(){return e({type:"CONTROLS_STOP"})},incrementTick:function(){return e({type:"CONTROLS_INC_TICK"})}}}))((function(e){var t=D(),a=c.a.useState(600),n=Object(s.a)(a,2),r=n[0],l=n[1];c.a.useEffect((function(){e.onAnimationFrame(r);var t=null;return e.ui.isPlaying?t=setInterval((function(){l(r+4),.05*r>=F&&e.pause()}),20):!e.ui.isPlaying&&0!==r&&t&&clearInterval(t),function(){return clearInterval(t)}}));var o=.05*r,i=100*o/F,m=4700/F,u=3300/F,p=2600/F,h=4200/F,E=i-h,b=E>0&&E<33&&e.ui.isPlaying,y=new Date("1977-03-04 21:20:26");y.setSeconds(y.getSeconds()+o);return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{className:t.root,style:{}},c.a.createElement(v.a,{component:"h3",className:t.title},"Propagare seism 1977"),c.a.createElement("div",{className:t.timelineContents},c.a.createElement("div",{className:t.controls},c.a.createElement(O.a,{"aria-label":"playback",onClick:function(){e.ui.isPlaying?e.pause():e.play()}},e.ui.isPlaying?c.a.createElement(g.a,{style:{fontSize:48},htmlColor:"#eceac7"}):c.a.createElement(d.a,{style:{fontSize:48},htmlColor:"#eceac7"})),c.a.createElement(v.a,{className:t.clock},y.getHours(),":",y.getMinutes(),":"," ",c.a.createElement(v.a,{style:{color:"#fff",fontSize:12},component:"span"},y.getSeconds()))),c.a.createElement(z,{progress:i,timeElapsed:o,jumpToTime:function(t){e.ui.isPlaying&&e.pause(),l(t/.05),e.onAnimationFrame(r)}},c.a.createElement("div",null,c.a.createElement(R,{style:{position:"absolute",top:0,left:"".concat(u,"%"),width:"".concat(m,"%")}}),c.a.createElement("div",{style:{height:2,background:"#fff",width:"".concat(p,"%"),left:"".concat(h,"%"),position:"absolute"}},c.a.createElement(H.a,{url:"/cutremur77/data/audio.mp3",playStatus:b?"PLAYING":"PAUSED",autoLoad:!0,loop:!1,volume:20,playFromPosition:b?void 0:1e3*E})))))))})),J=a(269),X=a(456),q=a(459),Y=a(272),G=a(460),K=a(238),$={width:window.innerWidth,height:window.innerHeight,longitude:23.5602928,latitude:46.0291793,zoom:6,maxZoom:20,minZoom:1,bearing:0,pitch:0},Q=[{coords:{lat:44.44,long:26.16},name:"Sta\u021bia seismic\u0103 INCERC"},{coords:{lat:45.77,long:26.76},name:"Epicentru"}],ee=Object(Z.b)((function(e){return{data:e.data}}),(function(e){return{fetchWaveAction:function(){return e(function(){var e=Object(S.a)(N.a.mark((function e(t,a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a().waves){e.next=2;break}return e.abrupt("return",Promise.resolve());case 2:x()(A("travel_time_p.geojson")).done((function(e){t(k(r.P,e))})),x()(A("travel_time_s.geojson")).done((function(e){t(k(r.S,e))}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.fetchWaveAction;Object(l.useEffect)((function(){t()}),[t]);var a=.05*e.animationFrame,n=new q.a({id:"p-geojson-layer",data:e.data.waves[r.P],pickable:!1,stroked:!0,filled:!1,lineWidthMinPixels:1,getLineColor:function(e){var t=e.properties.Sec_P<a&&e.properties.Sec_P>a-2?255:0;return e.properties.Sec_P<a-2&&(t=30),e.properties.Sec_P<a-20&&(t=10),[200,160,80,t]},lineWidthUnits:"pixels",getLineWidth:function(e){return e.properties.Sec_P<a&&e.properties.Sec_P>a-2?2:1},updateTriggers:{getLineColor:[a],getLineWidth:[a]},transitions:{getLineColor:{duration:500,easing:K.a,enter:function(e){return[e[0],e[1],e[2],0]}}}}),o=new q.a({id:"s-geojson-layer",data:e.data.waves[r.S],pickable:!1,stroked:!0,filled:!1,lineWidthMinPixels:1,getLineColor:function(e){var t=e.properties.Sec_S<a&&e.properties.Sec_S>a-2?255:0;return e.properties.Sec_S<a-2&&(t=30),e.properties.Sec_S<a-20&&(t=10),[200,80,80,t]},lineWidthUnits:"pixels",getLineWidth:function(e){return e.properties.Sec_S<a&&e.properties.Sec_S>a-2?2:1},updateTriggers:{getLineColor:[a],getLineWidth:[a]},transitions:{getLineColor:{duration:500,easing:K.a,enter:function(e){return[e[0],e[1],e[2],0]}}}}),i=new Y.a({id:"scatterplot-layer",data:Q,pickable:!1,filled:!0,radiusScale:15,radiusMinPixels:1,radiusMaxPixels:100,getPosition:function(e){return[e.coords.long,e.coords.lat]},getFillColor:[255,0,0],getRadius:300}),s=Q.map((function(e){return e.name.split("")})).reduce((function(e,t){return t.forEach((function(t){return e.push(t)})),e}),[]),m=new G.a({id:"text-layer",data:Q,pickable:!1,getPosition:function(e){return[e.coords.long,e.coords.lat]},getText:function(e){return e.name},getSize:20,getAngle:0,getTextAnchor:"middle",getAlignmentBaseline:"bottom",characterSet:s,getPixelOffset:[0,-20],getColor:[255,230,200]});return c.a.createElement(X.a,{initialViewState:$,controller:!0,layers:[n,o,i,m]},c.a.createElement(J.a,{width:"100%",height:"100%",mapStyle:"mapbox://styles/claudiuc/ck7cg1f360fpu1jnkdksbg2xx/draft",mapboxApiAccessToken:"pk.eyJ1IjoiY2xhdWRpdWMiLCJhIjoiY2s3YXk4enVtMTNibzNtb2duNXk2M3doNSJ9.yoRycMmJVOJcdBMrLXEqLw"}))})),te=a(449),ae=a(458),ne=a(450),re=a(451),le=a(452),ce=a(466),oe=a(453),ie=a(454),se=a(448),me=a(463),ue=a(166),fe=a(98),pe=a(266),de=[{path:"/",exact:!0,main:function(){return null},icon:c.a.createElement(se.a,{className:"fal fa-home",fontSize:"small"}),text:"Atlas"},{path:"/",main:function(){return c.a.createElement("div",null,"Despre")},icon:c.a.createElement(se.a,{className:"fal fa-question-circle",fontSize:"small"}),text:"Ghid"},{path:"/",main:function(){return c.a.createElement("div",null,"Change")},icon:c.a.createElement(se.a,{className:"fal fa-layer-group",fontSize:"small"}),text:"Seturi de date"},{path:"/",main:function(){return c.a.createElement("div",null,"Change")},icon:c.a.createElement(se.a,{className:"fal fa-info-circle",fontSize:"small"}),text:"Despre"},{path:"/",main:function(){return c.a.createElement("div",null,"Change")},icon:c.a.createElement(se.a,{className:"fal fa-at",fontSize:"small"}),text:"Contact"}];function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ge(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Ee=c.a.createElement("defs",null,c.a.createElement("style",null,".a{fill:#fff;opacity:0.3;}")),be=c.a.createElement("path",{className:"a",d:"M22.278,673.019l.1-.061.047.024c3.015,1.736,9.042,5.216,9.042,5.216l0,1.921,1.588-.9,1.681.965V690.7l-.089.1L24,696.936a.185.185,0,0,1-.146.011c-.044-.019-.127-.066-.127-.066l-10.5-6.049-.1-.057-.039.023-1.592.918-.005-3.83,3.8,1.437L11.49,686.9l0-1.014,5.573,2.395-5.572-3.45,0-.955,7.319,3.351-7.324-4.483,0-.868,8.815,4.179-8.815-5.381-.008-1.481s7.2-4.115,10.8-6.175m-1.682,11.4.018,1.934,10.342-5.936.005-.131,0-1.784L20.6,684.423M15.617,691.3l8.274-3.847,0,.856-6.541,4.008,6.539-2.987,0,.843L18.966,693.4l.145-.052,4.783-2.088,0,.794-3.307,2.434,3.309-1.3v.89l-1.7,1.511,1.7-.489,0,1.141,10.127-5.785.117-.122,0-9.766Z",transform:"translate(-11.48 -672.958)"}),ve=function(e){var t=e.svgRef,a=e.title,n=ge(e,["svgRef","title"]);return c.a.createElement("svg",he({width:23.258,height:24,viewBox:"0 0 23.258 24",ref:t},n),a?c.a.createElement("title",null,a):null,Ee,be)},Oe=c.a.forwardRef((function(e,t){return c.a.createElement(ve,he({svgRef:t},e))}));a.p;function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function we(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Le=c.a.createElement("defs",null,c.a.createElement("style",null,".a{fill:#fff;stroke:rgba(0,0,0,0);opacity:0.3;}")),Ne=c.a.createElement("path",{className:"a",d:"M12.674,23.725l-2.263-9.586L9.28,9.345l-.289-1.2L8.852,6.916c-.09-.823-.185-1.643-.248-2.472.313.769.595,1.545.883,2.321l.427,1.164.275,1.2,1.131,4.793L13.5,22.673h2.628l.169-.638c.043-.248.065-.5.1-.751.027-.137.063-.272.1-.407L14.287,17.96l.085-.147,2.3,2.421c.241-.876.492-1.75.769-2.621,0,1.022-.023,2.04-.062,3.056-.014.254-.009.509-.037.76s-.094.5-.128.747l-.229,1.5c-.034.229-.23.4-.46.266h-3.4a.31.31,0,0,1-.173.058A.318.318,0,0,1,12.674,23.725ZM4.5,22.487,1.241,21.58A.47.47,0,0,1,.915,21v0l.83-2.945a5.607,5.607,0,0,1,.51-1.445c.237-.463.5-.919.77-1.372,0,.529-.02,1.055-.059,1.574a5.555,5.555,0,0,1-.32,1.5l-.7,2.49,2.5.7,1.866-2.385.515-.659c.091-.1.161-.227.251-.334s.215-.184.322-.276c.433-.368.877-.726,1.337-1.071-.225.532-.467,1.049-.72,1.56-.064.126-.121.259-.192.38s-.184.21-.264.324l-.516.658L4.991,22.325a.469.469,0,0,1-.368.179A.464.464,0,0,1,4.5,22.487ZM3.383,19.8l.582-3.805,3.321.634-3.079,3.4Zm15.272-3.2L17.47,16.5c-.791-.066-1.581-.139-2.373-.225.784-.139,1.569-.262,2.353-.379l1.178-.166c.17-.022.341-.048.512-.063L16.69,12.045l-3.783.494,3.686-.984.178-6-.45.616c-.4.532-.777,1.079-1.178,1.608-.911.979-1.793,1.98-2.729,2.938.632-1.184,1.319-2.328,1.977-3.495.383-.544.788-1.069,1.175-1.609L16.745,4a.469.469,0,0,1,.348-.192l6.458-.39h0a.468.468,0,0,1,.494.442.48.48,0,0,1-.02.167L20.27,16.263a.466.466,0,0,1-.42.331h-.01l-.591.031C19.051,16.626,18.853,16.606,18.655,16.592ZM17.345,11.9l2.261,3.344,1.737-5.659Zm-.119-.655L21.613,8.7l.337-1.1L17.416,4.828Zm1.141-6.567,3.772,2.31L22.933,4.4ZM2.823,14.65c-.221-.037-.444-.064-.662-.11l-.635-.2L.248,13.964c-.2-.061-.338-.247-.177-.456V.466A.408.408,0,0,1,.5,0,.442.442,0,0,1,.649.027L4.158,1.285a3.716,3.716,0,0,1,.86.364l.836.432c.554.294,1.107.594,1.655.908-.621-.107-1.238-.226-1.853-.352l-.919-.2a3.781,3.781,0,0,1-.895-.267l-2.5-.9V13.306l.451.134.641.181c.208.08.41.18.616.269.819.364,1.634.739,2.443,1.138C4.6,14.92,3.707,14.792,2.823,14.65Zm-.335-2.286.118-9.577L6.727,3.893,8.5,15.024Z",transform:"translate(0.507 0.5)"}),Se=function(e){var t=e.svgRef,a=e.title,n=we(e,["svgRef","title"]);return c.a.createElement("svg",ye({width:25.054,height:24.999,viewBox:"0 0 25.054 24.999",ref:t},n),a?c.a.createElement("title",null,a):null,Le,Ne)},je=c.a.forwardRef((function(e,t){return c.a.createElement(Se,ye({svgRef:t},e))}));a.p;function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Ae=c.a.createElement("defs",null,c.a.createElement("style",null,".aaa{fill:#f9eec0 !important;opacity:1 !important}")),Ve=c.a.createElement("path",{className:"aaa",d:"M36,14.982l-2.052,1.065-1.705-.655.372-7.148L26.236,0,22.6,1.974l-3.01.343L18.668,3.79l-1.2-1.463L12.058,1.305,8.858,3.4,3.27,10.432,0,12.177l4.773,4.459L3.9,18.8l3.388,2.062,2.091-1.424.5.434L8,21.875l3.268,3.1L23.488,26.3l3.947-3.343,6.693,2.71-.207-4,2.357-3.1,1.58-.479.191-2.56Zm1.132,2.52-1.315.4-2.675,3.525.159,3.08-6.01-2.433L23.245,25.5,11.607,24.246l-2.532-2.4,1.9-2.028-1.54-1.34L7.261,19.953,4.848,18.484l.831-2.047L1.3,12.348l2.4-1.281L9.327,4l2.891-1.889,4.833.913,1.7,2.068,1.293-2.059,2.719-.31L26.031.981l5.811,7.506-.386,7.42L34,16.883l2.1-1.087,1.146.3Z"}),ke=c.a.createElement("path",{className:"aaa",d:"M27.843,14.96H26.107L25.7,12.331a.337.337,0,0,0-.326-.285.376.376,0,0,0-.337.271l-.963,4.8L23,9.644a.338.338,0,0,0-.668,0L20.9,18.783,19.4,7.518a.338.338,0,0,0-.67,0L17.24,18.783,15.8,9.639a.338.338,0,0,0-.668,0l-1.072,7.474-.963-4.8a.385.385,0,0,0-.343-.27.337.337,0,0,0-.322.285l-.4,2.629H10.293a.225.225,0,0,0-.225.224v.224a.225.225,0,0,0,.225.224h2.024a.337.337,0,0,0,.333-.285l.161-1.034.975,4.859a.337.337,0,0,0,.664-.018l1.031-7.192,1.45,9.327a.314.314,0,0,0,.326.284h.01a.34.34,0,0,0,.332-.292l1.465-11.062L20.531,21.28a.338.338,0,0,0,.669.008l1.45-9.326,1.031,7.192a.337.337,0,0,0,.325.289.362.362,0,0,0,.34-.271l.975-4.859.161,1.034a.334.334,0,0,0,.333.285h2.029a.225.225,0,0,0,.225-.224v-.224a.225.225,0,0,0-.225-.224Z"}),Pe=function(e){var t=e.svgRef,a=e.title,n=Ce(e,["svgRef","title"]);return c.a.createElement("svg",xe({width:38.05,height:26.296,viewBox:"0 0 38.05 26.296",ref:t},n),a?c.a.createElement("title",null,a):null,Ae,Ve,ke)},Ze=c.a.forwardRef((function(e,t){return c.a.createElement(Pe,xe({svgRef:t},e))}));a.p;function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Re(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var _e=c.a.createElement("defs",null,c.a.createElement("style",null,".aaa{fill:#f9eec0;}")),Te=c.a.createElement("path",{className:"aaa",d:"M38.152,8.106a2.083,2.083,0,0,0,1.105.309,2.181,2.181,0,0,0,1.019-.233,2.71,2.71,0,0,0,.766-.577v.355a.467.467,0,0,0,.1.355.514.514,0,0,0,.33.081,2.688,2.688,0,0,0,.629-.071c.2-.048.311-.074.345-.081v-.4h-.619V.142L41.63,0h-.02L39.947.172V.537L41,.639V2.646a4.682,4.682,0,0,0-1.075-.122,2.805,2.805,0,0,0-1.526.411A2.751,2.751,0,0,0,37.391,4.05a3.453,3.453,0,0,0-.355,1.577,3.519,3.519,0,0,0,.3,1.541,2.168,2.168,0,0,0,.811.938Zm.3-4.451a1.74,1.74,0,0,1,1.4-.624,2.525,2.525,0,0,1,.725.1A.712.712,0,0,1,41,3.376V7.107a1.757,1.757,0,0,1-.583.461,1.732,1.732,0,0,1-.826.208,1.5,1.5,0,0,1-1.2-.548,2.552,2.552,0,0,1-.466-1.683,2.876,2.876,0,0,1,.527-1.891Z"}),Ie=c.a.createElement("path",{className:"aaa",d:"M45.62,8.415a3.243,3.243,0,0,0,1.131-.208,2.261,2.261,0,0,0,.857-.512l-.162-.375a2.053,2.053,0,0,1-.689.365,2.707,2.707,0,0,1-.872.152,1.567,1.567,0,0,1-1.353-.674,2.921,2.921,0,0,1-.482-1.739h3.61a4.5,4.5,0,0,0,.061-.892,2.193,2.193,0,0,0-.542-1.49,1.866,1.866,0,0,0-1.4-.517,2.47,2.47,0,0,0-1.333.37,2.528,2.528,0,0,0-.928,1.039,3.383,3.383,0,0,0-.334,1.531,3.376,3.376,0,0,0,.634,2.145A2.167,2.167,0,0,0,45.62,8.415Zm-.051-5.373a1.129,1.129,0,0,1,.948.4A1.727,1.727,0,0,1,46.837,4.5a3.13,3.13,0,0,1-.03.446H44.059Q44.18,3.042,45.569,3.042Z"}),We=c.a.createElement("path",{className:"aaa",d:"M50.524,8.415a2.478,2.478,0,0,0,1.526-.431A1.4,1.4,0,0,0,52.623,6.8a1.315,1.315,0,0,0-.233-.8A1.812,1.812,0,0,0,51.8,5.49a7.552,7.552,0,0,0-.933-.42l-.193-.082a5.494,5.494,0,0,1-.619-.289,1.162,1.162,0,0,1-.375-.339.9.9,0,0,1-.152-.538.682.682,0,0,1,.3-.583,1.325,1.325,0,0,1,.791-.218,2.1,2.1,0,0,1,.634.091.6.6,0,0,1,.36.223l.183.74h.5V2.869a6.62,6.62,0,0,0-.694-.223,3.477,3.477,0,0,0-.867-.092,2.651,2.651,0,0,0-.978.178,1.74,1.74,0,0,0-.72.5,1.156,1.156,0,0,0-.269.761,1.535,1.535,0,0,0,.375,1.085,2.979,2.979,0,0,0,1.2.7,5.134,5.134,0,0,1,1.176.573.806.806,0,0,1,.345.675q0,.912-1.237.912a2.164,2.164,0,0,1-.76-.132.924.924,0,0,1-.466-.3l-.152-.791H48.7V7.989a4.113,4.113,0,0,0,.831.284,4.074,4.074,0,0,0,.993.142Z"}),ze=c.a.createElement("path",{className:"aaa",d:"M54.144,10.21l-.781.1v.446h2.717v-.446l-1.126-.1V9.115l-.02-.862a2.8,2.8,0,0,0,.517.116,4.093,4.093,0,0,0,.6.046A2.728,2.728,0,0,0,57.546,8a2.767,2.767,0,0,0,1.009-1.13,3.521,3.521,0,0,0,.355-1.587A3.452,3.452,0,0,0,58.6,3.731a2.1,2.1,0,0,0-.816-.913,2.151,2.151,0,0,0-1.1-.294,2.267,2.267,0,0,0-1.044.238,2.97,2.97,0,0,0-.791.573V2.717l-.183-.162h-.02l-1.3.162v.457l.791.172Zm.811-6.479a2.044,2.044,0,0,1,.588-.406,1.834,1.834,0,0,1,.811-.182,1.5,1.5,0,0,1,1.2.563,2.578,2.578,0,0,1,.472,1.688,2.925,2.925,0,0,1-.532,1.9,1.732,1.732,0,0,1-1.4.644,2.342,2.342,0,0,1-.725-.106.755.755,0,0,1-.411-.238Z"}),Be=c.a.createElement("path",{className:"aaa",d:"M62.6,7.888l-1.348-.081V3.964a3.7,3.7,0,0,1,.75-.426,2.507,2.507,0,0,1,.984-.173,1.316,1.316,0,0,1,.289.03.553.553,0,0,1,.178.061V2.565a1.1,1.1,0,0,0-.3-.041,2.074,2.074,0,0,0-.989.264,2.569,2.569,0,0,0-.74.553q-.249.289-.269.309h-.02l.02-.77V2.717l-.193-.162h-.02l-1.287.162v.457l.781.172V7.817l-.811.061V8.3H62.6Z"}),He=c.a.createElement("path",{className:"aaa",d:"M66.486,8.415a3.243,3.243,0,0,0,1.131-.208,2.261,2.261,0,0,0,.857-.512l-.162-.375a2.053,2.053,0,0,1-.689.365,2.706,2.706,0,0,1-.872.152A1.567,1.567,0,0,1,65.4,7.163a2.921,2.921,0,0,1-.482-1.739h3.61a4.5,4.5,0,0,0,.061-.892,2.193,2.193,0,0,0-.542-1.49,1.866,1.866,0,0,0-1.4-.517,2.471,2.471,0,0,0-1.333.37,2.528,2.528,0,0,0-.928,1.039,3.383,3.383,0,0,0-.334,1.531,3.376,3.376,0,0,0,.634,2.145A2.167,2.167,0,0,0,66.486,8.415Zm-.051-5.373a1.129,1.129,0,0,1,.948.4A1.728,1.728,0,0,1,67.7,4.5a3.138,3.138,0,0,1-.03.446H64.925q.122-1.906,1.511-1.906Z"}),De=c.a.createElement("path",{className:"aaa",d:"M115.871,24.772a3.379,3.379,0,0,1-.444,1.926,2.5,2.5,0,0,1-3.219-.006,3.332,3.332,0,0,1-.45-1.971V21.027l-3.3-.393v4.075a5.268,5.268,0,0,0,1.375,3.929,6.464,6.464,0,0,0,7.915.019,5.267,5.267,0,0,0,1.394-3.872V19.766l-3.276.893Z"}),Fe=c.a.createElement("path",{className:"aaa",d:"M128.3,22.979a4.55,4.55,0,0,0,2.338-4.062c.006-.152.013-.3.013-.456a1.678,1.678,0,0,0-.006-.177l-3.276.184c.006.082.006.171.006.26a3.648,3.648,0,0,1-.019.38,2.553,2.553,0,0,1-.469,1.362,1.72,1.72,0,0,1-1.47.653h-1.863V18.689l-.583.032-2.693.735V29.778h3.277V23.853h1.629l2.44,5.925h3.517V29.62Z"}),Ue=c.a.createElement("path",{className:"aaa",d:"M86.081,22.757h5.1V20.6l-8.377,1.09v8.092H92.12V27.06H86.081Z"}),Je=c.a.createElement("path",{className:"aaa",d:"M63.857,29.778h3.289V21.9l-3.289.191Z"}),Xe=c.a.createElement("path",{className:"aaa",d:"M104.255,20.761l-.2,4.626v4.391h3.283V20.5l-3.048-.362Z"}),qe=c.a.createElement("path",{className:"aaa",d:"M95.713,20.273l-3.048.177v9.328h3.276V25.387l-.2-4.487Z"}),Ye=c.a.createElement("path",{className:"aaa",d:"M101.4,19.95l-.165.64-1.223,4.695-1.191-4.562-.165-.615-2.535.146.178.615,2.585,8.909h2.231l2.636-9.074.178-.615-1.616-.19Z"}),Ge=c.a.createElement("path",{className:"aaa",d:"M80.092,22.674a3.844,3.844,0,0,0,.792-.741l-4.563.6-4.734-.513v7.763h3.276V23.853h1.622l2.44,5.925H82.45V29.62L79.6,22.979A5.289,5.289,0,0,0,80.092,22.674Z"}),Ke=c.a.createElement("path",{className:"aaa",d:"M56.272,24.772a3.329,3.329,0,0,1-.444,1.926,2.5,2.5,0,0,1-3.219-.006,3.338,3.338,0,0,1-.444-1.971v-3.2l-3.061-.26h-.038l-.2.032v3.416a5.293,5.293,0,0,0,1.375,3.929A5.447,5.447,0,0,0,54.225,30a5.39,5.39,0,0,0,3.929-1.343,5.216,5.216,0,0,0,1.394-3.872V22.142l-3.276-.279Z"}),$e=c.a.createElement("path",{className:"aaa",d:"M44.593,26.654a2.139,2.139,0,0,1-1.781.627,1.989,1.989,0,0,1-1.857-.9,6.538,6.538,0,0,1-.539-3.042v-.634l-3.283.545c0,.215.006.431.025.634a7.35,7.35,0,0,0,1.439,4.3A5.09,5.09,0,0,0,42.812,30a5.513,5.513,0,0,0,4.056-1.426,6.076,6.076,0,0,0,1.559-4.2H45.151A4.136,4.136,0,0,1,44.593,26.654Z"}),Qe=c.a.createElement("path",{className:"aaa",d:"M122.725,16.325v-2.4h1.914c1.2,0,1.838.722,1.9,2.18l3.276-.184a4.675,4.675,0,0,0-1.337-3.447,5.278,5.278,0,0,0-3.8-1.28h-5.228v5.9l2.693-.735Z"}),et=c.a.createElement("path",{className:"aaa",d:"M118.321,11.192h-3.276v7.1l3.276-.894Z"}),tt=c.a.createElement("path",{className:"aaa",d:"M110.932,11.192h-3.295v7.079l3.295.393Z"}),at=c.a.createElement("path",{className:"aaa",d:"M103.1,17.726l.424-1.464-.063,1.508,3.048.361V11.192h-4.277l-1.661,6.394.913-.05Z"}),nt=c.a.createElement("path",{className:"aaa",d:"M94.817,16.262l.476,1.628,2.535-.145-1.711-6.553H91.839v6.895l3.048-.178Z"}),rt=c.a.createElement("path",{className:"aaa",d:"M90.356,17.757h-5.1V13.923h6.014V11.192h-9.29v8.131l8.377-1.09Z"}),lt=c.a.createElement("path",{className:"aaa",d:"M80.059,19.57A5.266,5.266,0,0,0,81.13,16.1a4.744,4.744,0,0,0-1.343-3.625,5.278,5.278,0,0,0-3.8-1.28H70.763v8.46l4.734.513Zm-6.02-5.646h1.914q1.9,0,1.9,2.44a2.8,2.8,0,0,1-.488,1.743,1.713,1.713,0,0,1-1.47.653H74.039Z"}),ct=c.a.createElement("path",{className:"aaa",d:"M59.09,13.923h3.942v5.805l3.288-.19V13.923h4.012V11.192H59.09Z"}),ot=c.a.createElement("path",{className:"aaa",d:"M55.446,19.5l3.276.279V11.192H55.446Z"}),it=c.a.createElement("path",{className:"aaa",d:"M48.279,18.9l3.061.26V11.192h-3.3V18.93l.2-.032Z"}),st=c.a.createElement("path",{className:"aaa",d:"M37.858,20.671l0-.041,1.73-.287V17.631a6.512,6.512,0,0,1,.577-3.023,1.993,1.993,0,0,1,1.863-.919,2.074,2.074,0,0,1,1.774.653,4.381,4.381,0,0,1,.532,2.364H47.62a6.735,6.735,0,0,0-1.565-4.252,5.211,5.211,0,0,0-4.024-1.483,5.17,5.17,0,0,0-4.208,1.812,7.623,7.623,0,0,0-1.5,4.873L36,17.573l-2.052,1.065-1.705-.655.372-7.148L26.236,2.59,22.6,4.565l-3.01.343L18.668,6.38l-1.2-1.463L12.058,3.9l-3.2,2.091L3.27,13.022,0,14.768l4.773,4.459L3.9,21.389l3.388,2.062,2.091-1.424.5.434L8,24.465l3.268,3.1,12.22,1.319,3.947-3.343,6.693,2.71-.207-4,2.357-3.1Zm-4.713,3.344L33.3,27.1l-6.01-2.433-4.049,3.43L11.607,26.836l-2.532-2.4,1.9-2.028-1.54-1.34L7.261,22.544,4.848,21.075l.831-2.047L1.3,14.939l2.4-1.281L9.327,6.592,12.219,4.7l4.833.913,1.7,2.068,1.293-2.059,2.719-.31L26.03,3.572l5.811,7.506-.386,7.42L34,19.473l2.1-1.087.208.055v1.9l-.482.146Z"}),mt=c.a.createElement("path",{className:"aaa",d:"M27.843,17.55H26.107L25.7,14.921a.337.337,0,0,0-.326-.285.376.376,0,0,0-.337.271l-.963,4.8L23,12.234a.338.338,0,0,0-.668,0L20.9,21.373,19.4,10.108a.338.338,0,0,0-.67,0L17.24,21.373,15.8,12.23a.338.338,0,0,0-.668,0l-1.072,7.474-.963-4.8a.385.385,0,0,0-.343-.27.337.337,0,0,0-.322.285l-.405,2.629H10.293a.225.225,0,0,0-.225.224V18a.225.225,0,0,0,.225.224h2.024a.337.337,0,0,0,.333-.285l.161-1.034.975,4.859a.337.337,0,0,0,.664-.018l1.031-7.192,1.45,9.327a.314.314,0,0,0,.326.284h.01a.34.34,0,0,0,.332-.292L19.066,12.81l1.465,11.061a.338.338,0,0,0,.669.008l1.45-9.326,1.031,7.192a.337.337,0,0,0,.325.289.362.362,0,0,0,.34-.271l.975-4.859.161,1.034a.334.334,0,0,0,.333.285h2.029A.225.225,0,0,0,28.068,18v-.224a.225.225,0,0,0-.225-.224Z"}),ut=function(e){var t=e.svgRef,a=e.title,n=Re(e,["svgRef","title"]);return c.a.createElement("svg",Me({width:131.136,height:30.012,viewBox:"0 0 131.136 30.012",ref:t},n),a?c.a.createElement("title",null,a):null,_e,Te,Ie,We,ze,Be,He,De,Fe,Ue,Je,Xe,qe,Ye,Ge,Ke,$e,Qe,et,tt,at,nt,rt,lt,ct,ot,it,st,mt)},ft=c.a.forwardRef((function(e,t){return c.a.createElement(ut,Me({svgRef:t},e))})),pt=(a.p,Object(E.a)((function(e){return{paper:{padding:e.spacing(1)},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerPaper:{background:"#1E1515"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(u.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),grow:{flexGrow:1},menuItem:{color:"#FCF1E4"},infoPanel:{position:"absolute",left:110,top:35,width:260,zIndex:100,color:"#AFA294",textAlign:"left",pointerEvents:"none"},toolbar:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),title:{fontFamily:"'Roboto Condensed', Roboto, sans-serif",fontWeight:700,fontSize:"3.5em",lineHeight:.9},subtitle:{fontWeight:300,fontSize:"1.5em",paddingBottom:10,marginBottom:20,borderBottom:"1px solid #6B655D",letterSpacing:2},metadata:{fontWeight:300},stats:{marginTop:40},statLabel:{marginBottom:20,fontWeight:300},statValue:{color:"#CC3333",fontSize:"3em",lineHeight:.9,fontWeight:700},toggleButton:{position:"absolute",right:35,top:35,width:120,height:120,borderRadius:"50%",zIndex:100,background:"#5C574D",border:"1px solid #9C9489",color:"#9C9489"},toggleButtonLabel:{flexDirection:"column"},toggleButtonText:{lineHeight:1,marginTop:12,fontSize:16,fontWeight:"bold"},logo:{width:"100%",textAlign:"center",marginBottom:20,display:"block"}}}))),dt=Object(fe.e)((function(e){var t,a,n=c.a.useState(0),r=Object(s.a)(n,2),l=r[0],o=r[1],i=pt(),m=c.a.useState(!1),f=Object(s.a)(m,2),p=f[0],d=f[1];return c.a.useEffect((function(){Object(pe.loadCSS)("https://pro.fontawesome.com/releases/v5.10.1/css/all.css",document.querySelector("#font-awesome-css"))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(te.a,null),c.a.createElement(ae.a,{variant:"permanent",className:Object(_.a)(i.drawer,(t={},Object(u.a)(t,i.drawerOpen,p),Object(u.a)(t,i.drawerClose,!p),t)),classes:{paper:Object(_.a)(i.drawerPaper,(a={},Object(u.a)(a,i.drawerOpen,p),Object(u.a)(a,i.drawerClose,!p),a))}},c.a.createElement("div",{className:i.toolbar},c.a.createElement(ne.a,{component:"a",onClick:function(){d(!p)},style:{display:"flex",flex:1,justifyContent:"center"}},p?c.a.createElement(ft,null):c.a.createElement(Ze,null))),c.a.createElement(re.a,null),c.a.createElement(le.a,null,de.map((function(t){return c.a.createElement(ce.a,{button:!0,key:t.text,component:ue.b,to:t.path,className:i.menuItem,selected:e.location.pathname===t.path},c.a.createElement(oe.a,{style:{marginLeft:12},className:i.menuItem},t.icon),c.a.createElement(ie.a,{primary:t.text}))}))),c.a.createElement("div",{style:{position:"absolute",bottom:20,width:"100%"}},c.a.createElement("a",{className:i.logo,href:"http://www.infp.ro/"},c.a.createElement(Oe,null)),c.a.createElement("a",{className:i.logo,href:"https://civicnet.ro"},c.a.createElement(je,null)))),c.a.createElement("main",null,c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:i.infoPanel},c.a.createElement(v.a,{className:i.title,component:"h1"},"Cutremur"),c.a.createElement(v.a,{className:i.subtitle,component:"h2"},"4 martie 1977"),c.a.createElement(v.a,{className:i.metadata},c.a.createElement("strong",null,"Vrancea")," - zona seismic\u0103"),c.a.createElement(v.a,{className:i.metadata},c.a.createElement("strong",null,"7.4 Mw")," - magnitudine"),c.a.createElement(v.a,{className:i.metadata},c.a.createElement("strong",null,"94 km")," - ad\xe2ncime"),c.a.createElement(v.a,{className:i.metadata},c.a.createElement("strong",null,"21:21")," - ora local\u0103"),c.a.createElement("div",{className:i.stats},c.a.createElement(v.a,{className:i.statValue},"1.578"),c.a.createElement(v.a,{className:i.statLabel},"deceda\u021bi"),c.a.createElement(v.a,{className:i.statValue},"11.321"),c.a.createElement(v.a,{className:i.statLabel},"r\u0103ni\u021bi"),c.a.createElement(v.a,{className:i.statValue},"32.897"),c.a.createElement(v.a,{className:i.statLabel},"cl\u0103diri avariate"),c.a.createElement(v.a,{className:i.statValue},"2 MLD $"),c.a.createElement(v.a,{className:i.statLabel},"impact economic"))),c.a.createElement(ne.a,{variant:"contained",color:"inherit",disableElevation:!0,classes:{label:i.toggleButtonLabel,root:i.toggleButton}},c.a.createElement(se.a,{className:"fas fa-map-marked-alt",style:{display:"block"}}),c.a.createElement("div",{className:i.toggleButtonText},"Vezi h\u0103r\u021bi")),c.a.createElement(ee,{animationFrame:l}),c.a.createElement(U,{onAnimationFrame:o})),c.a.createElement(me.a,null,de.map((function(e,t){return c.a.createElement(fe.a,{key:t,path:e.path,exact:e.exact,children:c.a.createElement(e.main,null)})})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ht,gt,Et=a(105),bt={acceleration:(ht={},Object(u.a)(ht,n.EW,Object(C.a)()),Object(u.a)(ht,n.NS,Object(C.a)()),Object(u.a)(ht,n.Z,Object(C.a)()),ht),waves:(gt={},Object(u.a)(gt,r.S,null),Object(u.a)(gt,r.P,null),gt)};var vt=a(268),Ot={isPlaying:!1,tick:0};var yt=Object(Et.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_ACCELERATION":return Object(m.a)({},e,{acceleration:Object(m.a)({},e.acceleration,Object(u.a)({},t.direction,t.values))});case"RECEIVE_WAVE":return Object(m.a)({},e,{waves:Object(m.a)({},e.waves,Object(u.a)({},t.waveType,t.waveData))});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONTROLS_PLAY":return Object(m.a)({},e,{isPlaying:!0});case"CONTROLS_PAUSE":return Object(m.a)({},e,{isPlaying:!1});case"CONTROLS_STOP":return Object(m.a)({},e,{isPlaying:!1,tick:0});case"CONTROLS_INC_TICK":return Object(m.a)({},e,{tick:e.tick+1});default:return e}}}),wt={actionSanitizer:function(e){switch(e.type){case"RECEIVE_ACCELERATION":return Object(m.a)({},e);default:return e}},stateSanitizer:function(e){return e.data?Object(m.a)({},e,{data:Object(m.a)({},e.data,{acceleration:"<ACCELERATION DATA>"})}):e}},Lt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(wt)||Et.d,Nt=Object(Et.e)(yt,Lt(Object(Et.a)(vt.a)));i.a.render(c.a.createElement(Z.a,{store:Nt},c.a.createElement(ue.a,{basename:"/cutremur77"},c.a.createElement(dt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[290,1,2]]]);
//# sourceMappingURL=main.c971b1a5.chunk.js.map
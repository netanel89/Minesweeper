(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,n,t){e.exports=t(39)},39:function(e,n,t){"use strict";t.r(n);var r=t(3),a=t(0),i=t.n(a),o=t(10),c=t(11),l=t(12),u=t(14),s=t(13),d=t(15),m=t(5),f=t(4),p=function(e){return{type:"CELL_CLICKED",payload:e}},v=function(e){return{type:"CELL_MARKED",payload:e}},b=function(e){return{type:"GAME_OVER",payload:e}},g=function(e){return{type:"INIT_GAME",payload:e}},h=function(){return{type:"SET_SUPERMAN_MODE"}},O=function(){return function(e){e({type:"SET_TEMP_MESSAGE",payload:"NO FLAGS LEFT !"}),setTimeout(function(){e({type:"SET_TEMP_MESSAGE"})},4e3)}},E=t(9),C={config:{width:8,height:3,mines:5},board:[],game:{status:"PLAYING",isSuperman:!1,markedCells:[],loading:!1,tempMessage:""}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.board,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INIT_GAME":var t=n.payload,r=t.width,a=t.height,i=t.mines;return y(r,a,i);case"CELL_CLICKED":var o=Object(E.a)(e);return M(o)(n.payload),o;case"CELL_MARKED":var c=Object(E.a)(e),l=A(c,n.payload);return l.isMarked=!l.isMarked,c;case"GAME_OVER":var u=Object(E.a)(e);return A(u,n.payload).isRevealed=!0,u;default:return e}},M=function(e){return function(n){for(var t=[A(e,n)];t.length;){var r=t.pop();r.isRevealed||(r.isRevealed=!0,r.value>0||r.edges.forEach(function(n){var r=A(e,n);r.isRevealed||r.alreadyIncluded||(r.alreadyIncluded=!0,t.push(r))}))}return!0}},y=function(e,n,t){for(var r=[],a=x(t,e,n),i=0;i<n;i++){for(var o=[],c=0;c<e;c++){var l=S(i,c),u=k(i,c,e,n),s=a.includes(l),d=s?0:w(u,a);o.push(G(l,d,s,u))}r.push(o)}return r},k=function(e,n,t,r){var a=[];return e>0&&a.push(S(e-1,n)),e>0&&n<t-1&&a.push(S(e-1,n+1)),n<t-1&&a.push(S(e,n+1)),e<r-1&&n<t-1&&a.push(S(e+1,n+1)),e<r-1&&a.push(S(e+1,n)),e<r-1&&n>0&&a.push(S(e+1,n-1)),n>0&&a.push(S(e,n-1)),a},x=function(e,n,t){var r=[];do{var a=Math.floor(Math.random()*t),i=Math.floor(Math.random()*n),o=S(a,i);r.includes(o)||r.push(o)}while(r.length<e);return r},w=function(e,n){return e.reduce(function(e,t){return n.includes(t)&&e++,e},0)},G=function(e,n,t,r){var a={};return a.id=e,a.isMined=t,a.value=n,a.edges=r,a},S=function(e,n){return"".concat(e,"_").concat(n)},A=function(e,n){var t=function(e){return e.split("_")}(n);return e.length>0?e[t[0]][t[1]]:{}},D=t(2),N=t(1);function R(){var e=Object(D.a)(["\n  background-color: ",";\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in;\n  padding: 5px;\n  cursor: pointer;\n  ",";\n"]);return R=function(){return e},e}var _=N.b.div(R(),function(e){var n=e.theme;return e.isRevealed?n.cellClickedBgColor:n.cellBgColor},function(e){var n=e.isMarked,t=e.isMined,r=e.isRevealed;if(n||r&&t)return'\n        &::after{\n          color: red;\n          content: "'.concat(n?"\u2691":t&&"\u2699",'";\n        }\n      ')}),L=i.a.memo(function(e){var n=e.id,t=e.value,r=e.isMarked,a=e.isRevealed,o=e.isMined,c=e.onCellClick,l=e.onCellMark;return i.a.createElement(_,{key:n,onClick:function(e){e.shiftKey?l(n):c(n)},isMarked:r,isMined:o,isRevealed:a},i.a.createElement("div",null,a&&t?t:""))}),I=function(){};L.defaultProps={id:"",value:"",isMarked:!1,isRevealed:!1,onCellClick:I,onCellMark:I};var B=L;function T(){var e=Object(D.a)(["\n  padding: 5px;\n  border: 1px solid #ccc;\n  flex: 1;\n"]);return T=function(){return e},e}function F(){var e=Object(D.a)(["\n  text-transform: uppercase;\n"]);return F=function(){return e},e}function z(){var e=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 1.2em !important;\n  margin: 0 5px;\n  min-width: 50px;\n"]);return z=function(){return e},e}var P=N.b.div(z()),V=N.b.label(F()),K=N.b.input(T()),H=function(e){var n=e.elementId,t=e.label,r=e.placeholder,a=e.value,o=e.type,c=e.min,l=e.max,u=e.onChange;return i.a.createElement(P,null,i.a.createElement(V,{htmlFor:n},"".concat(t,":")),i.a.createElement(K,{id:n,name:n,type:o,min:c,max:l,value:a,placeholder:r,onChange:u}))};function Y(){var e=Object(D.a)(["\n  background-color: ",";\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  transition: all 0.2s ease-in;\n  border: 1px solid ",";\n  padding: 5px;\n  margin: 0 5px;\n  cursor: pointer;\n  text-transform: uppercase;\n  &:hover {\n    background-color: ",";\n  }\n"]);return Y=function(){return e},e}var U=N.b.button(Y(),function(e){return e.theme.btnBgColor},function(e){return e.theme.screenBtnColor},function(e){return e.theme.btnHoverBgColor});function W(){var e=Object(D.a)(["\n  ","\n"]);return W=function(){return e},e}function q(){var e=Object(D.a)(["\n  background-color: ",";\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  transition: all 0.2s ease-in;\n  border: 1px solid #ccc;\n  padding: 5px;\n  margin: 0 5px;\n  text-transform: uppercase;\n  cursor: pointer;\n"]);return q=function(){return e},e}var J=N.b.button(q(),function(e){var n=e.theme;return e.isClickedState?n.cellHoverBgColor:n.cellBgColor}),Q=Object(N.b)(J)(W(),function(e){var n=e.theme,t=e.isClickedState,r="red",a=n.cellBgColor,i="300";return t&&(a="red",r="#fff",i="700"),"\n    background-color: ".concat(a,";\n    border-color: ").concat("red",";\n    color: ").concat(r,";\n    font-weignt: ").concat(i,";\n  ")});function X(){var e=Object(D.a)(['\n  font-size: 1.6em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 5px 10px 5px;\n  div {\n    padding: 5px 0 0 5px;\n    text-transform: uppercase;\n  }\n  &::before {\n    font-size: 1.2em;\n    content: "\u2699";\n  }\n']);return X=function(){return e},e}var Z=N.b.div(X()),$=function(e){return i.a.createElement(Z,null,i.a.createElement("div",null,e.text))};function ee(){var e=Object(D.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  font-size: 3em;\n  transition: all 500ms ease-in;\n  display: ",";\n\n  ",";\n"]);return ee=function(){return e},e}var ne=N.b.div(ee(),function(e){var n=e.isGameOver,t=e.isGameDone;return n||t?"block":"none"},function(e){e.isGameDone;var n="background-color: rgba(255, 255, 255, 0.5)";return e.isGameOver&&(n="background-color: rgba(0, 0, 0, 0.5)"),n}),te=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(a)))).state={hasError:!1},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidCatch",value:function(e,n){console.error(e)}},{key:"render",value:function(){return this.state.hasError?i.a.createElement("h1",null,"Minesweeper needed to be closed down. Please restart."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(i.a.Component);function re(){var e=Object(D.a)(['\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 999;\n  &::after {\n    content: " ";\n    border-radius: 50%;\n    display: block;\n    width: 0;\n    height: 0;\n    box-sizing: border-box;\n    border: 26px solid #333;\n    border-color: #333 transparent #333 transparent;\n    animation: '," 1.2s infinite;\n    top: 10%;\n    right: 50%;\n    transform: translate(-50%, -50%);\n    position: absolute;\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(D.a)(["\n    0% {\n      transform: rotate(0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n    50% {\n      transform: rotate(900deg);\n      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n    100% {\n      transform: rotate(1800deg);\n    }\n  "]);return ae=function(){return e},e}var ie=Object(N.c)(ae()),oe=N.b.div(re(),ie);function ce(){var e=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n"]);return ce=function(){return e},e}function le(){var e=Object(D.a)(["\n/* display: flex; */\n  display: grid;\n  grid-template-columns: ",";\n  grid-template-rows: ",";\n  justify-content: center;\n  /* background-color: ","; */\n  padding: 10px;\n  position: relative;\n  /* flex-direction: column;s */\n"]);return le=function(){return e},e}var ue=N.b.div(le(),function(e){var n=e.gameWidth;return"repeat(".concat(void 0===n?5:n,",1.5em);")},function(e){var n=e.gameHeight;return"repeat(".concat(void 0===n?5:n,", 1.5em);")},function(e){return e.theme.gridBgColor}),se=(N.b.div(ce()),function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(a)))).onCellClick=function(e){var n=t.props,r=n.board,a=n.game,i=n.actions,o=A(r,e);a.markedCells.includes(e)||o.isRevealed||(o.isMined?i.onGameOver(e):i.onCellClick(e))},t.onCellMark=function(e){var n=t.props,r=n.config,a=n.game,i=n.actions,o=r.mines-a.markedCells.length,c=a.markedCells.includes(e);0===o&&i.setNoMoreFlagsNot(),(o>0||c)&&i.onCellMarked(e)},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.config;e.actions.resetGame(n)}},{key:"render",value:function(){var e=this,n=this.props,t=n.board,r=n.config,a=n.game,o="OVER"===a.status,c="DONE"===a.status,l=a.isSuperman;return i.a.createElement(ue,{gameWidth:r.width,gameHeight:r.height},i.a.createElement(ne,{isGameOver:o,isGameDone:c}),t.map(function(n){return n.map(function(n){return i.a.createElement(B,{key:n.id,id:n.id,isMarked:n.isMarked,isMined:n.isMined,isRevealed:!(!l||!n.isMined)||n.isRevealed,value:n.value,onCellClick:e.onCellClick,onCellMark:e.onCellMark})})}))}}]),n}(i.a.Component)),de=Object(m.b)(function(e){return{config:e.config,board:e.board,game:e.game}},function(e){var n={onCellClick:p,onGameOver:b,resetGame:g,onCellMarked:v,setNoMoreFlagsNot:O};return{actions:Object(f.b)(n,e)}})(se),me=t(16);function fe(){var e=Object(D.a)(["\n  display: flex;\n"]);return fe=function(){return e},e}function pe(){var e=Object(D.a)(["\n  background-color: ",";\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n"]);return pe=function(){return e},e}var ve=N.b.div(pe(),function(e){return e.theme.configBgColor}),be=(N.b.div(fe()),Object(m.b)(function(e){return Object(r.a)({},e.config,{},e.game)},function(e){var n={setSupermanMode:h,resetGame:g};return{actions:Object(f.b)(n,e)}})(function(e){var n=e.width,t=e.height,r=e.mines,o=e.isSuperman,c=e.status,l=e.actions,u=Object(a.useState)(n),s=Object(me.a)(u,2),d=s[0],m=s[1],f=Object(a.useState)(t),p=Object(me.a)(f,2),v=p[0],b=p[1],g=Object(a.useState)(r),h=Object(me.a)(g,2),O=h[0],E=h[1],C=function(e,n){return e>=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:1)&&e<=n},j="OVER"===c,M="DONE"===c;return i.a.createElement(ve,null,i.a.createElement(H,{elementId:"width-input",type:"number",min:0,max:300,value:d,label:"witdh",placeholder:"Game witdh...",onChange:function(e){var n=e.target.value?e.target.valueAsNumber:0;C(n,300)&&m(n)}}),i.a.createElement(H,{elementId:"height-input",type:"number",min:1,max:300,value:v,label:"height",placeholder:"Game height...",onChange:function(e){var n=e.target.value?e.target.valueAsNumber:0;C(n,300)&&b(n)}}),i.a.createElement(H,{elementId:"mines-input",type:"number",min:1,max:v*d,value:O,label:"mines",placeholder:"Mines Numbers...",onChange:function(e){var n=e.target.value?e.target.valueAsNumber:0;C(n,v*d)&&E(n)}}),i.a.createElement(U,{id:"reset-btn",onClick:function(){var e={width:d,height:v,mines:O,isSuperman:!1};l.resetGame(e)}},"Reset Game"),i.a.createElement(Q,{id:"superman-switch",isClickedState:o,onClick:l.setSupermanMode,title:"Superman Mode",disabled:j||M},"S"))}));function ge(){var e=Object(D.a)(["\n  animation: "," 1s linear infinite;\n"]);return ge=function(){return e},e}function he(){var e=Object(D.a)(["\n50% { opacity: 0; }\n"]);return he=function(){return e},e}function Oe(){var e=Object(D.a)(["\n  background-color: ",";\n  color: ",";\n  border: 5px solid #ccc;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  font-size: 2em;\n  div {\n    /* min-width: 100%;\n    position: absolute;\n    animation: "," 10s linear infinite; */\n  }\n"]);return Oe=function(){return e},e}function Ee(){var e=Object(D.a)(["\n    0% { left: -50%;}\n    100%{ left : 100%;}\n"]);return Ee=function(){return e},e}var Ce=Object(N.c)(Ee()),je=N.b.div(Oe(),function(e){return e.theme.screenBgColor},function(e){var n=e.isGameDone,t=e.isGameOver;return n?"#00ff00":t?"#fd3535":"#fff"},Ce),Me=Object(N.c)(he()),ye=N.b.div(ge(),Me),ke=Object(m.b)(function(e){return{remainingFlags:e.config.mines-e.game.markedCells.length,status:e.game.status,tempMessage:e.game.tempMessage}})(function(e){var n=e.status,t=e.remainingFlags,r=e.tempMessage,a="OVER"===n,o="DONE"===n,c=r&&r.length>0;return i.a.createElement(je,{isGameOver:a,isGameDone:o},c?i.a.createElement(ye,null,r):i.a.createElement("div",null,function(){var e="";switch(n){case"PLAYING":e="".concat("GAME IS ON"," - ").concat(t," FLAGS REMAINING");break;case"OVER":e="GAME OVER ! YOU LOST !";break;case"DONE":e="WELL DONE ! YOU WON !"}return e}()))}),xe=Object(m.b)(function(e){return{loading:e.game.loading}})(function(e){return e.loading&&i.a.createElement(oe,null)}),we=t(25),Ge=function(e){var n=e.dispatch,t=e.getState;return function(e){return function(r){switch(r.type){case"CELL_MARKED":var a=t(),i=a.board,o=a.game,c=a.config,l=o.markedCells.includes(r.payload);if(o.markedCells.length+1===c.mines&&!l)o.markedCells.every(function(e){return!!A(i,e).isMined})&&n({type:"GAME_DONE"})}e(r)}}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.config,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INIT_GAME":case"SET_CONFIG":return n.payload;default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.game,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INIT_GAME":return Object(r.a)({},e,{status:"PLAYING",markedCells:C.game.markedCells,loading:!0});case"GAME_OVER":return Object(r.a)({},e,{status:"OVER"});case"GAME_DONE":return Object(r.a)({},e,{status:"DONE"});case"GAME_LOADING":return Object(r.a)({},e,{loading:n.payload});case"SET_SUPERMAN_MODE":return Object(r.a)({},e,{isSuperman:!e.isSuperman});case"CELL_MARKED":var t=e.markedCells.indexOf(n.payload),a=Object(E.a)(e.markedCells);return t>-1?a.splice(t,1):a.push(n.payload),Object(r.a)({},e,{markedCells:a});case"SET_TEMP_MESSAGE":return Object(r.a)({},e,{tempMessage:n.payload});default:return e}},De=function(){return Object(f.c)({board:j,config:Se,game:Ae})};var Ne=function(e){var n=Object(r.a)({},C,{},e),t=[we.a,Ge];return Object(f.e)(De(),n,Object(f.d)(f.a.apply(void 0,t)))},Re=function(e){var n=e.externalState,t=e.externalTheme,a=e.children,o=Ne(n),c=Object(r.a)({},t);return i.a.createElement(m.a,{store:o},i.a.createElement(N.a,{theme:c},i.a.createElement(te,null,a)))};function _e(){var e=Object(D.a)(['\n  font-family: "Raleway", sans-serif;\n  font-size: 15px;\n  position: relative;\n  @media '," {\n    font-size: 10px;\n  }\n"]);return _e=function(){return e},e}var Le={mobileL:"(max-width: ".concat("425px",")")},Ie=N.b.div(_e(),Le.mobileL),Be=function(e){return i.a.createElement(Re,e,i.a.createElement(Ie,null,i.a.createElement(xe,null),i.a.createElement($,{text:"Minesweeper"}),i.a.createElement(be,null),i.a.createElement(ke,null),i.a.createElement(de,null)))};window.wixDOM=Object(r.a)({},window.wixDOM,{minesweeper:{mount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.querySelector("#minesweeper-app"),n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};Object(o.render)(i.a.createElement(Be,Object.assign({externalState:t},n)),e,r)},unmount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.querySelector("#minesweeper-app");(arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){})(Object(o.unmountComponentAtNode)(e))}}}),window.wixDOM.minesweeper.theme={gridBgColor:"#eb4d55",cellBgColor:"#FBDCDE",cellClickedBgColor:"#CCADAF",cellHoverBgColor:"#332C2D",btnBgColor:"#fff",btnHoverBgColor:"#FBDCDE",configBgColor:"#f6e1e1",screenBgColor:"#333"};var Te={appVersion:1,externalTheme:Object(r.a)({},window.wixDOM.minesweeper.theme)},Fe=document.querySelector("#minesweeper-app");window.wixDOM.minesweeper.mount(Fe,Te)}},[[28,1,2]]]);
//# sourceMappingURL=main.d9a3a1ce.chunk.js.map
(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],{20:function(t,e,r){},21:function(t,e,r){},29:function(t,e,r){},31:function(t,e,r){},32:function(t,e,r){},33:function(t,e,r){},34:function(t,e,r){},35:function(t,e,r){},36:function(t,e,r){"use strict";r.r(e);var a=r(3),n=r.n(a),i=r(8),s=r.n(i),o=(r(20),r(21),r(5)),c=r.n(o),d=r(6),l=r(4),u=r(2),N=r(13),b=r(7),j=r.n(b),h=function(){return"RUNNING"===Pt.getState().algorithmStatus},g=function(){return"COMPLETED"===Pt.getState().algorithmStatus},O=function(t,e){return t[0]===e[0]&&t[1]===e[1]},m=function(t){for(var e=new Array(0),r=[0,0,-1,1],a=[1,-1,0,0],n=0;n<r.length;n++)e.push([t[0]+r[n],t[1]+a[n]]);return e},f=function(t,e){var r=e.length,a=e[0].length,n=t[0],i=t[1];return n>=0&&n<r&&i>=0&&i<a&&!e[n][i].isVisitedNode&&!e[n][i].isWallNode&&!e[n][i].isFrontierNode},p=function(){var t=Object(d.a)(c.a.mark((function t(e,r,a){var n,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=e,i=j.a.Stack();null!=n;)i.push(n),n=r[n[0]][n[1]].parent;case 3:if(i.isEmpty()){t.next=10;break}return n=i.pop(),a(n[0],n[1]),t.next=8,E(40);case 8:t.next=3;break;case 10:case"end":return t.stop()}}),t)})));return function(e,r,a){return t.apply(this,arguments)}}(),v=function(t,e){for(var r=t,a=j.a.Stack();null!=r;)a.push(r),r=e[r[0]][r[1]].parent;for(;!a.isEmpty();)e[(r=a.pop())[0]][r[1]].isPathNode=!0},E=function(t){return new Promise((function(e){setTimeout(e,t)}))},S=function(){var t=Object(d.a)(c.a.mark((function t(e,r,a,n,i,s,o,d,l){var u,b,g,v,S;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!h()){t.next=20;break}if(e||(e=j.a.Queue()).enqueue(a),!e.isEmpty()){t.next=5;break}return d(),t.abrupt("return");case 5:if(u=e.dequeue(),i(u[0],u[1]),s(u[0],u[1]),!O(n,u)){t.next=13;break}return t.next=11,p(n,r,o);case 11:return d(),t.abrupt("return");case 13:b=m(u),g=Object(N.a)(b);try{for(g.s();!(v=g.n()).done;)S=v.value,f(S,r)&&(s(S[0],S[1]),l(S[0],S[1],u.slice()),e.enqueue(S))}catch(c){g.e(c)}finally{g.f()}return t.next=18,E(0);case 18:t.next=0;break;case 20:return t.abrupt("return",e);case 21:case"end":return t.stop()}}),t)})));return function(e,r,a,n,i,s,o,c,d){return t.apply(this,arguments)}}();function y(){this.isStartNode=!1,this.isEndNode=!1,this.isWallNode=!1,this.isFrontierNode=!1,this.isVisitedNode=!1,this.isPathNode=!1,this.parent=null}function x(t){this.numTotal=t,this.numVisited=0,this.numFrontier=0,this.numWall=0,this.numPath=0}var A=function(t,e,r,a){for(var n=new Array(0),i=0;i<t;i++){n.push(new Array(0));for(var s=0;s<e;s++)n[i].push(new y)}return n[r[0]][r[1]].isStartNode=!0,n[a[0]][a[1]].isEndNode=!0,n},w=function(t){for(var e=t.length,r=t[0].length,a=new x(e*r),n=0;n<e;n++)for(var i=0;i<r;i++)a.numWall+=t[n][i].isWallNode?1:0,a.numVisited+=t[n][i].isVisitedNode?1:0,a.numFrontier+=t[n][i].isFrontierNode?1:0,a.numPath+=t[n][i].isPathNode?1:0;return console.log(a),a},_=function(t,e,r,a){if(t=t.slice(),"BFS"===a)t=function(t,e,r){var a=j.a.Queue();for(a.enqueue(e);!a.isEmpty();){var n=a.dequeue();if(t[n[0]][n[1]].isVisitedNode=!0,t[n[0]][n[1]].isFrontierNode=!1,O(r,n)){v(r,t);break}var i,s=m(n),o=Object(N.a)(s);try{for(o.s();!(i=o.n()).done;){var c=i.value;f(c,t)&&(t[c[0]][c[1]].isFrontierNode=!0,t[c[0]][c[1]].parent=n.slice(),a.enqueue(c))}}catch(d){o.e(d)}finally{o.f()}}return t}(t,e,r);return{grid:t,statistics:w(t)}},T=function(t,e,r){var a=r.row,n=r.col,i=(t=t.slice())[a][n];return i.isVisitedNode=!i.isVisitedNode,{grid:t,statistics:Object(u.a)(Object(u.a)({},e),{},{numVisited:i.isVisitedNode?e.numVisited+1:e.numVisited-1})}},D=function(t,e,r){var a=r.row,n=r.col,i=(t=t.slice())[a][n];return i.isWallNode=!i.isWallNode,{grid:t,statistics:Object(u.a)(Object(u.a)({},e),{},{numWall:i.isWallNode?e.numWall+1:e.numWall-1})}},M=function(t,e,r){var a=r.row,n=r.col,i=(t=t.slice())[a][n];return i.isFrontierNode=!i.isFrontierNode,{grid:t,statistics:Object(u.a)(Object(u.a)({},e),{},{numFrontier:i.isFrontierNode?e.numFrontier+1:e.numFrontier-1})}},R=function(t,e,r){var a=r.row,n=r.col,i=(t=t.slice())[a][n];return i.isPathNode=!i.isPathNode,{grid:t,statistics:Object(u.a)(Object(u.a)({},e),{},{numPath:i.isPathNode?e.numPath+1:e.numPath-1})}},k=function(t,e){var r=e.row,a=e.col;return(t=t.slice())[r][a]=function(){var t=new y;return t.isStartNode=!0,t}(),t},P=function(t,e){var r=e.row,a=e.col;return(t=t.slice())[r][a]=function(){var t=new y;return t.isEndNode=!0,t}(),t},W=function(t,e){var r=e.row,a=e.col,n=e.parent;return(t=t.slice())[r][a].parent=n,t},F=function(t,e,r,a){var n=r.row,i=r.col;return(t=t.slice())[n][i]=a,{grid:t,statistics:Object(u.a)(Object(u.a)({},e),{},{numWall:e.numWall+(a.isWallNode?1:0)})}},G=function(t,e,r){var a=r.row,n=r.col,i=t[a][n];return{statistics:Object(u.a)(Object(u.a)({},e),{},{numWall:e.numWall-(i.isWallNode?1:0)})}},L=function(t,e){t=t.slice();for(var r=0,a=0;a<t.length;a++)for(var n=0;n<t[0].length;n++){var i=t[a][n];!i.isStartNode&&!i.isEndNode&&Math.random()<=.3?(i.isWallNode=!0,r++):i.isWallNode=!1}return{grid:t,statistics:Object(u.a)(Object(u.a)({},e),{},{numWall:r})}},V=function(t,e){t=t.slice();for(var r=0;r<t.length;r++)for(var a=0;a<t[0].length;a++){var n=t[r][a];n.isStartNode||n.isEndNode?(n.isWallNode=!1,n.isVisitedNode=!1,n.isPathNode=!1):t[r][a]=new y}return{grid:t,statistics:C(t.length,t[0].length)}},I=function(t,e){t=t.slice();for(var r=0;r<t.length;r++)for(var a=0;a<t[0].length;a++){var n=t[r][a];n.isPathNode=!1,n.isVisitedNode=!1,n.isFrontierNode=!1}return{grid:t,statistics:Object(u.a)(Object(u.a)({},e),{},{numPath:0,numFrontier:0,numVisited:0})}},C=function(t,e){return new x(t*e)},B=(r(29),"SET_BFS_ALGORITHM"),H="SET_DFS_ALGORITHM",U="SET_ASTAR_ALGORITHM",Y="SET_GREEDY_ALGORITHM",q="TOGGLE_VISITED_NODE",K="TOGGLE_FRONTIER_NODE",X="TOGGLE_WALL_NODE",z="TOGGLE_PATH_NODE",J="SET_ALGORITHM_STATE",Q="CLEAR_ALGORITHM_STATE",Z="SET_START_NODE",$="SET_END_NODE",tt="RUN_ALGORITHM",et="READY_ALGORITHM",rt="PAUSE_ALGORITHM",at="COMPLETE_ALGORITHM",nt="SET_PARENT_NODE",it="GENERATE_WALLS",st="CLEAR_BOARD",ot="CLEAR_PATH",ct="SET_DRAGGED_NODE",dt="CLEAR_DRAGGED_NODE",lt="SET_START_MASKED_NODE",ut="APPLY_START_MASKED_NODE",Nt="RERUN_ALGORITHM",bt="RESET_START_MASKED_NODE",jt="SET_END_MASKED_NODE",ht="APPLY_END_MASKED_NODE",gt="RESET_END_MASKED_NODE",Ot=function(t,e,r){return{type:nt,payload:{row:t,col:e,parent:r}}},mt=function(){return{type:ot}},ft=function(){return{type:bt}},pt=function(){return{type:gt}},vt=r(1);var Et=Object(l.b)((function(t,e){return{isVisitedNode:t.board.grid[e.row][e.col].isVisitedNode,isWallNode:t.board.grid[e.row][e.col].isWallNode,isStartNode:t.board.grid[e.row][e.col].isStartNode,isEndNode:t.board.grid[e.row][e.col].isEndNode,isPathNode:t.board.grid[e.row][e.col].isPathNode,isFrontierNode:t.board.grid[e.row][e.col].isFrontierNode,startNode:t.board.startNode,endNode:t.board.endNode,draggedNode:t.board.draggedNode,algorithmSelected:t.algorithmSelected}}),(function(t){return{toggleWallNode:function(e,r){return t(function(t,e){return{type:X,payload:{row:t,col:e}}}(e,r))},setParentNode:function(e,r){return t(Ot(e,r))},setDraggedNode:function(e,r){return t(function(t,e){return{type:ct,payload:{row:t,col:e}}}(e,r))},clearDraggedNode:function(){return t({type:dt,payload:{row:e,col:r}});var e,r},setStartNode:function(e,r){return t(function(t,e){return{type:Z,payload:{row:t,col:e}}}(e,r))},setEndNode:function(e,r){return t(function(t,e){return{type:$,payload:{row:t,col:e}}}(e,r))},setStartMaskedNode:function(e,r){return t(function(t,e){return{type:lt,payload:{row:t,col:e}}}(e,r))},setEndMaskedNode:function(e,r){return t(function(t,e){return{type:jt,payload:{row:t,col:e}}}(e,r))},applyStartMaskedNode:function(e,r){return t(function(t,e){return{type:ut,payload:{row:t,col:e}}}(e,r))},applyEndMaskedNode:function(e,r){return t(function(t,e){return{type:ht,payload:{row:t,col:e}}}(e,r))},resetStartMaskedNode:function(e,r){return t(ft())},resetEndMaskedNode:function(e,r){return t(pt())},rerunAlgorithm:function(e){return t(function(t){return{type:Nt,payload:{algorithmSelected:t}}}(e))},clearPath:function(){return t(mt())}}}))((function(t){var e,r=t.isVisitedNode,a=t.isWallNode,n=t.isEndNode,i=t.isStartNode,s=t.isFrontierNode,o=t.isPathNode,c=t.toggleWallNode,d=t.row,l=t.col,u=t.startNode,N=t.endNode,b=t.draggedNode,j=t.setDraggedNode,m=t.clearDraggedNode,f=t.setStartNode,p=t.setEndNode,v=t.setStartMaskedNode,E=t.applyStartMaskedNode,S=t.algorithmSelected,y=t.rerunAlgorithm,x=t.clearPath,A=t.setEndMaskedNode,w=t.applyEndMaskedNode;return e=i?"start":n?"end":a?"wall":o?"path":r?"visited":s?"frontier":"unvisited",Object(vt.jsx)("div",{className:"node ".concat(e," unselectable"),onMouseOver:function(){b&&(!b.isWallNode||r||s||a||i||n?b.isStartNode&&!n?(E(b.row,b.col),v(d,l),f(d,l),j(d,l),g()&&(x(),y(S))):b.isEndNode&&!i&&(w(b.row,b.col),A(d,l),p(d,l),j(d,l),g()&&(x(),y(S))):c(d,l))},onMouseUp:function(){m()},onMouseDown:function(){h()||(O([d,l],u)||O([d,l],N)||c(d,l),j(d,l))}})}));r(31);var St=Object(l.b)((function(t){return{grid:t.board.grid}}))((function(t){return Object(vt.jsx)("div",{className:"grid",children:t.grid.map((function(t,e){return Object(vt.jsx)("div",{className:"grid-row",children:t.map((function(t,r){return Object(vt.jsx)(Et,{row:e,col:r},function(t,e){return t.toString()+"#"+e.toString()}(e,r))}))},function(t){return t.toString()}(e))}))})}));r(32);var yt=function(t){var e,r,a=t.algorithmStatus,n=(t.algorithmSelected,t.runAlgorithm),i=t.generateWalls,s=t.clearBoard,o=t.clearPath,c=t.readyAlgorithm,d=t.clearAlgorithmState,l=t.resetStartMaskedNode,u=t.resetEndMaskedNode,N="";return"UNSELECTED"===a?(e="Select an Algorithm",r="unselected",N="true"):"READY"===a?(e="Run",r="run"):"PAUSED"===a?(e="Resume",r="resume"):"RUNNING"===a?(e="Pause",r="pause"):(e="Completed",r="completed",N="true"),Object(vt.jsx)("nav",{className:"navbar",children:Object(vt.jsx)("div",{className:"navbar-list-container",children:Object(vt.jsxs)("ul",{className:"navbar-list",children:[Object(vt.jsx)("li",{className:"navbar-item",children:Object(vt.jsx)("button",{className:"navbar-button navbar-normal-button",onClick:function(){i()},children:"Generate Walls"})}),Object(vt.jsx)("li",{className:"navbar-item",children:Object(vt.jsx)("button",{className:"navbar-button navbar-normal-button",children:"Select Algorithm"})}),Object(vt.jsx)("li",{className:"navbar-item",children:Object(vt.jsx)("button",{className:"navbar-button navbar-run-button ".concat(r),disabled:N,onClick:function(){n()},children:e})}),Object(vt.jsx)("li",{className:"navbar-item",children:Object(vt.jsx)("button",{className:"navbar-button navbar-normal-button",onClick:function(){o(),d(),c()},children:"Clear Path"})}),Object(vt.jsx)("li",{className:"navbar-item",children:Object(vt.jsx)("button",{className:"navbar-button navbar-normal-button",onClick:function(){s(),d(),c(),l(),u()},children:"Clear Board"})})]})})})};r(33);var xt=Object(l.b)((function(t){return{statistics:t.board.statistics}}))((function(t){var e=t.statistics;return Object(vt.jsxs)("div",{className:"statbar",children:[Object(vt.jsx)("div",{className:"stat-container",children:Object(vt.jsxs)("div",{className:"stat-node-container",children:[Object(vt.jsx)("div",{className:"stat-node start"}),Object(vt.jsx)("span",{className:"stat-description",children:"Start"})]})}),Object(vt.jsx)("div",{className:"stat-container",children:Object(vt.jsxs)("div",{className:"stat-node-container",children:[Object(vt.jsx)("div",{className:"stat-node end"}),Object(vt.jsx)("span",{className:"stat-description",children:"End"})]})}),Object(vt.jsxs)("div",{className:"stat-container",children:[Object(vt.jsxs)("div",{className:"stat-node-container",children:[Object(vt.jsx)("div",{className:"stat-node unvisited"}),Object(vt.jsx)("span",{className:"stat-description",children:"Unvisited"})]}),Object(vt.jsx)("div",{children:Object(vt.jsx)("span",{className:"stat-value",children:e.numTotal-e.numVisited-e.numWall-e.numFrontier})})]}),Object(vt.jsxs)("div",{className:"stat-container",children:[Object(vt.jsxs)("div",{className:"stat-node-container",children:[Object(vt.jsx)("div",{className:"stat-node visited"}),Object(vt.jsx)("span",{className:"stat-description",children:"Visited"})]}),Object(vt.jsx)("div",{children:Object(vt.jsx)("span",{className:"stat-value",children:e.numVisited})})]}),Object(vt.jsxs)("div",{className:"stat-container",children:[Object(vt.jsxs)("div",{className:"stat-node-container",children:[Object(vt.jsx)("div",{className:"stat-node frontier"}),Object(vt.jsx)("span",{className:"stat-description",children:"Frontier"})]}),Object(vt.jsx)("div",{children:Object(vt.jsx)("span",{className:"stat-value",children:e.numFrontier})})]}),Object(vt.jsxs)("div",{className:"stat-container",children:[Object(vt.jsxs)("div",{className:"stat-node-container",children:[Object(vt.jsx)("div",{className:"stat-node wall"}),Object(vt.jsx)("span",{className:"stat-description",children:"Wall"})]}),Object(vt.jsx)("div",{children:Object(vt.jsx)("span",{className:"stat-value",children:e.numWall})})]}),Object(vt.jsxs)("div",{className:"stat-container",children:[Object(vt.jsxs)("div",{className:"stat-node-container",children:[Object(vt.jsx)("div",{className:"stat-node path"}),Object(vt.jsx)("span",{className:"stat-description",children:"Path"})]}),Object(vt.jsx)("div",{children:Object(vt.jsx)("span",{className:"stat-value",children:e.numPath})})]})]})}));r(34),r(12),r(15);r(35);var At=Object(l.b)((function(t){return{grid:t.board.grid,algorithmSelected:t.algorithmSelected,startNode:t.board.startNode,endNode:t.board.endNode,algorithmState:t.algorithmState,algorithmStatus:t.algorithmStatus,statistics:t.board.statistics}}),(function(t){return{setBFSAlgorithm:function(){return t({type:B})},toggleVisitedNode:function(e,r){return t(function(t,e){return{type:q,payload:{row:t,col:e}}}(e,r))},toggleFrontierNode:function(e,r){return t(function(t,e){return{type:K,payload:{row:t,col:e}}}(e,r))},togglePathNode:function(e,r){return t(function(t,e){return{type:z,payload:{row:t,col:e}}}(e,r))},setAlgorithmState:function(e){return t(function(t){return{type:J,payload:t}}(e))},clearAlgorithmState:function(){return t({type:Q})},readyAlgorithm:function(){return t({type:et})},runAlgorithm:function(){return t({type:tt})},pauseAlgorithm:function(){return t({type:rt})},completeAlgorithm:function(){return t({type:at})},setParentNode:function(e,r,a){return t(Ot(e,r,a))},generateWalls:function(){return t({type:it})},clearBoard:function(){return t({type:st})},clearPath:function(){return t(mt())},resetStartMaskedNode:function(){return t(ft())},resetEndMaskedNode:function(){return t(pt())}}}))((function(t){var e=function(){var e=Object(d.a)(c.a.mark((function e(){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h()){e.next=3;break}return t.pauseAlgorithm(),e.abrupt("return");case 3:t.runAlgorithm(),e.t0=t.algorithmSelected,e.next="BFS"===e.t0?7:"DFS"===e.t0?11:"ASTAR"===e.t0?12:"GREEDY"===e.t0?13:14;break;case 7:return e.next=9,S(t.algorithmState,t.grid,t.startNode,t.endNode,t.toggleVisitedNode,t.toggleFrontierNode,t.togglePathNode,t.completeAlgorithm,t.setParentNode,t.clearAlgorithmState);case 9:return r=e.sent,e.abrupt("break",15);case 11:case 12:case 13:case 14:return e.abrupt("break",15);case 15:g()||"READY"===Pt.getState().algorithmStatus?t.clearAlgorithmState():t.setAlgorithmState(r);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(vt.jsxs)("div",{children:[Object(vt.jsx)(yt,{runAlgorithm:e,algorithmStatus:t.algorithmStatus,algorithmSelected:t.algorithmSelected,generateWalls:t.generateWalls,clearBoard:t.clearBoard,clearPath:t.clearPath,readyAlgorithm:t.readyAlgorithm,clearAlgorithmState:t.clearAlgorithmState,resetStartMaskedNode:t.resetStartMaskedNode,resetEndMaskedNode:t.resetEndMaskedNode}),Object(vt.jsx)("div",{className:"grid-container",children:Object(vt.jsx)(St,{})}),Object(vt.jsx)("div",{className:"statbar-container",children:Object(vt.jsx)(xt,{})})]})}));var wt=function(){return Object(vt.jsx)("div",{className:"App",children:Object(vt.jsx)(At,{})})},_t=r(9),Tt=[9,15],Dt=[9,35];var Mt=Object(_t.a)({board:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{grid:A(20,50,Tt,Dt),statistics:C(20,50),draggedNode:null,startMaskedNode:new y,endMaskedNode:new y,startNode:Tt,endNode:Dt},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q:var r=T(t.grid,t.statistics,e.payload),a=r.grid,n=r.statistics;return Object(u.a)(Object(u.a)({},t),{},{grid:a,statistics:n});case X:var i=D(t.grid,t.statistics,e.payload),s=i.grid,o=i.statistics;return Object(u.a)(Object(u.a)({},t),{},{grid:s,statistics:o});case K:var c=M(t.grid,t.statistics,e.payload),d=c.grid,l=c.statistics;return Object(u.a)(Object(u.a)({},t),{},{grid:d,statistics:l});case z:var N=R(t.grid,t.statistics,e.payload),b=N.grid,j=N.statistics;return Object(u.a)(Object(u.a)({},t),{},{grid:b,statistics:j});case Z:return Object(u.a)(Object(u.a)({},t),{},{grid:k(t.grid,e.payload),startNode:[e.payload.row,e.payload.col]});case $:return Object(u.a)(Object(u.a)({},t),{},{grid:P(t.grid,e.payload),endNode:[e.payload.row,e.payload.col]});case nt:return Object(u.a)(Object(u.a)({},t),{},{grid:W(t.grid,e.payload)});case it:var h=L(t.grid,t.statistics),g=h.grid,O=h.statistics;return Object(u.a)(Object(u.a)({},t),{},{grid:g,statistics:O});case st:var m=V(t.grid,t.statistics),f=m.grid,p=m.statistics;return Object(u.a)(Object(u.a)({},t),{},{grid:f,statistics:p});case ot:var v=I(t.grid,t.statistics),E=v.grid,S=v.statistics;return Object(u.a)(Object(u.a)({},t),{},{grid:E,statistics:S});case ct:return Object(u.a)(Object(u.a)({},t),{},{draggedNode:Object(u.a)(Object(u.a)({},t.grid[e.payload.row][e.payload.col]),{},{row:e.payload.row,col:e.payload.col})});case dt:return Object(u.a)(Object(u.a)({},t),{},{draggedNode:null});case lt:var x=G(t.grid,t.statistics,e.payload),w=x.statistics;return Object(u.a)(Object(u.a)({},t),{},{statistics:w,startMaskedNode:Object(u.a)({},t.grid[e.payload.row][e.payload.col])});case ut:var B=F(t.grid,t.statistics,e.payload,t.startMaskedNode),H=B.grid,U=B.statistics;return Object(u.a)(Object(u.a)({},t),{},{grid:H,statistics:U});case bt:return Object(u.a)(Object(u.a)({},t),{},{startMaskedNode:new y});case jt:var Y=G(t.grid,t.statistics,e.payload),J=Y.statistics;return Object(u.a)(Object(u.a)({},t),{},{statistics:J,endMaskedNode:Object(u.a)({},t.grid[e.payload.row][e.payload.col])});case ht:var Q=F(t.grid,t.statistics,e.payload,t.endMaskedNode),tt=Q.grid,et=Q.statistics;return Object(u.a)(Object(u.a)({},t),{},{grid:tt,statistics:et});case gt:return Object(u.a)(Object(u.a)({},t),{},{endMaskedNode:new y});case Nt:var rt=_(t.grid,t.startNode,t.endNode,e.payload.algorithmSelected),at=rt.grid,Ot=rt.statistics;return Object(u.a)(Object(u.a)({},t),{},{grid:at,statistics:Ot});default:return t}},algorithmStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"READY",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case et:return"READY";case tt:return"RUNNING";case rt:return"PAUSED";case at:return"COMPLETED";default:return t}},algorithmSelected:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"BFS",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case B:return"BFS";case U:return"ASTAR";case H:return"DFS";case Y:return"GREEDY";default:return t}},algorithmState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case J:return e.payload;case Q:return null;default:return t}}}),Rt=Mt,kt=Object(_t.b)(Rt,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(vt.jsx)(n.a.StrictMode,{children:Object(vt.jsx)(l.a,{store:kt,children:Object(vt.jsx)(wt,{})})}),document.getElementById("root"));var Pt=e.default=kt}},[[36,1,2]]]);
//# sourceMappingURL=main.2225dffb.chunk.js.map
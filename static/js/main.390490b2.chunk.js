(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],{27:function(t,e,r){},28:function(t,e,r){},39:function(t,e,r){},41:function(t,e,r){},42:function(t,e,r){},43:function(t,e,r){},44:function(t,e,r){},45:function(t,e,r){},46:function(t,e,r){"use strict";r.r(e);var a=r(3),n=r.n(a),o=r(12),i=r.n(o),s=(r(27),r(28),r(4)),c=r.n(s),l=r(5),d=r(14),u=r(7),h=r(2),b=r(6),g=r(8),f=r.n(g),N=function(){return"RUNNING"===re.getState().algorithmStatus},j=function(){return"UNSELECTED"===re.getState().algorithmStatus},m=function(){return"COMPLETED"===re.getState().algorithmStatus},p=function(){return"READY"===re.getState().algorithmStatus},O=function(t,e){return t.row===e.row&&t.col===e.col},v=function(t){for(var e=new Array(0),r=[0,0,-1,1],a=[1,-1,0,0],n=0;n<r.length;n++)e.push({row:t.row+r[n],col:t.col+a[n]});return e},w=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.length,n=e[0].length,o=t.row,i=t.col;return o>=0&&o<a&&i>=0&&i<n&&!e[o][i].isVisitedNode&&!e[o][i].isWallNode&&(!e[o][i].isFrontierNode||r)},S=function(){var t=Object(l.a)(c.a.mark((function t(e,r,a){var n,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=e,o=new f.a;null!=n;)o.push(n),n=r[n.row][n.col].parent;case 3:if(!(o.size>0)){t.next=10;break}return n=o.pop(),a(n.row,n.col),t.next=8,E(40);case 8:t.next=3;break;case 10:case"end":return t.stop()}}),t)})));return function(e,r,a){return t.apply(this,arguments)}}(),x=function(t,e){for(var r=t,a=new f.a;null!=r;)a.push(r),r=e[r.row][r.col].parent;for(;a.size>0;)e[(r=a.pop()).row][r.col].isPathNode=!0},E=function(t){return new Promise((function(e){setTimeout(e,t)}))},y=function(t,e){return Math.abs(t.row-e.row)+Math.abs(t.col-e.col)},A=r(9),k=r.n(A),_=function(t,e){for(var r=[],a=0;a<t;a++){for(var n=[],o=0;o<e;o++)n.push(null);r.push(n)}return r},T=function(){var t=Object(l.a)(c.a.mark((function t(e,r,a,n,o,i,s,l,d,u){var g,f,j,m,p,x,A,T,D,F,M,P,R,G,L;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!N()){t.next=20;break}if(e||(g=new k.a((function(t,e){return r[t.row][t.col].f-r[e.row][e.col].f})),f=_(r.length,r[0].length),e={priorityQueue:g,costGrid:f},j=y(a,n),0,m=j+0,u(a.row,a.col,m,0,j),g.push(a),i(a.row,a.col),f[a.row][a.col]=0),x=(p=e).priorityQueue,A=p.costGrid,0!==x.size){t.next=6;break}return l(),t.abrupt("return");case 6:if(T=x.pop(),r[T.row][T.col].isVisitedNode||(o(T.row,T.col),i(T.row,T.col)),!O(n,T)){t.next=13;break}return t.next=11,S(n,r,s);case 11:return l(),t.abrupt("return");case 13:D=v(T),F=Object(b.a)(D);try{for(F.s();!(M=F.n()).done;)P=M.value,w(P,r,!0)&&(R=r[T.row][T.col].g+1,(null===A[P.row][P.col]||R<A[P.row][P.col])&&(G=y(P,n),L=G+R,u(P.row,P.col,L,R,G),null===A[P.row][P.col]&&i(P.row,P.col),d(P.row,P.col,Object(h.a)({},T)),x.push(P),A[P.row][P.col]=R))}catch(c){F.e(c)}finally{F.f()}return t.next=18,E(20);case 18:t.next=0;break;case 20:return t.abrupt("return",e);case 21:case"end":return t.stop()}}),t)})));return function(e,r,a,n,o,i,s,c,l,d){return t.apply(this,arguments)}}(),D=r(18),F=r.n(D),M=function(){var t=Object(l.a)(c.a.mark((function t(e,r,a,n,o,i,s,l,d){var u,g,f,j,m;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!N()){t.next=20;break}if(e||((e=new F.a).enqueue(a),i(a.row,a.col)),0!==e.size){t.next=5;break}return l(),t.abrupt("return");case 5:if(u=e.dequeue(),o(u.row,u.col),i(u.row,u.col),!O(n,u)){t.next=13;break}return t.next=11,S(n,r,s);case 11:return l(),t.abrupt("return");case 13:g=v(u),f=Object(b.a)(g);try{for(f.s();!(j=f.n()).done;)m=j.value,w(m,r)&&(i(m.row,m.col),d(m.row,m.col,Object(h.a)({},u)),e.enqueue(m))}catch(c){f.e(c)}finally{f.f()}return t.next=18,E(20);case 18:t.next=0;break;case 20:return t.abrupt("return",e);case 21:case"end":return t.stop()}}),t)})));return function(e,r,a,n,o,i,s,c,l){return t.apply(this,arguments)}}(),P=function(){var t=Object(l.a)(c.a.mark((function t(e,r,a,n,o,i,s,l,d){var u,g,j,m,p;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!N()){t.next=20;break}if(e||((e=new f.a).push(a),i(a.row,a.col)),0!==e.size){t.next=5;break}return l(),t.abrupt("return");case 5:if(u=e.pop(),o(u.row,u.col),i(u.row,u.col),!O(n,u)){t.next=13;break}return t.next=11,S(n,r,s);case 11:return l(),t.abrupt("return");case 13:g=v(u),j=Object(b.a)(g);try{for(j.s();!(m=j.n()).done;)p=m.value,w(p,r)&&(i(p.row,p.col),d(p.row,p.col,Object(h.a)({},u)),e.push(p))}catch(c){j.e(c)}finally{j.f()}return t.next=18,E(20);case 18:t.next=0;break;case 20:return t.abrupt("return",e);case 21:case"end":return t.stop()}}),t)})));return function(e,r,a,n,o,i,s,c,l){return t.apply(this,arguments)}}(),R=function(){var t=Object(l.a)(c.a.mark((function t(e,r,a,n,o,i,s,l,d,u){var g,f,j,m,p,x,A;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!N()){t.next=20;break}if(e||(e=new k.a((function(t,e){return r[t.row][t.col].f-r[e.row][e.col].f})),g=y(a,n),u(a.row,a.col,g,null,null),e.push(a),i(a.row,a.col)),0!==e.size){t.next=5;break}return l(),t.abrupt("return");case 5:if(f=e.pop(),o(f.row,f.col),i(f.row,f.col),!O(n,f)){t.next=13;break}return t.next=11,S(n,r,s);case 11:return l(),t.abrupt("return");case 13:j=v(f),m=Object(b.a)(j);try{for(m.s();!(p=m.n()).done;)x=p.value,w(x,r)&&(A=y(x,n),u(x.row,x.col,A,null,null),i(x.row,x.col),d(x.row,x.col,Object(h.a)({},f)),e.push(x))}catch(c){m.e(c)}finally{m.f()}return t.next=18,E(20);case 18:t.next=0;break;case 20:return t.abrupt("return",e);case 21:case"end":return t.stop()}}),t)})));return function(e,r,a,n,o,i,s,c,l,d){return t.apply(this,arguments)}}();function G(){this.isStartNode=!1,this.isEndNode=!1,this.isWallNode=!1,this.isFrontierNode=!1,this.isVisitedNode=!1,this.isPathNode=!1,this.parent=null,this.g=null,this.h=null,this.f=null}function L(t){this.numTotal=t,this.numVisited=0,this.numFrontier=0,this.numWall=0,this.numPath=0}var V=function(t,e,r,a){for(var n=new Array(0),o=0;o<t;o++){n.push(new Array(0));for(var i=0;i<e;i++)n[o].push(new G)}return n[r.row][r.col].isStartNode=!0,n[a.row][a.col].isEndNode=!0,n},W=function(t){for(var e=t.length,r=t[0].length,a=new L(e*r),n=0;n<e;n++)for(var o=0;o<r;o++)a.numWall+=t[n][o].isWallNode?1:0,a.numVisited+=t[n][o].isVisitedNode?1:0,a.numFrontier+=t[n][o].isFrontierNode?1:0,a.numPath+=t[n][o].isPathNode?1:0;return a},C=function(t,e,r,a){switch(t=t.slice(),a){case"BFS":t=function(t,e,r){var a=new F.a;for(a.enqueue(e);a.size>0;){var n=a.dequeue();if(t[n.row][n.col].isVisitedNode=!0,t[n.row][n.col].isFrontierNode=!1,O(r,n)){x(r,t);break}var o,i=v(n),s=Object(b.a)(i);try{for(s.s();!(o=s.n()).done;){var c=o.value;w(c,t)&&(t[c.row][c.col].isFrontierNode=!0,t[c.row][c.col].parent=Object(h.a)({},n),a.enqueue(c))}}catch(l){s.e(l)}finally{s.f()}}return t}(t,e,r);break;case"DFS":t=function(t,e,r){var a=new f.a;for(a.push(e);a.size>0;){var n=a.pop();if(t[n.row][n.col].isVisitedNode=!0,t[n.row][n.col].isFrontierNode=!1,O(r,n)){x(r,t);break}var o,i=v(n),s=Object(b.a)(i);try{for(s.s();!(o=s.n()).done;){var c=o.value;w(c,t)&&(t[c.row][c.col].isFrontierNode=!0,t[c.row][c.col].parent=Object(h.a)({},n),a.push(c))}}catch(l){s.e(l)}finally{s.f()}}return t}(t,e,r);break;case"ASTAR":t=function(t,e,r){var a=new k.a((function(e,r){return t[e.row][e.col].f-t[r.row][r.col].f})),n=_(t.length,t[0].length),o=y(e,r),i=o+0;for(t[e.row][e.col].f=i,t[e.row][e.col].g=0,t[e.row][e.col].h=o,a.push(e),n[e.row][e.col]=0;a.size>0;){var s=a.pop();if(t[s.row][s.col].isVisitedNode=!0,t[s.row][s.col].isFrontierNode=!1,O(r,s)){x(r,t);break}var c,l=v(s),d=Object(b.a)(l);try{for(d.s();!(c=d.n()).done;){var u=c.value;if(w(u,t,!0)){var g=t[s.row][s.col].g+1;if(null===n[u.row][u.col]||g<n[u.row][u.col]){var f=y(u,r),N=f+g;t[u.row][u.col].f=N,t[u.row][u.col].g=g,t[u.row][u.col].h=f,null===n[u.row][u.col]&&(t[u.row][u.col].isFrontierNode=!0),t[u.row][u.col].parent=Object(h.a)({},s),a.push(u),n[u.row][u.col]=g}}}}catch(j){d.e(j)}finally{d.f()}}return t}(t,e,r);break;case"GREEDY":t=function(t,e,r){var a=new k.a((function(e,r){return t[e.row][e.col].f-t[r.row][r.col].f})),n=y(e,r);for(t[e.row][e.col].f=n,a.push(e);a.size>0;){var o=a.pop();if(t[o.row][o.col].isVisitedNode=!0,t[o.row][o.col].isFrontierNode=!1,O(r,o)){x(r,t);break}var i,s=v(o),c=Object(b.a)(s);try{for(c.s();!(i=c.n()).done;){var l=i.value;if(w(l,t)){var d=y(l,r);t[l.row][l.col].f=d,t[l.row][l.col].isFrontierNode=!0,t[l.row][l.col].parent=Object(h.a)({},o),a.push(l)}}}catch(u){c.e(u)}finally{c.f()}}return t}(t,e,r)}return{grid:t,statistics:W(t)}},I=function(t,e,r){var a=r.row,n=r.col,o=(t=t.slice())[a][n];return o.isVisitedNode=!o.isVisitedNode,{grid:t,statistics:Object(h.a)(Object(h.a)({},e),{},{numVisited:o.isVisitedNode?e.numVisited+1:e.numVisited-1})}},B=function(t,e,r){var a=r.row,n=r.col,o=(t=t.slice())[a][n];return o.isWallNode=!o.isWallNode,{grid:t,statistics:Object(h.a)(Object(h.a)({},e),{},{numWall:o.isWallNode?e.numWall+1:e.numWall-1})}},U=function(t,e,r){var a=r.row,n=r.col,o=(t=t.slice())[a][n];return o.isFrontierNode=!o.isFrontierNode,{grid:t,statistics:Object(h.a)(Object(h.a)({},e),{},{numFrontier:o.isFrontierNode?e.numFrontier+1:e.numFrontier-1})}},H=function(t,e,r){var a=r.row,n=r.col,o=(t=t.slice())[a][n];return o.isPathNode=!o.isPathNode,{grid:t,statistics:Object(h.a)(Object(h.a)({},e),{},{numPath:o.isPathNode?e.numPath+1:e.numPath-1})}},z=function(t,e){var r=e.row,a=e.col;return(t=t.slice())[r][a]=function(){var t=new G;return t.isStartNode=!0,t}(),t},Y=function(t,e){var r=e.row,a=e.col;return(t=t.slice())[r][a]=function(){var t=new G;return t.isEndNode=!0,t}(),t},q=function(t,e){var r=e.row,a=e.col,n=e.parent;return(t=t.slice())[r][a].parent=n,t},K=function(t,e){var r=e.f,a=e.g,n=e.h,o=e.row,i=e.col;return(t=t.slice())[o][i].f=r,t[o][i].g=a,t[o][i].h=n,t},X=function(t,e,r,a){var n=r.row,o=r.col;return(t=t.slice())[n][o]=Object(h.a)({},a),{grid:t,statistics:Object(h.a)(Object(h.a)({},e),{},{numWall:e.numWall+(a.isWallNode?1:0)})}},J=function(t,e,r){var a=r.row,n=r.col,o=t[a][n];return{statistics:Object(h.a)(Object(h.a)({},e),{},{numWall:e.numWall-(o.isWallNode?1:0)})}},Q=function(t,e){t=t.slice();for(var r=0,a=0;a<t.length;a++)for(var n=0;n<t[0].length;n++){var o=t[a][n];!o.isStartNode&&!o.isEndNode&&Math.random()<=.3?(o.isWallNode=!0,r++):o.isWallNode=!1}return{grid:t,statistics:Object(h.a)(Object(h.a)({},e),{},{numWall:r})}},Z=function(t,e,r){t=t.slice();for(var a=0;a<t.length;a++)for(var n=0;n<t[0].length;n++)t[a][n]=new G;return t[e.row][e.col].isStartNode=!0,t[r.row][r.col].isEndNode=!0,{grid:t,statistics:tt(t.length,t[0].length)}},$=function(t,e){t=t.slice();for(var r=0;r<t.length;r++)for(var a=0;a<t[0].length;a++){var n=t[r][a];n.isPathNode=!1,n.isVisitedNode=!1,n.isFrontierNode=!1,n.parent=null,n.g=null,n.f=null,n.h=null}return{grid:t,statistics:Object(h.a)(Object(h.a)({},e),{},{numPath:0,numFrontier:0,numVisited:0})}},tt=function(t,e){return new L(t*e)},et=(r(39),"SET_BFS_ALGORITHM"),rt="SET_DFS_ALGORITHM",at="SET_ASTAR_ALGORITHM",nt="SET_GREEDY_ALGORITHM",ot="TOGGLE_VISITED_NODE",it="TOGGLE_FRONTIER_NODE",st="TOGGLE_WALL_NODE",ct="TOGGLE_PATH_NODE",lt="SET_ALGORITHM_STATE",dt="CLEAR_ALGORITHM_STATE",ut="SET_START_NODE",ht="SET_END_NODE",bt="RUN_ALGORITHM",gt="READY_ALGORITHM",ft="PAUSE_ALGORITHM",Nt="COMPLETE_ALGORITHM",jt="SET_PARENT_NODE",mt="GENERATE_WALLS",pt="CLEAR_BOARD",Ot="CLEAR_PATH",vt="SET_DRAGGED_NODE",wt="CLEAR_DRAGGED_NODE",St="SET_START_MASKED_NODE",xt="APPLY_START_MASKED_NODE",Et="RERUN_ALGORITHM",yt="RESET_START_MASKED_NODE",At="SET_END_MASKED_NODE",kt="APPLY_END_MASKED_NODE",_t="RESET_END_MASKED_NODE",Tt="SET_ESTIMATE_VALUES",Dt=function(t,e,r){return{type:jt,payload:{row:t,col:e,parent:r}}},Ft=function(){return{type:Ot}},Mt=function(){return{type:yt}},Pt=function(){return{type:_t}},Rt=r(1);var Gt=Object(u.b)((function(t,e){return{isVisitedNode:t.board.grid[e.row][e.col].isVisitedNode,isWallNode:t.board.grid[e.row][e.col].isWallNode,isStartNode:t.board.grid[e.row][e.col].isStartNode,isEndNode:t.board.grid[e.row][e.col].isEndNode,isPathNode:t.board.grid[e.row][e.col].isPathNode,isFrontierNode:t.board.grid[e.row][e.col].isFrontierNode,startNode:t.board.startNode,endNode:t.board.endNode,draggedNode:t.board.draggedNode,algorithmSelected:t.algorithmSelected}}),(function(t){return{toggleWallNode:function(e,r){return t(function(t,e){return{type:st,payload:{row:t,col:e}}}(e,r))},setParentNode:function(e,r){return t(Dt(e,r))},setDraggedNode:function(e,r){return t(function(t,e){return{type:vt,payload:{row:t,col:e}}}(e,r))},clearDraggedNode:function(){return t({type:wt,payload:{row:e,col:r}});var e,r},setStartNode:function(e,r){return t(function(t,e){return{type:ut,payload:{row:t,col:e}}}(e,r))},setEndNode:function(e,r){return t(function(t,e){return{type:ht,payload:{row:t,col:e}}}(e,r))},setStartMaskedNode:function(e,r){return t(function(t,e){return{type:St,payload:{row:t,col:e}}}(e,r))},setEndMaskedNode:function(e,r){return t(function(t,e){return{type:At,payload:{row:t,col:e}}}(e,r))},applyStartMaskedNode:function(e,r){return t(function(t,e){return{type:xt,payload:{row:t,col:e}}}(e,r))},applyEndMaskedNode:function(e,r){return t(function(t,e){return{type:kt,payload:{row:t,col:e}}}(e,r))},resetStartMaskedNode:function(e,r){return t(Mt())},resetEndMaskedNode:function(e,r){return t(Pt())},rerunAlgorithm:function(e){return t(function(t){return{type:Et,payload:{algorithmSelected:t}}}(e))},clearPath:function(){return t(Ft())}}}))((function(t){var e,r=t.isVisitedNode,a=t.isWallNode,n=t.isEndNode,o=t.isStartNode,i=t.isFrontierNode,s=t.isPathNode,c=t.toggleWallNode,l=t.row,d=t.col,u=t.startNode,h=t.endNode,b=t.draggedNode,g=t.setDraggedNode,f=t.clearDraggedNode,N=t.setStartNode,v=t.setEndNode,w=t.setStartMaskedNode,S=t.applyStartMaskedNode,x=t.algorithmSelected,E=t.rerunAlgorithm,y=t.clearPath,A=t.setEndMaskedNode,k=t.applyEndMaskedNode;return e=o?"start":n?"end":a?"wall":s?"path":r?"visited":i?"frontier":"unvisited",Object(Rt.jsx)("div",{className:"node ".concat(e," unselectable"),onMouseOver:function(){b&&(!b.isWallNode||r||i||a||o||n?b.isStartNode&&!n?(S(b.row,b.col),m()&&y(),w(l,d),N(l,d),g(l,d),m()&&E(x)):b.isEndNode&&!o&&(k(b.row,b.col),m()&&y(),A(l,d),v(l,d),g(l,d),m()&&E(x)):c(l,d))},onMouseUp:function(){f()},onMouseDown:function(){(p()||m()||j())&&(O({row:l,col:d},u)||O({row:l,col:d},h)||r||i||s||c(l,d),g(l,d))}})}));r(41);var Lt=Object(u.b)((function(t){return{grid:t.board.grid}}))((function(t){return Object(Rt.jsx)("div",{className:"grid",children:t.grid.map((function(t,e){return Object(Rt.jsx)("div",{className:"grid-row",children:t.map((function(t,r){return Object(Rt.jsx)(Gt,{row:e,col:r},function(t,e){return t.toString()+"#"+e.toString()}(e,r))}))},function(t){return t.toString()}(e))}))})}));r(42);var Vt=function(t){var e,r,a=t.algorithmStatus,n=(t.algorithmSelected,t.runAlgorithm),o=t.generateWalls,i=t.clearBoard,s=t.clearPath,c=t.readyAlgorithm,l=t.clearAlgorithmState,d=t.resetStartMaskedNode,u=t.resetEndMaskedNode,h=t.toggleShowCarousel,b=!1,g=!1;return"UNSELECTED"===a?(e="Select an Algorithm",r="unselected",b=!0):"READY"===a?(e="Run",r="run"):"PAUSED"===a?(e="Resume",r="run",g=!0):"RUNNING"===a?(e="Pause",r="pause",g=!0):(e="Completed",r="completed",b=!0,g=!0),Object(Rt.jsx)("nav",{className:"navbar",children:Object(Rt.jsx)("div",{className:"navbar-list-container",children:Object(Rt.jsxs)("ul",{className:"navbar-list",children:[Object(Rt.jsx)("li",{className:"navbar-item",children:Object(Rt.jsx)("button",{className:"navbar-button ".concat(g?"navbar-disabled-button":"navbar-normal-button"),onClick:function(){o()},disabled:g,children:"Generate Walls"})}),Object(Rt.jsx)("li",{className:"navbar-item",children:Object(Rt.jsx)("button",{className:"navbar-button ".concat(g?"navbar-disabled-button":"navbar-normal-button"),disabled:g,onClick:h,children:"Select Algorithm"})}),Object(Rt.jsx)("li",{className:"navbar-item",children:Object(Rt.jsx)("button",{className:"navbar-button navbar-run-button ".concat(r),disabled:b,onClick:function(){n()},children:e})}),Object(Rt.jsx)("li",{className:"navbar-item",children:Object(Rt.jsx)("button",{className:"navbar-button navbar-normal-button",onClick:function(){s(),l(),c()},children:"Clear Path"})}),Object(Rt.jsx)("li",{className:"navbar-item",children:Object(Rt.jsx)("button",{className:"navbar-button navbar-normal-button",onClick:function(){i(),l(),c(),d(),u()},children:"Clear Board"})})]})})})};r(43);var Wt=Object(u.b)((function(t){return{statistics:t.board.statistics}}))((function(t){var e=t.statistics;return Object(Rt.jsxs)("div",{className:"statbar",children:[Object(Rt.jsx)("div",{className:"stat-container",children:Object(Rt.jsxs)("div",{className:"stat-node-container",children:[Object(Rt.jsx)("div",{className:"stat-node start"}),Object(Rt.jsx)("span",{className:"stat-description",children:"Start"})]})}),Object(Rt.jsx)("div",{className:"stat-container",children:Object(Rt.jsxs)("div",{className:"stat-node-container",children:[Object(Rt.jsx)("div",{className:"stat-node end"}),Object(Rt.jsx)("span",{className:"stat-description",children:"End"})]})}),Object(Rt.jsxs)("div",{className:"stat-container",children:[Object(Rt.jsxs)("div",{className:"stat-node-container",children:[Object(Rt.jsx)("div",{className:"stat-node unvisited"}),Object(Rt.jsx)("span",{className:"stat-description",children:"Unvisited"})]}),Object(Rt.jsx)("div",{children:Object(Rt.jsx)("span",{className:"stat-value",children:e.numTotal-e.numVisited-e.numWall-e.numFrontier})})]}),Object(Rt.jsxs)("div",{className:"stat-container",children:[Object(Rt.jsxs)("div",{className:"stat-node-container",children:[Object(Rt.jsx)("div",{className:"stat-node visited"}),Object(Rt.jsx)("span",{className:"stat-description",children:"Visited"})]}),Object(Rt.jsx)("div",{children:Object(Rt.jsx)("span",{className:"stat-value",children:e.numVisited})})]}),Object(Rt.jsxs)("div",{className:"stat-container",children:[Object(Rt.jsxs)("div",{className:"stat-node-container",children:[Object(Rt.jsx)("div",{className:"stat-node frontier"}),Object(Rt.jsx)("span",{className:"stat-description",children:"Frontier"})]}),Object(Rt.jsx)("div",{children:Object(Rt.jsx)("span",{className:"stat-value",children:e.numFrontier})})]}),Object(Rt.jsxs)("div",{className:"stat-container",children:[Object(Rt.jsxs)("div",{className:"stat-node-container",children:[Object(Rt.jsx)("div",{className:"stat-node wall"}),Object(Rt.jsx)("span",{className:"stat-description",children:"Wall"})]}),Object(Rt.jsx)("div",{children:Object(Rt.jsx)("span",{className:"stat-value",children:e.numWall})})]}),Object(Rt.jsxs)("div",{className:"stat-container",children:[Object(Rt.jsxs)("div",{className:"stat-node-container",children:[Object(Rt.jsx)("div",{className:"stat-node path"}),Object(Rt.jsx)("span",{className:"stat-description",children:"Path"})]}),Object(Rt.jsx)("div",{children:Object(Rt.jsx)("span",{className:"stat-value",children:e.numPath})})]})]})})),Ct=(r(44),r(19)),It=r(22),Bt=r(10),Ut=r.p+"static/media/BFS.569b2d36.gif",Ht=r.p+"static/media/A Star.a8baf9d5.gif",zt=r.p+"static/media/Greedy.feab91fb.gif",Yt=r.p+"static/media/DFS.b219e317.gif";var qt=function(t){var e=t.toggleShowCarousel,r=t.setBFSAlgorithm,n=t.readyAlgorithm,o=t.setDFSAlgorithm,i=t.setAStarAlgorithm,s=t.setGreedyAlgorithm,c=[{name:"BFS",header:"BFS Algorithm",dispatch:r,gif:Ut,description:"It starts at the root and explores all of it\u2019s children in the next level (neighbors) before moving to each of the root neighbors, and then, it explores the neighbors of the root neighbors, and so on. The algorithm uses a queue to perform the BFS."},{name:"DFS",header:"DFS Algorithm",dispatch:o,gif:Yt,description:"It starts at the root and explores one of it\u2019s children\u2019s sub tree, and then moves to the next child\u2019s sub tree, and so on. It uses stack, or recursion to perform the DFS."},{name:"AStar",header:"A Star Algorithm",dispatch:i,gif:Ht,description:"A* is uses a combination of an educated guess (heuristic distance to the goal) and the distance from the root node to determine the estimated cost of traveling to the goal node using a particular node. Nodes with lower estimated cost are traversed first. The algorithm terminates when we find the goal node."},{name:"Greedy",header:"Greedy Algorithm",dispatch:s,gif:zt,description:"Greedy is an algorithm which makes a choice based on educated guesses (heuristics) at each stage. The node with shortest heuristic distance from the goal node will be explored next. Here we use the manhattan distance between a node and the goal node as the heuristic. It should be noted that the Greedy algorithm does not guarantee an optimal path."}],l=Object(a.useState)(0),u=Object(d.a)(l,2),h=u[0],b=u[1],g=Object(a.useRef)(null);Object(a.useEffect)((function(){function t(t){g&&!g.current.contains(t.target)&&e()}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[g,e]);var f=function(t,e){return(t%e+e)%e};return Object(Rt.jsx)("div",{className:"carousel-container",children:Object(Rt.jsxs)("div",{className:"carousel",ref:g,children:[Object(Rt.jsx)("h1",{children:c[h].header}),Object(Rt.jsx)(It.a,{className:"window-close-icon",onClick:e}),Object(Rt.jsxs)("div",{className:"carousel-upper-mid",children:[Object(Rt.jsx)("div",{className:"carousel-arrow-container",children:Object(Rt.jsx)(Ct.a,{className:"arrow-circle-icon",onClick:function(t){b(f(h-1,c.length))}})}),Object(Rt.jsx)("img",{src:c[h].gif,alt:c[h].name}),Object(Rt.jsx)("div",{className:"carousel-arrow-container",children:Object(Rt.jsx)(Ct.b,{className:"arrow-circle-icon",onClick:function(t){b(f(h+1,c.length))}})})]}),Object(Rt.jsx)("div",{className:"carousel-lower-mid",children:Object(Rt.jsx)("p",{className:"algorithm-description",children:c[h].description})}),Object(Rt.jsxs)("div",{className:"carousel-bottom",children:[Object(Rt.jsx)("button",{className:"carousel-select-button",onClick:function(){return function(t){c[t].dispatch(),e(),j()&&n()}(h)},children:"Select"}),Object(Rt.jsxs)("div",{className:"carousel-navigation",children:[Object(Rt.jsx)(Bt.a,{className:"carousel-navigation-button ".concat(0===h?"carousel-navigation-button-selected":""),onClick:function(){return b(0)}}),Object(Rt.jsx)(Bt.a,{className:"carousel-navigation-button ".concat(1===h?"carousel-navigation-button-selected":""),onClick:function(){return b(1)}}),Object(Rt.jsx)(Bt.a,{className:"carousel-navigation-button ".concat(2===h?"carousel-navigation-button-selected":""),onClick:function(){return b(2)}}),Object(Rt.jsx)(Bt.a,{className:"carousel-navigation-button ".concat(3===h?"carousel-navigation-button-selected":""),onClick:function(){return b(3)}})]})]})]})})};r(45);var Kt=Object(u.b)((function(t){return{grid:t.board.grid,algorithmSelected:t.algorithmSelected,startNode:t.board.startNode,endNode:t.board.endNode,algorithmState:t.algorithmState,algorithmStatus:t.algorithmStatus,statistics:t.board.statistics}}),(function(t){return{setBFSAlgorithm:function(){return t({type:et})},setDFSAlgorithm:function(){return t({type:rt})},setAStarAlgorithm:function(){return t({type:at})},setGreedyAlgorithm:function(){return t({type:nt})},toggleVisitedNode:function(e,r){return t(function(t,e){return{type:ot,payload:{row:t,col:e}}}(e,r))},toggleFrontierNode:function(e,r){return t(function(t,e){return{type:it,payload:{row:t,col:e}}}(e,r))},togglePathNode:function(e,r){return t(function(t,e){return{type:ct,payload:{row:t,col:e}}}(e,r))},setAlgorithmState:function(e){return t({type:lt,payload:e})},clearAlgorithmState:function(){return t({type:dt})},readyAlgorithm:function(){return t({type:gt})},runAlgorithm:function(){return t({type:bt})},pauseAlgorithm:function(){return t({type:ft})},completeAlgorithm:function(){return t({type:Nt})},setParentNode:function(e,r,a){return t(Dt(e,r,a))},generateWalls:function(){return t({type:mt})},clearBoard:function(){return t({type:pt})},clearPath:function(){return t(Ft())},resetStartMaskedNode:function(){return t(Mt())},resetEndMaskedNode:function(){return t(Pt())},setEstimateValues:function(e,r,a,n,o){return t(function(t,e,r,a,n){return{type:Tt,payload:{f:r,g:a,h:n,row:t,col:e}}}(e,r,a,n,o))}}}))((function(t){var e=Object(a.useState)(!1),r=Object(d.a)(e,2),n=r[0],o=r[1],i=function(){var e=Object(l.a)(c.a.mark((function e(){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!N()){e.next=3;break}return t.pauseAlgorithm(),e.abrupt("return");case 3:t.runAlgorithm(),e.t0=t.algorithmSelected,e.next="BFS"===e.t0?7:"DFS"===e.t0?11:"ASTAR"===e.t0?15:"GREEDY"===e.t0?19:23;break;case 7:return e.next=9,M(t.algorithmState,t.grid,t.startNode,t.endNode,t.toggleVisitedNode,t.toggleFrontierNode,t.togglePathNode,t.completeAlgorithm,t.setParentNode);case 9:return r=e.sent,e.abrupt("break",24);case 11:return e.next=13,P(t.algorithmState,t.grid,t.startNode,t.endNode,t.toggleVisitedNode,t.toggleFrontierNode,t.togglePathNode,t.completeAlgorithm,t.setParentNode);case 13:return r=e.sent,e.abrupt("break",24);case 15:return e.next=17,T(t.algorithmState,t.grid,t.startNode,t.endNode,t.toggleVisitedNode,t.toggleFrontierNode,t.togglePathNode,t.completeAlgorithm,t.setParentNode,t.setEstimateValues);case 17:return r=e.sent,e.abrupt("break",24);case 19:return e.next=21,R(t.algorithmState,t.grid,t.startNode,t.endNode,t.toggleVisitedNode,t.toggleFrontierNode,t.togglePathNode,t.completeAlgorithm,t.setParentNode,t.setEstimateValues);case 21:return r=e.sent,e.abrupt("break",24);case 23:return e.abrupt("break",24);case 24:m()||p()?t.clearAlgorithmState():t.setAlgorithmState(r);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(Rt.jsxs)("div",{children:[Object(Rt.jsx)(Vt,{runAlgorithm:i,algorithmStatus:t.algorithmStatus,algorithmSelected:t.algorithmSelected,generateWalls:t.generateWalls,clearBoard:t.clearBoard,clearPath:t.clearPath,readyAlgorithm:t.readyAlgorithm,clearAlgorithmState:t.clearAlgorithmState,resetStartMaskedNode:t.resetStartMaskedNode,resetEndMaskedNode:t.resetEndMaskedNode,toggleShowCarousel:function(){return o(!n)}}),Object(Rt.jsx)("div",{className:"grid-container",children:Object(Rt.jsx)(Lt,{})}),Object(Rt.jsx)("div",{className:"statbar-container",children:Object(Rt.jsx)(Wt,{})}),n&&Object(Rt.jsx)(qt,{toggleShowCarousel:function(){return o(!n)},setBFSAlgorithm:t.setBFSAlgorithm,readyAlgorithm:t.readyAlgorithm,setDFSAlgorithm:t.setDFSAlgorithm,setAStarAlgorithm:t.setAStarAlgorithm,setGreedyAlgorithm:t.setGreedyAlgorithm})]})}));var Xt=function(){return Object(Rt.jsx)("div",{className:"App",children:Object(Rt.jsx)(Kt,{})})},Jt=r(13),Qt={row:9,col:15},Zt={row:9,col:35};var $t=Object(Jt.a)({board:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{grid:V(20,50,Qt,Zt),statistics:tt(20,50),draggedNode:null,startMaskedNode:new G,endMaskedNode:new G,startNode:Qt,endNode:Zt},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ot:var r=I(t.grid,t.statistics,e.payload),a=r.grid,n=r.statistics;return Object(h.a)(Object(h.a)({},t),{},{grid:a,statistics:n});case st:var o=B(t.grid,t.statistics,e.payload),i=o.grid,s=o.statistics;return Object(h.a)(Object(h.a)({},t),{},{grid:i,statistics:s});case it:var c=U(t.grid,t.statistics,e.payload),l=c.grid,d=c.statistics;return Object(h.a)(Object(h.a)({},t),{},{grid:l,statistics:d});case ct:var u=H(t.grid,t.statistics,e.payload),b=u.grid,g=u.statistics;return Object(h.a)(Object(h.a)({},t),{},{grid:b,statistics:g});case ut:return Object(h.a)(Object(h.a)({},t),{},{grid:z(t.grid,e.payload),startNode:{row:e.payload.row,col:e.payload.col}});case ht:return Object(h.a)(Object(h.a)({},t),{},{grid:Y(t.grid,e.payload),endNode:{row:e.payload.row,col:e.payload.col}});case jt:return Object(h.a)(Object(h.a)({},t),{},{grid:q(t.grid,e.payload)});case mt:var f=Q(t.grid,t.statistics),N=f.grid,j=f.statistics;return Object(h.a)(Object(h.a)({},t),{},{grid:N,statistics:j});case pt:var m=Z(t.grid,t.startNode,t.endNode),p=m.grid,O=m.statistics;return Object(h.a)(Object(h.a)({},t),{},{grid:p,statistics:O});case Ot:var v=$(t.grid,t.statistics),w=v.grid,S=v.statistics;return Object(h.a)(Object(h.a)({},t),{},{grid:w,statistics:S});case vt:return Object(h.a)(Object(h.a)({},t),{},{draggedNode:Object(h.a)(Object(h.a)({},t.grid[e.payload.row][e.payload.col]),{},{row:e.payload.row,col:e.payload.col})});case wt:return Object(h.a)(Object(h.a)({},t),{},{draggedNode:null});case St:var x=J(t.grid,t.statistics,e.payload),E=x.statistics;return Object(h.a)(Object(h.a)({},t),{},{statistics:E,startMaskedNode:Object(h.a)({},t.grid[e.payload.row][e.payload.col])});case xt:var y=X(t.grid,t.statistics,e.payload,t.startMaskedNode),A=y.grid,k=y.statistics;return Object(h.a)(Object(h.a)({},t),{},{grid:A,statistics:k});case yt:return Object(h.a)(Object(h.a)({},t),{},{startMaskedNode:new G});case At:var _=J(t.grid,t.statistics,e.payload),T=_.statistics;return Object(h.a)(Object(h.a)({},t),{},{statistics:T,endMaskedNode:Object(h.a)({},t.grid[e.payload.row][e.payload.col])});case kt:var D=X(t.grid,t.statistics,e.payload,t.endMaskedNode),F=D.grid,M=D.statistics;return Object(h.a)(Object(h.a)({},t),{},{grid:F,statistics:M});case _t:return Object(h.a)(Object(h.a)({},t),{},{endMaskedNode:new G});case Et:var P=C(t.grid,t.startNode,t.endNode,e.payload.algorithmSelected),R=P.grid,L=P.statistics;return Object(h.a)(Object(h.a)({},t),{},{grid:R,statistics:L});case Tt:return Object(h.a)(Object(h.a)({},t),{},{grid:K(t.grid,e.payload)});default:return t}},algorithmStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"UNSELECTED",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case gt:return"READY";case bt:return"RUNNING";case ft:return"PAUSED";case Nt:return"COMPLETED";default:return t}},algorithmSelected:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case et:return"BFS";case at:return"ASTAR";case rt:return"DFS";case nt:return"GREEDY";default:return t}},algorithmState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case lt:return e.payload;case dt:return null;default:return t}}}),te=$t,ee=Object(Jt.b)(te,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(Rt.jsx)(n.a.StrictMode,{children:Object(Rt.jsx)(u.a,{store:ee,children:Object(Rt.jsx)(Xt,{})})}),document.getElementById("root"));var re=e.default=ee}},[[46,1,2]]]);
//# sourceMappingURL=main.390490b2.chunk.js.map
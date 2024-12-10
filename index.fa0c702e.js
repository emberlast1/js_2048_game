!function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var e=new(function(){var e,r;function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.createEmptyBoard();!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,a),this.board=t,this.score=0,this.status="idle"}return e=[{key:"createEmptyBoard",value:function(){return[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}},{key:"moveLeft",value:function(){for(var t=this,e=!1,r=0;r<4;r++)!function(r){for(var a=t.board[r].filter(function(t){return t});a.length<4;)a.push(0);for(var o=0;o<a.length-1;o++)a[o]===a[o+1]&&(a[o]*=2,a[o+1]=0,t.score+=a[o]);for(a=a.filter(function(t){return t});a.length<4;)a.push(0);t.board[r].join()!==a.join()&&(t.board[r]=a,e=!0)}(r);e&&(this.addRandomTile(),this.gameStatus())}},{key:"moveRight",value:function(){for(var t=this,e=!1,r=0;r<4;r++)!function(r){for(var a=t.board[r].filter(function(t){return t}).reverse();a.length<4;)a.push(0);for(var o=0;o<a.length-1;o++)a[o]===a[o+1]&&(a[o]*=2,a[o+1]=0,t.score+=a[o]);for(a=a.filter(function(t){return t}).reverse();a.length<4;)a.unshift(0);t.board[r].join()!==a.join()&&(t.board[r]=a,e=!0)}(r);e&&(this.addRandomTile(),this.gameStatus())}},{key:"moveUp",value:function(){for(var t=this,e=!1,r=0;r<4;r++)!function(r){for(var a=[],o=0;o<4;o++)0!==t.board[o][r]&&a.push(t.board[o][r]);for(;a.length<4;)a.push(0);for(var n=0;n<a.length;n++)a[n]===a[n+1]&&(a[n]*=2,a[n+1]=0,t.score+=a[n]);for(a=a.filter(function(t){return t});a.length<4;)a.push(0);for(var s=0;s<4;s++)t.board[s][r]!==a[s]&&(e=!0),t.board[s][r]=a[s]}(r);e&&(this.addRandomTile(),this.gameStatus())}},{key:"moveDown",value:function(){for(var t=this,e=!1,r=0;r<4;r++)!function(r){for(var a=[],o=0;o<4;o++)0!==t.board[o][r]&&a.push(t.board[o][r]);for(;a.length<4;)a.unshift(0);for(var n=a.length-1;n>0;n--)a[n]===a[n-1]&&(a[n]*=2,a[n-1]=0,t.score+=a[n]);for(a=a.filter(function(t){return t});a.length<4;)a.unshift(0);for(var s=0;s<4;s++)t.board[s][r]!==a[s]&&(e=!0),t.board[s][r]=a[s]}(r);e&&(this.addRandomTile(),this.gameStatus())}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.board}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.board=this.createEmptyBoard(),this.score=0,this.status="playing",this.addRandomTile(),this.addRandomTile()}},{key:"restart",value:function(){this.board=this.createEmptyBoard(),this.score=0,this.status="idle"}},{key:"addRandomTile",value:function(){for(var t=[],e=0;e<4;e++)for(var r=0;r<4;r++)0===this.board[e][r]&&t.push({row:e,cell:r});if(t.length>0){var a=t[Math.floor(Math.random()*t.length)],o=a.row,n=a.cell;this.board[o][n]=.9>Math.random()?2:4}}},{key:"gameStatus",value:function(){var t=!0,e=!1,r=void 0;try{for(var a,o=this.board[Symbol.iterator]();!(t=(a=o.next()).done);t=!0)if(a.value.includes(2048)){this.status="win";return}}catch(t){e=!0,r=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw r}}for(var n=0;n<4;n++)for(var s=0;s<4;s++)if(0===this.board[n][s]||n>0&&this.board[n][s]===this.board[n-1][s]||s>0&&this.board[n][s]===this.board[n][s-1])return;this.status="lose"}}],t(a.prototype,e),r&&t(a,r),a}()),r=document.querySelector(".button"),a=document.querySelector(".message-start"),o=document.querySelector(".message-lose"),n=document.querySelector(".message-lose");function s(t){for(var e=document.querySelector(".game-field").querySelectorAll(".field-cell"),r=document.querySelector(".game-score"),a=t.getState(),s=0;s<4;s++)for(var i=0;i<4;i++){var l=e[4*s+i],u=a[s][i];l.classList="field-cell field-cell--".concat(u),l.textContent=0===u?"":u,0===u&&(l.classList="field-cell")}r.textContent=t.getScore(),"win"===t.getStatus()?n.classList.remove("hidden"):"lose"===t.getStatus()?o.classList.remove("hidden"):(n.classList.add("hidden"),o.classList.add("hidden"))}r.addEventListener("click",function(){r.classList.contains("start")?(r.classList.remove("start"),r.classList.add("restart"),r.textContent="Restart",a.classList.add("hidden"),e.start()):r.classList.contains("restart")&&(r.classList.remove("restart"),r.classList.add("start"),r.textContent="Start",a.classList.remove("hidden"),e.restart()),s(e)}),document.addEventListener("keydown",function(t){if("playing"===e.getStatus()){switch(t.key){case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight();break;case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown()}s(e)}})}();
//# sourceMappingURL=index.fa0c702e.js.map

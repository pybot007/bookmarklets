javascript:!function r(){let t=document.querySelector(".js-calendar-graph-svg").querySelectorAll("g g");console.log("%d weeks",t.length);let e=document.querySelector(".js-yearly-contributions h2"),n=document.querySelector(".contrib-footer a");function u(r){let t=Number(r.getAttribute("data-count"));return{rect:r,fill:r.getAttribute("fill"),count:t,curr:t>0?1:0,next:0}}n.href="https://github.com/bahmutov/game-of-github",n.innerText="Game of GitHub";var o=Array.from(t).map(function r(t){console.log(t);let e=t.querySelectorAll(".day");return Array.from(e).map(u)});let l=o.pop();function f(r,t){return r||3!==t?r?t<2||t>3?0:1:0:1}!function r(t){t.forEach(function(r){r.rect.setAttribute("fill","#ffffff")})}(l),console.log(function r(t){var e,n,u,o=1/0,l=-1/0;for(e=0;e<t.length;e+=1){let f=t[e];for(n=0;n<f.length;n+=1)(u=f[n].count)<o&&(o=u),u>l&&(l=u)}return{min:o,max:l}}(o));var c=0;!function r(){var t;!function r(t){var e,n,u,o;for(e=0;e<52;e+=1){let l=0===e?51:e-1,c=51===e?0:e+1;for(n=0;n<7;n+=1){let i=0===n?6:n-1,a=6===n?0:n+1;u=0,u+=t[l][i].curr,u+=t[l][n].curr,u+=t[l][a].curr,u+=t[e][i].curr,u+=t[e][a].curr,u+=t[c][i].curr,u+=t[c][n].curr,u+=t[c][a].curr,t[e][n].neighbours=u,o=t[e][n].curr,t[e][n].next=f(o,u)}}}(o),function r(t){var e,n;let u="#eeeeee";for(e=0;e<52;e+=1)for(n=0;n<7;n+=1){let o=t[e][n];if(o.curr){let l=o.fill===u?"#d6e685":o.fill;o.rect.setAttribute("fill",l)}else o.rect.setAttribute("fill",u)}}(o),c+=1;let n=function r(t){var e,n,u=!1;for(e=0;e<52;e+=1)for(n=0;n<7;n+=1){let o=t[e][n];o.curr!==o.next&&(u=!0),o.curr=o.next}return u}(o);n?(t=""+c+" generations",e.innerText=t,setTimeout(r,250)):(t="Game of GitHub lost after "+c+" generations \uD83D\uDE1E",e.innerText=t)}()}();

//idk how to fix, do it on somebodies profile.
javascript:function initDash(){var e,t=document.createElement("div"),n=(t.style.position="fixed",t.style.right="0",t.style.bottom="0",t.style.zIndex="4999",document.createElement("div")),n=(n.innerHTML="❌",n.addEventListener("click",function(){t.remove()}),t.appendChild(n),document.createElement("input")),i=(n.type="range",n.min=0,n.max=1,n.step=.1,n.value=.7,n.addEventListener("input",function(){document.getElementsByTagName("video")[0].style.filter="brightness("+this.value+")"}),t.appendChild(n),document.createElement("div"));for(e of[1,2,3,5,10]){var a=document.createElement("button");a.value=e,a.innerHTML="x"+e,i.appendChild(a)}i.addEventListener("click",function(e){document.getElementsByTagName("video")[0].playbackRate=parseInt(e.target.value)}),t.appendChild(i),document.body.appendChild(t)}initDash();

//makes you able to play yt videos at higher rate, gui at bottom right corner

//orig by krazete

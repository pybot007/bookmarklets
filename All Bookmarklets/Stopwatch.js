javascipt:(function(){var timerInterval = null;var iElapsed = 0;var iPrevious = 0;var bg;function createBG(){bg = document.createElement("div");bg.id = "crebTimer";bg.style.width="200px";bg.style.height="75px";bg.style.backgroundColor="white";bg.style.border="solid 3px black";bg.style.position="absolute";bg.style.left="0px";bg.style.top="0px";bg.style.zIndex="500";bg.style.textAlign="center";var bod = document.getElementsByTagName("body")[0];bod.appendChild(bg);}function createForm(){if(bg){var timer_display = document.createElement("div");timer_display.innerHTML = "00:00:00";bg.appendChild(timer_display);var start_stop = document.createElement("input");start_stop.type="button";start_stop.value = "START";document.onkeypress = function(event){if(event.keyCode==122){start_stop.onclick();}};start_stop.onclick = function(){if(start_stop.value=="START"){if(timerInterval!=null){alert('not null');return;}document.getElementById("clearButton").style.display="none";start_stop.value="STOP";timerInterval = setInterval(function(){iPrevious = (iPrevious==0) ? new Date().getTime() : iPrevious;iElapsed = new Date().getTime();var curTime = iElapsed - iPrevious;var minutes = 0;var seconds = 0;var millis = curTime;if(millis > 1000){seconds = Math.floor(millis/1000);millis = (millis-(seconds*1000));if(seconds >= 60){minutes = Math.floor(seconds/60);seconds = seconds - (minutes*60)}}if(minutes.toString().length==1){minutes = "0"+minutes.toString();}if(seconds.toString().length==1){seconds = "0"+seconds.toString();}if(millis.toString().length==1){millis = "0"+millis.toString();} else if(millis.toString().length==3){millis = millis.toString().substr(0,2);}timer_display.innerHTML = minutes.toString()+":"+seconds.toString()+":"+millis.toString();},10);}else{start_stop.value="START";clearInterval(timerInterval);timerInterval = null;document.getElementById("clearButton").style.display="inline-block";}};bg.appendChild(start_stop);var clear = document.createElement("input");clear.type="button";clear.id = "clearButton";clear.value="CLEAR";clear.onclick = function(){iElapsed = 0;iPrevious = 0;timer_display.innerHTML = "00:00:00";};bg.appendChild(clear);}}if(document.getElementById("crebTimer")==null){createBG();createForm();}})();

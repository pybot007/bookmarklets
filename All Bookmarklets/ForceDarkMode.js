javascript:(function(){function invert(o,t){var r=o.split("("),n=r[1].split(")")[0].split(",");return n.forEach(function(o,r){r<3&&(n[r]="color"==t&&255-parseInt(o)<50?120:255-parseInt(o))}),n=n.join(","),r[0]+"("+n+")"}document.querySelectorAll("*:not([invTouch])").forEach(function(o){var t=window.getComputedStyle(o);o.style.backgroundColor=invert(t.backgroundColor,"back"),o.style.color=invert(t.color,"color"),o.setAttribute("invTouch","true")});})();

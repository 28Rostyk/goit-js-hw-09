const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.body};let e=null;t.start.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.start.setAttribute("disabled","disabled"),t.stop.removeAttribute("disabled")})),t.stop.addEventListener("click",(function(){clearInterval(e),e=0,t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled","disabled")}));
//# sourceMappingURL=01-color-switcher.658914e6.js.map
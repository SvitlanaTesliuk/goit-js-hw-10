import"./assets/styles-DqRwM9aT.js";import{f as p}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector("[data-start]"),d=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]"),m=document.getElementById("datetime-picker");let r=null,c=null;const x={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],r<=new Date?(iziToast.error({message:"Please choose a date in the future"}),n.disabled=!0):n.disabled=!1}};p("#datetime-picker",x);n.addEventListener("click",()=>{n.disabled=!0,m.disabled=!0,c=setInterval(()=>{const e=r-new Date;e<=0?(clearInterval(c),iziToast.success({message:"Countdown finished!"}),b()):S(T(e))},1e3)});function S({days:t,hours:e,minutes:s,seconds:a}){d.textContent=o(t),u.textContent=o(e),i.textContent=o(s),l.textContent=o(a)}function o(t){return String(t).padStart(2,"0")}function b(){d.textContent="00",u.textContent="00",i.textContent="00",l.textContent="00",n.disabled=!0,m.disabled=!1}function T(t){const f=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),y=Math.floor(t%864e5%36e5/6e4),C=Math.floor(t%864e5%36e5%6e4/1e3);return{days:f,hours:h,minutes:y,seconds:C}}
//# sourceMappingURL=1-timer.js.map

import"./assets/styles-618a3959.js";import{f as y,i as d}from"./assets/vendor-651d7991.js";document.addEventListener("DOMContentLoaded",function(){const u=y("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0],t=document.getElementById("start-btn");n<new Date?(t.disabled=!0,d.error({title:"Error",message:"Please choose a date in the future"})):t.disabled=!1}});function o(e){return e.toString().padStart(2,"0")}function c(e){const{days:n,hours:t,minutes:r,seconds:a}=l(e);document.querySelector("[data-days]").textContent=o(n),document.querySelector("[data-hours]").textContent=o(t),document.querySelector("[data-minutes]").textContent=o(r),document.querySelector("[data-seconds]").textContent=o(a)}function i(){const e=u.selectedDates[0],n=new Date,t=e-n;if(t<=0){d.error({title:"Error",message:"Invalid countdown duration"});return}c(t);const r=setInterval(()=>{const a=new Date,s=e-a;s<=0?(c(0),clearInterval(r)):c(s)},1e3)}document.getElementById("start-btn").addEventListener("click",i);function l(e){const s=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:m,minutes:f,seconds:h}}});
//# sourceMappingURL=commonHelpers.js.map
import"./assets/styles-DqRwM9aT.js";import{i as r}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector(".form");function m(e,t){return new Promise((o,s)=>{setTimeout(()=>{t?o(e):s(e)},e)})}l.addEventListener("submit",e=>{e.preventDefault();const t=Number(e.target.delay.value),s=e.target.state.value==="fulfilled";m(t,s).then(i=>{r.success({title:"Success",message:`✅ Fulfilled promise in ${i}ms`,position:"topRight"})}).catch(i=>{r.error({title:"Error",message:`❌ Rejected promise in ${i}ms`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map

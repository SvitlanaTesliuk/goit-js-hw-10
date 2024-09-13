import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


  const form = document.querySelector('.form');

function createPromise(delay, shouldFulfill) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFulfill) {
        resolve(delay); 
      } else {
        reject(delay); 
      }
    }, delay);
  });
}


form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  const delay = Number(event.target.delay.value);
  const state = event.target.state.value;

  
  const shouldFulfill = state === 'fulfilled';

  createPromise(delay, shouldFulfill)
    .then((delay) => {
        iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch((delay) => {
        iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
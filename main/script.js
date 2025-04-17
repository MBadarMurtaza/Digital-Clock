let hrs = document.getElementById("hrs");
let mns = document.getElementById("mins");
let sec = document.getElementById("sec");

setInterval(() => {
  let current = new Date();
  hrs.innerHTML = (current.getHours() < 10 ? "0" : "") + current.getHours();
  mns.innerHTML = (current.getMinutes() < 10 ? "0" : "") + current.getMinutes();
  sec.innerHTML = (current.getSeconds() < 10 ? "0" : "") + current.getSeconds();
}, 1000);

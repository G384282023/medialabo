'use strict';

let kotae = Math.floor(Math.random() * 10) + 1;  
let kaisu = 1;

document.getElementById('guess').addEventListener('click', hantei);

function hantei() {
  document.getElementById('kaisu').textContent = kaisu;

  let input = document.getElementById('user_input').value;
  let yoso = parseInt(input, 10);  
  document.getElementById('answer').textContent = yoso;

  let result = document.getElementById('result');

  if (yoso === kotae) {
    result.textContent = "正解です。おめでとう！";
  } else if (kaisu >= 3) {
    result.textContent = "答えは " + kotae + " でした。残念。";
  } else if (yoso < kotae) {
    result.textContent = "まちがい。答えはもっと大きいですよ。";
  } else if (yoso > kotae) {
    result.textContent = "まちがい。答えはもっと小さいですよ。";
  }

  kaisu++;
}

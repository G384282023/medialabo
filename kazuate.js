'use strict';

let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);


document.getElementById("guess").addEventListener("click", hantei);


function hantei() {
  let kaisu = parseInt(document.getElementById("kaisu").textContent, 10);

  let yoso = parseInt(document.getElementById("user_input").value, 10);

  document.getElementById("answer").textContent = yoso;

  let result = document.getElementById("result");

  if (kaisu >= 4) {
    result.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  } else if (yoso === kotae) {
    result.textContent = "正解です．おめでとう!";
    kaisu = 4;
  } else {
    if (kaisu === 3) {
      result.textContent = "まちがい．残念でした答えは " + kotae + " です．";
    } else if (yoso < kotae) {
      result.textContent = "まちがい．答えはもっと大きいですよ";
    } else {
      result.textContent = "まちがい．答えはもっと小さいですよ";
    }
    kaisu++;
  }

  document.getElementById("kaisu").textContent = kaisu;
}

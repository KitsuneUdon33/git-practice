
git commit -m "[Start] Webアプリケーションを作ってみよう-1"
function loadHello(){
  alert("Hello!");
}

function sum(){
  let x = 3;
  let y = 4;
  let z = x + y;
  alert(z);
}
git commit -m "[Finish]Webアプリケーションを作ってみよう-1"

git commit -m "[Start] Webアプリケーションを作ってみよう-2"
let name;
let username;
let userresult;

username = prompt("お名前を教えて下さい。");
if (username == "") {
  username = "名無し";
}
document.getElementById("name").innerHTML = username;


let rand = Math.floor( Math.random() * 5);
if (rand == 0) {
  userresult = "大吉";
}
if (rand == 1) {
  userresult = "中吉";
}
if (rand == 2) {
  userresult = "小吉";
}
if (rand == 3) {
  userresult = "吉";
}
if (rand == 4) {
  userresult = "凶";
}
document.getElementById("result").innerHTML = userresult;
git commit -m "[Finish]Webアプリケーションを作ってみよう-2"
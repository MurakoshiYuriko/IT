let names = ["田中さん", "佐藤さん", "山田さん", "鈴木さん"];

function show(page) {
  document.getElementById("home").style.display = "none";
  document.getElementById("chat").style.display = "none";
  document.getElementById("health").style.display = "none";

  document.getElementById(page).style.display = "block";
}

function send() {
  let msg = document.getElementById("input").value;

  addMessage("自分", msg);

  setTimeout(() => {
    let name = names[Math.floor(Math.random()*names.length)];
    let replies = ["いいですね！", "私もです", "楽しそう！"];
    let r = replies[Math.floor(Math.random()*replies.length)];
    addMessage(name, r);
  }, Math.random()*2000 + 500);
}

function addMessage(name, text) {
  let chat = document.getElementById("chatBox");
  chat.innerHTML += "<p>" + name + "：" + text + "</p>";
}

function record() {
  let steps = Math.floor(Math.random() * 5000);
  document.getElementById("result").innerText =
    "今日の歩数：" + steps + "歩 記録しました！";
}

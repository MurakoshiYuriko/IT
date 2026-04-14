function send() {
  let msg = document.getElementById("input").value;

  addMessage("自分", msg);

  setTimeout(() => {
    let replies = ["いいですね！", "私もです", "楽しそう！"];
    let r = replies[Math.floor(Math.random()*replies.length)];
    addMessage("参加者", r);
  }, 1000);
}

function addMessage(name, text) {
  let chat = document.getElementById("chat");
  chat.innerHTML += "<p>" + name + "：" + text + "</p>";
}

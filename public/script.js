async function sendMessage() {
  const msg = document.getElementById("input").value;
  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });
  const data = await res.json();
  document.getElementById("log").innerHTML += "<p><b>あなた:</b> " + msg + "</p>";
  document.getElementById("log").innerHTML += "<p><b>リツ子:</b> " + data.reply + "</p>";
}
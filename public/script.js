fetch("/health")
.then(res => res.text())
.then(data => {
  document.getElementById("status").innerHTML =
    "System Health: 🟢 " + data;
})
.catch(() => {
  document.getElementById("status").innerHTML =
    "System Health: 🔴 DOWN";
});
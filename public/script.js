async function checkHealth(){
    try{
        const res = await fetch("/health");
        const text = await res.text();
        document.getElementById("status").innerHTML =
        "🟢 System Healthy : " + text;
    }catch{
        document.getElementById("status").innerHTML =
        "🔴 System Down";
    }
}

// refresh every 5 sec (looks live monitoring)
checkHealth();
setInterval(checkHealth,5000);
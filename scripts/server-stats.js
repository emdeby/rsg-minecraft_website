async function getServerStats() {
    const response = await fetch("https://rsg-minecraftwebsite-wjqr.vercel.app/api/server_infos");
    const data = await response.json();

    let status = "null";
    if (data.status == 0) {
        status = "Offline"
    } else if (data.status == 1) {
        status = "Online"
    } else {
        status = "Unknown"
    }

    console.log(data);
    document.getElementById("server-status").textContent = status
    document.getElementById("server-version").textContent = data.version;
    document.getElementById("playersOnline").textContent = data.playersOnline;
    document.getElementById("playersMax").textContent = data.playersMax;
}

getServerStats();
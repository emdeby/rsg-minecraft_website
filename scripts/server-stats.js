async function getServerStats() {
    const response = await fetch("https://rsg-minecraftwebsite-wjqr.vercel.app/api/server_infos");
    const data = await response.json();

    const statusDot = document.getElementById("server-status-dot");

    statusDot.classList.remove("online", "offline", "unknown");

    if (data.status == 0) {
        statusDot.classList.add("online");
    } else if (data.status == 1) {
        statusDot.classList.add("offline");
    } else {
        statusDot.classList.add("unknown");
    }

    console.log(data);
    document.getElementById("server-status").textContent = status
    document.getElementById("server-version").textContent = data.version;
    document.getElementById("playersOnline").textContent = data.playersOnline;
    document.getElementById("playersMax").textContent = data.playersMax;
}

getServerStats();
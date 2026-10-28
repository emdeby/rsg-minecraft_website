async function getServerStats() {
    const response = await fetch("https://rsg-minecraftwebsite-wjqr.vercel.app/api/server_infos");
    const data = await response.json();
    console.log(data);

    const statusDot = document.getElementById("server-status");
    statusDot.classList.remove("online", "offline", "unknown");

    if (data.status == 0) {
        statusDot.classList.add("offline");
    } else if (data.status == 1) {
        statusDot.classList.add("online");
    } else {
        statusDot.classList.add("unknown");
    }

    document.getElementById("server-version").textContent = data.version;
    document.getElementById("playersOnline").textContent = data.playersOnline;
    document.getElementById("playersMax").textContent = data.playersMax;
}

getServerStats();
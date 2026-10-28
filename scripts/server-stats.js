async function getServerStats() {
    const response = await fetch("https://rsg-minecraftwebsite-wjqr.vercel.app/api/server_infos");
    const data = await response.json();
    console.log(data);

    const statusDot = document.getElementById("server-status");
    const serverVersion = document.getElementById("server-version");
    const playersOnline = document.getElementById("playersOnline");
    const playersMax = document.getElementById("playersMax");
    const playerlist = document.getElementById("player-list");

    if (statusDot) {
        statusDot.classList.remove("online", "offline", "unknown");
        if (data.status == 0) {
            statusDot.classList.add("offline");
        } else if (data.status == 1) {
            statusDot.classList.add("online");
        } else {
            statusDot.classList.add("unknown");
        }
    }

    if (serverVersion) {
        document.getElementById("server-version").textContent = data.version;
    }
    if (playersOnline) {
        document.getElementById("playersOnline").textContent = data.playersOnline;
    }
    if (playersMax) {
        document.getElementById("playersMax").textContent = data.playersMax;
    }
    if (playerlist) {
        playerlist.innerHTML = "";
        
        if (data.playerList.length == 0) {
            const listItem = document.createElement("li");
            listItem.textContent = "Niemand online ;(";
            playerlist.appendChild(listItem);
        } else {
            data.playerList.forEach(player => {
                const listItem = document.createElement("li");
                const head = document.createElement("img");
                head.src = `https://mc-heads.net/avatar/${encodeURIComponent(player)}`;
                listItem.appendChild(head);
                listItem.appendChild(document.createTextNode(player));
                playerlist.appendChild(listItem);
            });
        }
        
    }
}

getServerStats();
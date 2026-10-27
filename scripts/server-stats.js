async function getServerStats() {
    const response = await fetch("https://rsg-minecraftwebsite-wjqr.vercel.app/api/server_infos");
    const data = await response.json();

    console.log(data);
}

getServerStats();
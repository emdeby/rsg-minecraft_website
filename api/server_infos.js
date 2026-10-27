export default async function handler(req, res) {
    const token = process.env.EXAROTON_TOKEN;
    const serverId = process.env.EXAROTON_SERVER_ID;

    if (!token) {
        return res.status(500).json({
            message: "Token missing!"
        })
    } 
    
    if (!serverId) {
        return res.status(500).json({
            message: "Server ID missing!"
        })
    }

    const headers = {
        Authorization: `Bearer ${token}`
    };
    const response = await fetch(`https://api.exaroton.com/v1/servers/${serverId}`, {headers: headers });

    if (!response.ok) {
        return res.status(response.status).json({
            message: "Fetching exaroton api failed!"
        })
    }

    const data = await response.json();

    const version = data.data.software.version;
    const status = data.data.status;
    const playersMax = data.data.players.max;
    const playersOnline = data.data.players.count;

    return res.status(200).json({
        version,
        status,
        playersMax,
        playersOnline
    })
}
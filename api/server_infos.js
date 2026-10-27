export default function handler(req, res) {
    const token = process.env.EXAROTON_TOKEN;
    const serverId = process.env.EXAROTON_SERVER_ID;

    return res.status(200).json({
        message: "Hello world!"
    });

    if (token) {
        return res.status(200).json({
            token: "Vorhanden!"
        })
    } else {
        return res.status(500).json({
            token: "Nicht vorhanden!"
        })
    }
    
    if (serverId) {
        return res.status(200).json({
            serverId: "Vorhanden!"
        })
    } else {
        return res.status(500).json({
            serverId: "Nicht vorhanden!"
        })
    }
}
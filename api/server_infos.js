export default function handler(req, res) {
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

    return res.status(200).json({
        message: "All set!"
    });
}
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        const { name, email, message } = req.body;
        
        // Obtener la API Key secreta desde las Variables de Entorno de Vercel
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
        
        if (!accessKey) {
            console.error("WEB3FORMS_ACCESS_KEY no está configurada en las variables de entorno.");
            return res.status(500).json({ success: false, message: 'Server configuration error.' });
        }

        const formData = new FormData();
        formData.append("access_key", accessKey);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        const web3formsRes = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const json = await web3formsRes.json();
        
        if (json.success) {
            return res.status(200).json({ success: true, message: 'Email sent successfully.' });
        } else {
            return res.status(400).json({ success: false, message: json.message });
        }

    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

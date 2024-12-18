const axios = require('axios');

async function sendMessage(to, message) {
    try {
        const response = await axios.post(
            API_URL,
            {
                messaging_product: 'whatsapp',
                to,
                type: 'text',
                text: { body: message },
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${TOKEN}`,
                },
            }
        );

        console.log('Mensagem enviada:', response.data);
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error.response.data);
    }
}

const recipient = '219999999';
const message = 'Mensagem automatizada!';

sendMessage(recipient, message);
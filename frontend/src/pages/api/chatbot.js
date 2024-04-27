import axios from 'axios';

class OpenAIChat {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.endpoint = 'https://api.openai.com/v1/engines/davinci/codex/completions'; // Adjust as needed for your specific GPT model

        // Set up the axios instance
        this.client = axios.create({
            baseURL: this.endpoint,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            }
        });
    }

    async sendMessage(messageText) {
        const payload = {
            prompt: messageText,
            max_tokens: 150
        };

        try {
            const response = await this.client.post('', payload);
            return response.data;
        } catch (error) {
            console.error('Error sending message to OpenAI:', error);
            throw error;
        }
    }
}

export default OpenAIChat;

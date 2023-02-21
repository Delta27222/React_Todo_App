const OPENAI_API_KEY = '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';
const MODEL = 'davinci'; // Specify the GPT model to use


async function preguntando_a_ChatGPT(prompt){

    prompt = 'Hola como estas?'

    const resolve = await fetch(OPENAI_API_KEY, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + OPENAI_API_KEY,
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 60,
            n: 1,
            stop: '\n',
        }),
    });

    try {
        const response = await fetch('https://api.openai.com/v1/engines/' + MODEL + '/completions',resolve);

        if (response.ok) {
            const data = await response.json();
            console.log(data.choices[0].text.trim());
            return data.choices[0].text.trim();
        } else {
            throw new Error('Error: ' + response.status);
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

preguntando_a_ChatGPT("ho");


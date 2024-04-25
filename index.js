const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Function to generate a response
function generateResponse(message) {
    // Your logic to generate a response based on the input message
    // This could involve NLP, predefined responses, etc.
    // For simplicity, let's just echo the message back
    return `You said: ${message}`;
}

client.on('messageCreate', async message => {
    // Ignore messages from the bot itself or from other bots
    if (message.author.bot) return;

    // Generate a response based on the received message
    const response = generateResponse(message.content);

    // Send the response back to the channel
    message.channel.send(response);
});
client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply("ping!!");
});

// Login to Discord with your app's token
client.login('your id here')

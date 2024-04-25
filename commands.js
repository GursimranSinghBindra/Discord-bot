const { Client, Intents, REST, Routes } = require('discord.js');
const { token } = require('./config.json'); // Assuming you have a separate config file

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

client.once('ready', async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await client.guilds.cache.forEach(async (guild) => {
            await rest.put(Routes.applicationGuildCommands(client.user.id, guild.id), { body: commands });
        });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login(token);

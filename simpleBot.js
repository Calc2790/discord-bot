const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log('Bot is ready');
});

client.on('message', message => {
    if (message.author.bot) return; // Ignore messages from other bots
    if (!message.content.startsWith(prefix)) return; // Check if message starts with the prefix

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong!');
    } else if (command === 'hello') {
        message.channel.send('Hello! How can I help you?');
    }
});

client.login('MTIxMzk4MzE1MDkxNzY4OTM4Ng.GBM4lu.KJ702nHIWMDNSnmpbIB8d8tCyfFaZ634r_wTi8');

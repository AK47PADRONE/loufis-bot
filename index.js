const Discord = require('discord.js')
const fs = require('fs');
const client = new Discord.Client();
require('discord-buttons')(client);
const { token, prefix } = require('./config.json');
const TicTacToe = require('discord-tictactoe');
const poll = require('./events/poll.js')
poll(client)
const jointocreate = require("./events/jointocreate");
jointocreate(client);
const selfpromo = require('./events/self-promo.js')
selfpromo(client)

client.prefix = prefix;
client.commands = new Discord.Collection();

new TicTacToe({ language: 'en', command: '!tri' })
    .attach(client);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

client.login(token)
/// https://discord.com/api/oauth2/authorize?client_id=898846821676376075&permissions=8&scope=bot
/// OTAwNjk2MzQyNzIzMTc4NTM3.YXFE1g._jDh6D2Yx9U01sKsaKw2uWzSSq4 ``Test Bot token``
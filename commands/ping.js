module.exports = {
    name: 'ping',
    description: '!ping',
    async execute(message, args, client) {
        message.channel.send("Pong")
    },
};
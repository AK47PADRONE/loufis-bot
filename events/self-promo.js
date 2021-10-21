const { selfpromo } = require('../config.json')

module.exports = client => {
    const channelIds = [
        selfpromo,
    ]

    const addReactions = message => {
        message.react('<a:Heart:900754693213540353>')
    }

    client.on('message', (message) => {
        if (channelIds.includes(message.channel.id)) {
            addReactions(message)
        }
    })
}
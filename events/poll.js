const { pollschannel } = require('../config.json')

module.exports = client => {
    const channelIds = [
        pollschannel,
    ]

    const addReactions = message => {
        message.react('<:y2:900706840923488298>')

        setTimeout(() => {
            message.react('<:no2:900706883856392213>')
        }, 750)
    }

    client.on('message', (message) => {
        if (channelIds.includes(message.channel.id)) {
            addReactions(message)
        }
    })
}
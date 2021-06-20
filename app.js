const Discord = require('discord.js'),
    client = new Discord.Client({restRequestTimeout: 30000}),
    config = require('./config.json'),
    fs = require('fs')
 
client.login(config.token)
client.commands = new Discord.Collection()
 
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
    })
})

client.on("ready", () => {

    client.user.setActivity('Navazia Stats', { type: 'WATCHING' }) // STREAMING, WATCHING, CUSTOM_STATUS, PLAYING, COMPETING
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
      .catch(console.error);

});

var tcpp = require('tcp-ping');

tcpp.probe('46.28.246.123', 80, function(err, available) {
    //console.log(available);
});

    client.on('message', message => {
        setTimeout( function(){ 
            message.channel.send(`Min: ${data.min}, Max: ${data.max}, avg: ${data.avg}`)
          }, 3000); })




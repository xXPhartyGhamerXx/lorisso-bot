const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
 
    console.log('I am ready!');

});

 
client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }
 
 if (message.content === 'lorisso.bot@info') {

       message.reply('\nLorisso Bot v0.0;\n' + 'Host: Heroku;\n' + 'Creato dal grande Lorisso Malefico' + '\nProgrammato in JavaScript');

       }
 if (message.content === 'lorisso.bot@help') {

       message.reply('Eccoti una lista dei comandi:' + '\n lorisso.bot@info (info del bot)' + '\n lorisso.bot@meme Invia dei meme del Lorisso Malefico \n' + 'lorisso.bot@loris Scrive chi è Loris' + '\n Per ora il grande Lorisso Malefico è impegnato con i suoi piani malefici quindi non ha programmato altri comandi. \n CIAO!');

       }
 
  if (message.content === 'lorisso.bot@meme') {

       message.reply('\nMA RIIIPPPPPP' + '\nF' + '\nBALCONI' + '\nQUATTORDICENNE PEDOFILO PERVERTITOH');

       }
 
 if (message.content === 'lorisso.bot@loris') {

       message.reply('\nLoris essere persona BELLISSIMAH!11!');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

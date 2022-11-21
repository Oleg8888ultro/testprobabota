import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

// bot.on('text', msg => msg.reply.text(msg.text))

// bot.on(['Привет', '/hello'], (msg) => msg.reply.text('Welcome Програмист!'));

bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
  });

  console.log('testik');

// bot.hears('Привет', (ctx) => ctx.reply('Приветик мой родной'))
// bot.hears('Как дела?', (ctx) => ctx.reply('Отлично'))
// 
export default bot

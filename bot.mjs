import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

//bot.on('text', msg => msg.reply.text(msg.text))

// bot.hears('Привет', (ctx) => ctx.reply('Приветик мой родной'))
// bot.hears('Как дела?', (ctx) => ctx.reply('Отлично'))
bot.on('Привет', msg => msg.reply.text(msg.'Как дела?'))

export default bot

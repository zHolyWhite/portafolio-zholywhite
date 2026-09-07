import 'dotenv/config';
import { createServer } from './server.js';
import { startDiscordBot } from './discord/bot.js';

async function start() {
  const discordToken = process.env.DISCORD_BOT_TOKEN;

  if (discordToken) {
    try {
      await startDiscordBot(discordToken);
      console.log('Discord bot started');
    } catch (error) {
      console.error('Failed to start Discord bot:', error);
    }
  } else {
    console.warn('DISCORD_BOT_TOKEN not set, bot will not start');
  }

  const app = await createServer();
  const port = Number(process.env.PORT || 3001);

  try {
    await app.listen({
      host: '127.0.0.1',
      port,
    });

    console.log(`GraphQL server running at http://127.0.0.1:${port}/graphql`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

void start();
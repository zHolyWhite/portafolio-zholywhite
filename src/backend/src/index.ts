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

  const port = process.env.PORT || 3001;
  app.listen({ port: Number(port) }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`GraphQL server running at ${address}/graphql`);
  });
}

start();
import { Client, GatewayIntentBits, Partials } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

let botReady = false;

client.on('ready', () => {
  console.log(`Bot logged in as ${client.user?.tag}`);
  botReady = true;
});

client.on('error', (error) => {
  console.error('Discord bot error:', error);
});

export async function sendTokenToUser(discordUserId: string, token: string): Promise<boolean> {
  if (!botReady) {
    console.warn('Bot not ready yet');
    return false;
  }

  try {
    const user = await client.users.fetch(discordUserId);
    
    await user.send(
      `Token de Subida de Proyecto

Tu token de autenticación es:
\`\`\`${token}\`\`\`

Detalles:
- Válido por 24 horas
- Solo funciona desde tu IP actual
- Un solo uso
- No lo compartas con nadie

Para usarlo, ve a tu portafolio y completa el formulario de subida.`
    );

    console.log(`Token sent to ${discordUserId}`);
    return true;
  } catch (error) {
    console.error('Error sending token:', error);
    return false;
  }
}

export function startDiscordBot(token: string): Promise<void> {
  return new Promise((resolve, reject) => {
    client.once('ready', () => {
      resolve();
    });

    client.once('error', (error) => {
      reject(error);
    });

    client.login(token).catch(reject);
  });
}

export function getBot(): Client {
  return client;
}
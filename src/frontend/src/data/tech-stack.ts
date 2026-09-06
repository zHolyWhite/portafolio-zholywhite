export interface Tech {
  name: string;
  color: string;
  logo: string;
  logoColor?: string;
}

export const techStack = {
  lenguajes: [
    { name: 'Java', color: 'ED8B00', logo: 'openjdk' },
    { name: 'Kotlin', color: '7F52FF', logo: 'kotlin' },
    { name: 'C#', color: '239120', logo: 'csharp' },
    { name: 'C++', color: '00599C', logo: 'cplusplus' },
    { name: 'Rust', color: '000000', logo: 'rust' },
    { name: 'Go', color: '00ADD8', logo: 'go' },
    { name: 'Python', color: '3776AB', logo: 'python' },
    {
      name: 'JavaScript',
      color: 'F7DF1E',
      logo: 'javascript',
      logoColor: 'black',
    },
    
    { name: 'TypeScript', color: '3178C6', logo: 'typescript' },
    { name: 'HTML5', color: 'E34F26', logo: 'html5' },
    { name: 'CSS3', color: '1572B6', logo: 'css3' },
    { name: 'Bash', color: '4EAA25', logo: 'gnubash' },
  ],

  frameworks: [
    { name: 'Astro', color: 'BC52EE', logo: 'astro' },
    { name: 'Next.js', color: '000000', logo: 'nextdotjs' },
    {
      name: 'React',
      color: '20232A',
      logo: 'react',
      logoColor: '61DAFB',
    },
    { name: 'Vue.js', color: '4FC08D', logo: 'vuedotjs' },
    { name: 'Twurple', color: '9146FF', logo: 'twitch' },
    { name: 'Tailwind CSS', color: '06B6D4', logo: 'tailwindcss' },
    { name: 'Svelte', color: 'FF3E00', logo: 'svelte' },
    { name: 'Node.js', color: '339933', logo: 'nodedotjs' },
    { name: 'NestJS', color: 'E0234E', logo: 'nestjs' },
    { name: 'Electron', color: '47848F', logo: 'electron' },
    { name: 'Tauri', color: '24C8DB', logo: 'tauri' },
    { name: 'Django', color: '092E20', logo: 'django' },
    { name: 'Spring', color: '6DB33F', logo: 'spring' },
    { name: 'FastAPI', color: '009688', logo: 'fastapi' },
  ],

  minecraft: [
    {
      name: 'Fabric',
      color: 'DBD0B4',
      logo: 'java',
      logoColor: 'black',
    },
    {
      name: 'Forge',
      color: 'F47C20',
      logo: 'java',
      logoColor: 'white',
    },
    {
      name: 'NeoForge',
      color: 'F47C20',
      logo: 'java',
      logoColor: 'white',
    },
    {
      name: 'Spigot',
      color: 'ED8B00',
      logo: 'java',
      logoColor: 'white',
    },
    {
      name: 'Paper',
      color: '1F6FEB',
      logo: 'java',
      logoColor: 'white',
    },
  ],

  herramientas: [
    { name: 'Git', color: 'F05032', logo: 'git' },
    { name: 'Docker', color: '2496ED', logo: 'docker' },
    { name: 'Gradle', color: '02303A', logo: 'gradle' },
    { name: 'Maven', color: 'C71A36', logo: 'apachemaven' },
    { name: 'VS Code', color: '007ACC', logo: 'visualstudiocode' },
    { name: 'IntelliJ', color: '000000', logo: 'intellijidea' },
    { name: 'GitHub', color: '181717', logo: 'github' },
    { name: 'Vercel', color: '000000', logo: 'vercel' },
    { name: 'Cloudflare', color: 'F38020', logo: 'cloudflare' },
    { name: 'MySQL', color: '4479A1', logo: 'mysql' },
    { name: 'PostgreSQL', color: '336791', logo: 'postgresql' },
    { name: 'Blender', color: 'E87D0D', logo: 'blender' },
    { name: 'Blockbench', color: '3A86FF', logo: 'blockbench' },
  ],

  otros: [
    { name: 'GraphQL', color: 'E10098', logo: 'graphql' },
    { name: 'Prisma', color: '2D3748', logo: 'prisma' },
    { name: 'WebSockets', color: '010101', logo: 'websocket' },
    { name: 'discord.js', color: '5865F2', logo: 'discord' },
    { name: 'discord.py', color: '5865F2', logo: 'discord' },
  ],
} satisfies Record<string, Tech[]>;

export function getBadgeUrl(tech: Tech): string {
  const logoColor = tech.logoColor ?? 'white';

  return `https://img.shields.io/badge/${encodeURIComponent(
    tech.name,
  )}-${tech.color}?style=flat-square&logo=${tech.logo}&logoColor=${logoColor}`;
}
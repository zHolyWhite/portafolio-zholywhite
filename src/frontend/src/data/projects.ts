export interface Project {
  titulo: string;
  descripcion: string;
  descripcionLarga?: string;
  stack: string[];
  github: string;
  demo?: string;
  portada?: string;
  video?: string;
  destacado?: boolean;
}

export const proyectosPersonales: Project[] = [
  {
    titulo: 'Launcher de Eventos',
    descripcion: 'Launcher multiplataforma con autenticación y gestión de mods',
    descripcionLarga: 'Un launcher completo desarrollado con Rust y Tauri que permite a los usuarios gestionar múltiples instancias de juegos, autenticarse con Microsoft OAuth y descargar mods automáticamente. Incluye sistema de actualizaciones en tiempo real y soporte para temas personalizados.',
    stack: ['Rust', 'Tauri', 'TypeScript', 'React'],
    github: 'https://github.com/zHolyWhite/launcher',
    portada: 'https://github.com/zHolyWhite/launcher/raw/main/screenshots/preview.png',
    video: 'https://www.youtube.com/embed/VIDEO_ID',
    destacado: true,
  },
  {
    titulo: 'Backend de Licencias',
    descripcion: 'API REST con Spring Boot, PostgreSQL y PayPal',
    descripcionLarga: 'Sistema de licencias para plugins de Minecraft con validación en tiempo real, integración de pagos con PayPal API, dashboard de administración y webhook de notificaciones. Soporta múltiples tipos de licencia y revocación remota.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'PayPal API'],
    github: 'https://github.com/zHolyWhite/licensing-backend',
    portada: 'https://github.com/zHolyWhite/licensing-backend/raw/main/docs/preview.png',
    destacado: true,
  },
];

export const proyectosMinecraft: Project[] = [
  {
    titulo: 'Mod RPG Events',
    descripcion: 'Sistema de eventos RPG con custom entities y combate dinámico',
    descripcionLarga: 'Mod de Minecraft que añade un sistema completo de eventos RPG con jefes personalizados, misiones dinámicas, sistema de progresión y recompensas únicas. Utiliza GeckoLib para animaciones fluidas y AzureLib para integración con otros mods.',
    stack: ['Java', 'Fabric', 'GeckoLib', 'AzureLib'],
    github: 'https://github.com/zHolyWhite/mod-rpg',
    portada: 'https://github.com/zHolyWhite/mod-rpg/raw/main/assets/preview.png',
    video: 'https://www.youtube.com/embed/VIDEO_ID',
  },
  {
    titulo: 'Plugin de Comisiones',
    descripcion: 'Sistema de comisiones para servidores de Minecraft',
    descripcionLarga: 'Plugin para servidores Spigot/Paper que permite a los jugadores crear comisiones personalizadas para construcciones, pixel art y otros servicios. Incluye sistema de pagos, galería de trabajos y valoraciones.',
    stack: ['Java', 'Spigot API', 'MySQL'],
    github: 'https://github.com/zHolyWhite/commissions-plugin',
  },
];
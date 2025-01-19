import type { MeichoPlugin } from '~/plugins/meicho.plugin';

declare module '#app' {
  interface NuxtApp {
    $meicho: MeichoPlugin;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $meicho: MeichoPlugin;
  }
}

export {};

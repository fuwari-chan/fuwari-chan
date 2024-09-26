import type {
  CommentConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Fuwari Noob 😍',
  subtitle: 'Static Site',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/7062_1_other_anime_colorful_anime_girls.jpg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/noobieta-thanvank',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/luffy.jpeg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Noobieta San',
  bio: 'Thanvank 😎,Baik hati dan ga ada yang tahu 😭.',
  links: [
    {
      name: 'Whatsapp',
      icon: 'fa6-brands:whatsapp',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: '#',
    },
    {
      name: 'Telegram',
      icon: 'fa6-brands:telegram',
      url: '#',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/noobieta-tamvan',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

export const commentConfig: CommentConfig = {
   //disqus: {
  //shortname: 'fuwari',
  //},
   //giscus: {
   //repo: 'noobieta-thanvank/fuwaribot',
   //repoId: 'R_kgDOMxByPw',
   //category: 'General',
   //categoryId: 'DIC_kwDOMxByP84CibfC',
   //mapping: 'title',
   //strict: '0',
   //reactionsEnabled: '1',
  // emitMetadata: '1',
  // inputPosition: 'top',
  // theme: 'dark',
   //lang: 'en',
  // loading: 'lazy',
  // },
  twikoo: {
  envId: 'https://twikoo-tau-flame.vercel.app',
  },
}

 

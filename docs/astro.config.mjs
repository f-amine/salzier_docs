// @ts-check
import { defineConfig } from 'astro/config'

import vitesse from 'astro-vitesse'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-vitesse.vercel.app',
  integrations: [
    UnoCSS(),
    vitesse({
      title: 'Whatsappier Docs',
      logo: {
        light: '/src/assets/logo-light.svg',
        dark: '/src/assets/logo-dark.svg',
        alt: 'Astro Vitesse Logo',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          lang: 'en',
          label: 'English',
        },
        es: {
          lang: 'es',
          label: 'Español',
        },
      },
      components: {
        Footer: '/src/components/Footer.astro',
      },
      social: {
        twitter: 'https://twitter.com/adrianub',
        github: 'https://github.com/adrian-ub/astro-vitesse',
        mastodon: 'https://mastodon.social/@adrianub',
      },
      navBar: [
        {
          label: 'Blog',
          slug: 'blog',
          icon: 'i-ri-article-line',
          labelClass: 'lt-md:hidden',
          iconClass: 'md:hidden',
          translations: {
            es: 'Publicaciones',
          },
        },
        {
          label: 'Documentation',
          slug: 'docs',
          icon: 'i-ri-lightbulb-line',
          labelClass: 'lt-md:hidden',
          iconClass: 'md:hidden',
        },
      ],
      subNavBar: [
        {
          label: 'Blog',
          slug: 'blog',
        },
        {
          label: 'Talks',
          slug: 'talks',
          translations: {
            es: 'Charlas',
          },
        },
        {
          label: 'Podcasts',
          slug: 'podcasts',
        },
        {
          label: 'Streams',
          slug: 'streams',
        },
        {
          label: 'Notes',
          slug: 'notes',
        },
      ],
    }),
  ],
})

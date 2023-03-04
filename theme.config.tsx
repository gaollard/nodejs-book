import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Footer } from './components/Footer'
import { Profile } from './components/Profile'
import favicon from './assets/favicon.ico';

const config: DocsThemeConfig = {
  logo: <span>nodejs 学习笔记</span>,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1
  },
  project: {
    // link: 'https://github.com/shuding/nextra-docs-template',
    link: 'https://github.com/gaollard/nodejs-book'
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    // component: Profile
    component: Footer
  },
  faviconGlyph: '🪐'
}

export default config

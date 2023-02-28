import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Footer } from './components/Footer'
import { Profile } from './components/Profile'

const config: DocsThemeConfig = {
  logo: <span>nodejs 学习笔记</span>,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1
  },
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    // component: Profile
    component: Footer
  }
}

export default config

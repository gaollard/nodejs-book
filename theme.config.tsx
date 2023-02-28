import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Footer } from './components/Footer'

const config: DocsThemeConfig = {
  logo: <span>nodejs 学习笔记</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    component: Footer
  }
}

export default config

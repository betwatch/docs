import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/Logo'

const config: DocsThemeConfig = {
    logo: <Logo />,
    project: {
        link: 'https://github.com/betwatch',
    },
    chat: {
        link: 'https://discord.gg/v6FQrgpgvw',
    },
    docsRepositoryBase: 'https://github.com/betwatch/docs',
    footer: {
        text: 'Betwatch Pty Ltd',
    },
}

export default config

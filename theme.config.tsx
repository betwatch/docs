import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/Logo'

const config: DocsThemeConfig = {
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Betwatch Guide'
        }
    },
    logo: <Logo />,
    head: (
        <>
            <meta name="description" content="Betwatch Documentation" />
            <meta name="og:title" content="Betwatch Documentation" />
            <link rel="shortcut icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="shortcut icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </>
    ),
    project: {
        link: 'https://github.com/betwatch',
    },
    chat: {
        link: 'https://discord.gg/v6FQrgpgvw',
    },
    docsRepositoryBase: 'https://github.com/betwatch/docs',
    footer: {
        text: <span>{new Date().getFullYear()} © Betwatch Pty Ltd</span>,
    },
}

export default config

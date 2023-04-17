import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/Logo'

const config: DocsThemeConfig = {
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Betwatch Guide',
            description: 'Guides and tutorials for the Betwatch odds comparison platform',
            twitter: {
                handle: '@BetwatchHQ',
            },
            openGraph: {
                type: 'website',
                images: [
                    {
                        url: '/og-image.png',
                        width: 1200,
                        height: 630,
                        alt: 'Betwatch',
                    }
                ]
            }
        }
    },
    logo: <Logo />,
    head: (
        <>
            <meta name="og:title" content="Betwatch Guide" />
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

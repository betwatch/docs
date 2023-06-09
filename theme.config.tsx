import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/Logo'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Betwatch Guide',
            description: 'Guides and tutorials for the Betwatch odds comparison platform',
        }
    },
    logo: <Logo />,
    head: () => {
        const { asPath, defaultLocale, locale } = useRouter()
        const { frontMatter } = useConfig()
        const url =
            'https://guide.betwatch.com' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

        return <>
            <meta property="description" content={frontMatter.description || 'Guides and tutorials for the Betwatch odds comparison platform'} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={frontMatter.title ? (frontMatter.title + ' - Betwatch Guide') : 'Betwatch Guide'} />
            <meta property="og:description" content={frontMatter.description || 'Guides and tutorials for the Betwatch odds comparison platform'} />
            <meta property="og:image" content={frontMatter.image || 'https://guide.betwatch.com/og-image.png'} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:site" content="@BetwatchHQ" />
            <meta name="twitter:creator" content="@BetwatchHQ" />
            <link rel="shortcut icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="shortcut icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <meta name="robots" content="follow, index" />
        </>
    },
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

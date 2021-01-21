import '@reach/tooltip/styles.css'
import '../css/tailwind.css'
import '../css/index.css'

import Head from 'next/head'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { META } from '@constants'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <meta name="application-name" content={META.applicationName} />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta
          name="msapplication-square150x150logo"
          content="mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="mstile-310x310.png"
        />

        <meta name="theme-color" content="#fff" />
      </Head>
      <DefaultSeo
        title={META.title}
        description={META.description}
        openGraph={{
          type: 'website',
          description: META.description,
          locale: META.locale,
          url: META.url,
          images: [
            {
              url: META.image.url,
              width: META.image.width,
              height: META.image.height,
              alt: META.image.alt,
            },
          ],
          site_name: META.siteName,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App

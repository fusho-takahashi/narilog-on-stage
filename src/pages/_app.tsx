import '../../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <link
        rel="icon"
        href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/cloud_2601-fe0f.png"
      />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App

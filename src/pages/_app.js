import { SessionProvider } from 'next-auth/react'
import '../styles/globals.scss'
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} /> 
      </Layout>
    </SessionProvider>
  )
}

export default MyApp

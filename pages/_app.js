import '../styles/globals.scss'
import { Layout } from '../components/Layout'
import { RoomsProvider } from '../contexts/RoomsContext'

function MyApp({ Component, pageProps }) {
  return (
    <RoomsProvider>
      <Layout>    
        <Component {...pageProps} />
        
      </Layout>
    </RoomsProvider>
  )
}

export default MyApp

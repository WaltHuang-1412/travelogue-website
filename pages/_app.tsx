import 'normalize.css/normalize.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import LayoutDefault from '#/layouts/default/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutDefault>
      <Component {...pageProps} />
    </LayoutDefault>
  )
}

export default MyApp

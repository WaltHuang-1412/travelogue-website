import 'normalize.css/normalize.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import type { Page } from '../types/page'

type Props = AppProps & {
  Component: Page
}
function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page: any) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp

// pages/_app.js
//All global CSS need to be here
import 'react-dropdown/style.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
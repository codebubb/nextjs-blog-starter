import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <div className="appmain"><Component {...pageProps} /></div>
  }
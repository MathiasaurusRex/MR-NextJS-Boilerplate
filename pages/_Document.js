import Document, { Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel='shortcut icon' type='image/x-icon' href='/static/assets/mr2.ico' />
      
        </Head>
        <body className="mr-body">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
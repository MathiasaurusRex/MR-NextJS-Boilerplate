import Document from 'next/document'
// import "../style.css"
import Head from 'next/head'
// import { initGA, logPageView } from '../utils/ga'
import Header from './00-Header/Header';
// import Footer from './Footer';

class Layout extends Document{
  constructor(){
    super();
  }
  componentDidMount () {
    // if (!window.GA_INITIALIZED) {
    //   initGA()
    //   window.GA_INITIALIZED = true
    // }
    // logPageView(this.props.title)
  }
  render () {
    return(
      <div className="mr-site-wrapper">
        <Head>
          <title>{this.props.title}</title>
          <meta name="Description" content={this.props.metaDescription}/>
        </Head>
        <Header  />
        {this.props.children}
       
      </div>
    )
  }
}

export default Layout
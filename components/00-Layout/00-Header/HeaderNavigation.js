import Link from 'next/link'
import Document from 'next/document'


class HeaderNavigation extends Document {

    constructor(props) {
        super(props);

        this.state = {
            mobileMenu: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);

    }

    toggleMenu() {
        const currentState = this.state.mobileMenu;
        this.setState({ mobileMenu: !currentState });
    };

    render () {
        return(

            <nav className="mr-site-header--navigation">
                <span className="left-grouping">
                    
                </span>
                <span className={this.state.mobileMenu ? 'right-grouping active': 'right-grouping'}>
                    <button className="mobile-menu" onClick={this.toggleMenu}>
                        <span>Menu</span>
                    </button>
                    <Link href="/">
                        <a className="mr-site-header--link">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="mr-site-header--link">About me</a>
                    </Link>
                    <Link href="/contact">
                        <a className="mr-site-header--link">Get in touch</a>
                    </Link>
                </span>
            </nav>
        )
    }
}

export default HeaderNavigation
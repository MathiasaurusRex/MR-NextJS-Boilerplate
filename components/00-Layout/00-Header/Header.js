import Link from 'next/link'
import HeaderNavigation from './HeaderNavigation';

const Header = (props) => (
    <header className="mr-site-header">
        <div className="mr-section">
            <HeaderNavigation/>
        </div>   
    </header>
)

export default Header
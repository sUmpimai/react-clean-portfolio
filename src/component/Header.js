// header with nav menu
import './Header.scss';

const Header = () => {
    return (
    <header id="header">
        <div className="navbar">
            <div className="container">
                <a href="home" className='nav-logo d-flex align-items-center'>J<span className='dot'>.</span></a>
                <div className="nav-menu">
                    <a href="nav-menu">menu</a>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;
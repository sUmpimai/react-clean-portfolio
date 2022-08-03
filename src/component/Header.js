// header with nav menu
import './Header.scss';

const Header = () => {
    return (
    <header id="header">
        <div className="navbar">
            <div className="container">
                <a href="home" className='nav-logo d-flex align-items-center'>J<span className='dot'>.</span></a>
                <div className="nav-menu-container">    
                    <input class="checkbox" type="checkbox" name="" id="" />
                    <button class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </button>                   
                    <div class="menu-items">
                        <div className='container'>
                            <li><a href="home">Home</a></li>
                            <li><a href="about">about</a></li>
                            <li><a href="blogs">blogs</a></li>
                            <li><a href="portfolio">portfolio</a></li>
                            <li><a href="contact">contact</a></li>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;
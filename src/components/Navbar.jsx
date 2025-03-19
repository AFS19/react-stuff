import reactLogo from '../assets/react.svg'

function Navbar(props) {
    return (
        <header>
            <nav className='fanfacts-navbar'>
                <img className='fanfacts-logo-img' src={reactLogo} alt='React Logo'/>
                <span className='fanfacts-logo-word'>ReactFacts</span>
            </nav>
        </header>
    );
}

export default Navbar;
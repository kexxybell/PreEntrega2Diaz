import './Header.scss'
import logo from '../../assets/react.svg'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Header = ({variant = false}) => {
    return (
        <header className={variant ? "header header-v" : "header"}>
            <div className="header__container">
                {/* <img src='/img/vite.svg' alt='logo'/> */}
                <img src={logo} alt='logo'/>

                <nav className="header__nav">
                    <Link className="header__link" to="/">Inicio</Link>
                    <Link className="header__link" to="/productos">Tienda</Link>
                    <Link className="header__link" to="/galeria">Galeria</Link>
                    <Link className="header__link" to="/nosotros">Nosotros</Link>
                    <Link className="header__link" to="/contacto">Contacto</Link>
                    <Link className="header__link" to="/cuidados">Cuidados</Link>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}

export default Header
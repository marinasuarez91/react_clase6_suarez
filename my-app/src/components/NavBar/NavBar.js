import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

function NavBar () {
    return <nav className="NavStyle">
        <div className="Brand">
            <span>.nina</span>
        </div>
        <CartWidget />
        <ul className ="liStyles">
            <li>Home</li>
            <li>Tienda</li>
            <li>FAQ</li>
            <li>Contacto</li>
        </ul>
    </nav>
}

export default NavBar
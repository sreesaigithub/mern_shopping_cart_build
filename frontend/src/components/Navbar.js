import './Navbar.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


const Navbar = ({click} ) => {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }

    return (
        <nav className = "navbar">
        {/* logo */}
        <div className="navbar__logo">
            <h2>MERN Shopping Cart</h2>

        </div>
        {/* links */}

        <ul className="navbar__links">
            <li>
                <Link to='/cart' className="cart__link">
                    <i className="fas fa-shopping-cart"></i>
                    {/* icons */}
                    <span> Cart </span>
                    <span className="cartlogo__badge">{getCartCount()}</span>
                </Link>
            </li>
            <li>
                <Link to="/" >Shop</Link>
            </li>
        </ul>

        {/* hamburger menu */}

        <div className="hamburger__menu" onclick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </nav>
    )
};

export default Navbar;
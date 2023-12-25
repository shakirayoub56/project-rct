import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../context/ShopContext';

export const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const { cartItems } = useContext(ShopContext);
    const [cartCount, setCartCount] = useState(0);

    // Update the cart count whenever cartItems change
    useEffect(() => {
        const totalCount = Object.values(cartItems).reduce((acc, cur) => acc + cur, 0);
        setCartCount(totalCount);
    }, [cartItems]);


    return (
        <div className="navbar">
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p><span>SHOP</span>NOW</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu('shop') }}>
                    <Link to='/'>Shop</Link>
                    {menu === 'shop' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('mens') }}>
                    <Link to='/mens'>Men</Link>
                    {menu === 'mens' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('womens') }}>
                    <Link to='/womens'>Women</Link>
                    {menu === 'womens' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('kids') }}>
                    <Link to='/kids'>Kid</Link>
                    {menu === 'kids' ? <hr /> : <></>}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart">
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">{cartCount}</div>
            </div>
        </div>
    )
}

export default Navbar;

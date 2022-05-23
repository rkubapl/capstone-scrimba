import {Link} from "react-router-dom";

import {useContext} from "react";
import {Context} from "../Context";

export default function Header() {
    const { cartItems } = useContext(Context)

    return (
        <header>
            <Link to='/'><h2>Pic Some</h2></Link>
            <Link to='/cart'>
                <i className={`${cartItems.length > 0 ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line'} ri-fw ri-2x`} />
            </Link>
        </header>
    )
}

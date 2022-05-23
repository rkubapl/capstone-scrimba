import {useContext, useState} from "react";
import {Context} from "../Context";
import useHover from "../hooks/useHover";
import PropTypes from "prop-types";

export default function CartItem({item}) {
    const [binHover, ref] = useHover();

    const {removeItemFromCart} = useContext(Context)

    const trashClass = binHover ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i
                className={trashClass}
                ref={ref}
                onClick={() => removeItemFromCart(item.id)}
            />
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

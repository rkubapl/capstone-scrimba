import {useContext} from "react";
import {Context} from "../Context";

import PropTypes from 'prop-types';
import useHover from "../hooks/useHover";

export default function Image({className, img}) {
    const [hovered, ref] = useHover();
    const { toggleFavorite, addItemToCart, removeItemFromCart, isInCart } = useContext(Context);

    console.log(hovered)

    let heartIcon;

    if(img.isFavorite) {
        heartIcon = <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)} />
    } else if(hovered) {
        heartIcon = <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)} />
    }

    let cartIcon;

    if(isInCart(img.id)) {
        cartIcon = <i className="ri-shopping-cart-fill cart" onClick={() => removeItemFromCart(img.id)} />
    } else if(hovered) {
        cartIcon = <i className="ri-add-circle-line cart" onClick={() => addItemToCart(img)} />
    }


    return (
        <div
            className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url} className="image-grid" />

            { heartIcon }
            { cartIcon }
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        isFavorite: PropTypes.bool,
        url: PropTypes.string,
        id: PropTypes.number
    }),
}

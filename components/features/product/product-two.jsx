import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {connect} from 'react-redux';

import ALink from '~/components/features/custom-link';

import {cartActions} from '~/store/cart';
import {modalActions} from '~/store/modal';
import {wishlistActions} from '~/store/wishlist';
import {fromImageToUrl} from "~/utils/urls";
import {twoDecimals} from "~/utils/format";

function ProductTwo(props) {
    const {
        product,
        adClass = 'text-center',
        toggleWishlist,
        wishlist,
        addToCart,
        openQuickview,
        isCat = true,
        isBadge = true
    } = props;

    // decide if the products is wishlisted
    let isWishlisted;
    isWishlisted = wishlist.findIndex(item => item.slug === product.slug) > -1 ? true : false;

    const showQuickviewHandler = () => {
        openQuickview(product.slug);
    }

    const wishlistHandler = (e) => {
        if (toggleWishlist) {
            toggleWishlist(product);
        }

        e.preventDefault();
        let currentTarget = e.currentTarget;
        currentTarget.classList.add('load-more-overlay', 'loading');

        setTimeout(() => {
            currentTarget.classList.remove('load-more-overlay', 'loading');
        }, 1000);
    }

    const addToCartHandler = (e) => {
        e.preventDefault();
        addToCart({...product, qty: 1, price: product.price[0]});
    }

    console.log(props);
    return (
        <div className={`product ${adClass}`}>
            <figure className="product-media">
                <ALink href={`/products/${product.slug}`}>
                    <LazyLoadImage
                        alt="product"
                        src={fromImageToUrl(product.image)}
                        threshold={500}
                        effect="opacity"
                        width="300"
                        height="338"
                    />

                </ALink>
                <div className="product-action">
                    <ALink href="#" className="btn-product btn-quickview" title="Quick View"
                           onClick={showQuickviewHandler}>Quick View</ALink>
                </div>
            </figure>

            <div className="product-details">
                <h3 className="product-name">
                    <ALink href={`/products/${product.slug}`}>{product.name}</ALink>
                </h3>
                <div className="product-price">
                    € {twoDecimals(product.price)}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        wishlist: state.wishlist.data ? state.wishlist.data : []
    }
}

export default connect(mapStateToProps, {
    toggleWishlist: wishlistActions.toggleWishlist,
    addToCart: cartActions.addToCart, ...modalActions
})(ProductTwo);

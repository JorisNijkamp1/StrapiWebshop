import { connect } from 'react-redux';

import ALink from '~/components/features/custom-link';

import { cartActions } from '~/store/cart';

import { getTotalPrice, getCartCount, toDecimal } from '~/utils';
import {fromImageToUrl} from "~/utils/urls";

function CartMenu ( props ) {
    // Line 11 is correct
    // const { cartList, removeFromCart } = props;
    const { removeFromCart } = props;

    // TEMP mocked cartList
    const cartList = [{
            "_id": "6156dd27eeaaf1004f11e973",
            "name": "The NextJs with Strapi course 3.0",
            "slug": "the-next-js-with-strapi-course",
            "content": "The NextJs with Strapi course, very good course to following testing product.",
            "meta_description": "The NextJS Strapi Course, meta desciprtion test tes",
            "meta_title": "The NextJS Strapi Course,",
            "price": 497,
            "published_at": "2021-10-01T10:04:25.354Z",
            "createdAt": "2021-10-01T10:04:23.641Z",
            "updatedAt": "2021-10-04T09:54:27.361Z",
            "__v": 0,
            "image": {
                "_id": "6156dcf4eeaaf1004f11e972",
                "name": "nextjs.png",
                "alternativeText": "",
                "caption": "",
                "hash": "nextjs_5639fe24ad",
                "ext": ".png",
                "mime": "image/png",
                "size": 53.14,
                "width": 750,
                "height": 500,
                "url": "/uploads/nextjs_5639fe24ad.png",
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_nextjs.png",
                        "hash": "thumbnail_nextjs_5639fe24ad",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 234,
                        "height": 156,
                        "size": 16.76,
                        "path": null,
                        "url": "/uploads/thumbnail_nextjs_5639fe24ad.png"
                    },
                    "small": {
                        "name": "small_nextjs.png",
                        "hash": "small_nextjs_5639fe24ad",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 500,
                        "height": 333,
                        "size": 43.38,
                        "path": null,
                        "url": "/uploads/small_nextjs_5639fe24ad.png"
                    }
                },
                "provider": "local",
                "related": [],
                "createdAt": "2021-10-01T10:03:32.109Z",
                "updatedAt": "2021-10-04T18:30:55.771Z",
                "__v": 0,
                "id": "6156dcf4eeaaf1004f11e972"
            },
            "orders": [
                {
                    "status": "paid",
                    "_id": "615c71de9dec1232bc1cc980",
                    "total": 497,
                    "published_at": "2021-10-05T15:40:16.458Z",
                    "createdAt": "2021-10-05T15:40:14.263Z",
                    "updatedAt": "2021-10-05T15:40:16.533Z",
                    "__v": 0,
                    "product": "6156dd27eeaaf1004f11e973",
                    "id": "615c71de9dec1232bc1cc980"
                },
                {
                    "status": "unpaid",
                    "_id": "615c93c89c7089001d23b827",
                    "total": 200,
                    "checkout_session": "asdf",
                    "published_at": "2021-10-05T18:04:57.669Z",
                    "createdAt": "2021-10-05T18:04:56.176Z",
                    "updatedAt": "2021-10-05T18:11:56.632Z",
                    "__v": 0,
                    "product": "6156dd27eeaaf1004f11e973",
                    "user": "615c6eff0a3d7e001db6b944",
                    "products": [],
                    "id": "615c93c89c7089001d23b827"
                },
                {
                    "status": "paid",
                    "_id": "615c93da9c7089001d23b828",
                    "total": 1250,
                    "published_at": "2021-10-05T18:05:21.504Z",
                    "createdAt": "2021-10-05T18:05:14.859Z",
                    "updatedAt": "2021-10-05T18:06:51.110Z",
                    "__v": 0,
                    "product": "6156dd27eeaaf1004f11e973",
                    "user": "615c6eff0a3d7e001db6b944",
                    "id": "615c93da9c7089001d23b828"
                }
            ],
            "id": "6156dd27eeaaf1004f11e973"
    }]

    const showCartMenu = ( e ) => {
        e.preventDefault();
        e.currentTarget.closest( '.cart-dropdown' ).classList.add( 'opened' );
    }

    const hideCartMenu = () => {
        if ( document.querySelector( '.cart-dropdown' ).classList.contains( 'opened' ) )
            document.querySelector( '.cart-dropdown' ).classList.remove( 'opened' );
    }

    const removeCart = ( item ) => {
        removeFromCart( item );
    }

    return (
        <div className="dropdown cart-dropdown type2 cart-offcanvas mr-0 mr-lg-2">
            <a href="#" className="cart-toggle label-block link" onClick={ showCartMenu }>
                <span className="cart-label d-lg-show">
                    <span className="cart-name">Shopping Cart:</span>
                    <span className="cart-price">${ toDecimal( getTotalPrice( cartList ) ) }</span>
                </span>
                <i className="d-icon-bag"><span className="cart-count">{ getCartCount( cartList ) }</span></i>
            </a>
            <div className="cart-overlay" onClick={ hideCartMenu }></div>
            <div className="dropdown-box">
                <div className="cart-header">
                    <h4 className="cart-title">Shopping Cart</h4>
                    <ALink href="#" className="btn btn-dark btn-link btn-icon-right btn-close" onClick={ hideCartMenu }>close<i
                        className="d-icon-arrow-right"></i><span className="sr-only">Cart</span></ALink>
                </div>
                {
                    cartList.length > 0 ?
                        <>
                            <div className="products scrollable">
                                {
                                    cartList.map( ( item, index ) =>
                                        <div className="product product-cart" key={ 'cart-menu-products-' + index }>
                                            <figure className="product-media pure-media">
                                                <ALink href={ '/products/default/' + item.slug } onClick={ hideCartMenu }>
                                                    <img src={ fromImageToUrl(item.image) } alt="product" width="80"
                                                        height="88" />
                                                </ALink>
                                                <button className="btn btn-link btn-close" onClick={ () => { removeCart( item ) } }>
                                                    <i className="fas fa-times"></i><span className="sr-only">Close</span>
                                                </button>
                                            </figure>
                                            <div className="product-detail">
                                                <ALink href={ '/products/default/' + item.slug } className="product-name" onClick={ hideCartMenu }>{ item.name }</ALink>
                                                <div className="price-box">
                                                    {/*Dynamische quantity maken TODO*/}
                                                    <span className="product-quantity">1</span>
                                                    <span className="product-price">${ toDecimal( item.price ) }</span>
                                                </div>
                                            </div>
                                        </div>
                                    ) }
                            </div>

                            <div className="cart-total">
                                <label>Subtotal:</label>
                                <span className="price">${ toDecimal( getTotalPrice( cartList ) ) }</span>
                            </div>

                            <div className="cart-action">
                                <ALink href="/pages/cart" className="btn btn-dark btn-link" onClick={ hideCartMenu }>View Cart</ALink>
                                <ALink href="/checkout" className="btn btn-dark" onClick={ hideCartMenu }><span>Go To Checkout</span></ALink>
                            </div>
                        </> :
                        <p className="mt-4 text-center font-weight-semi-bold ls-normal text-body">No products in the cart.</p>
                }
            </div>
        </div>
    )
}

function mapStateToProps ( state ) {
    return {
        cartList: state.cart.data
    }
}

export default connect( mapStateToProps, { removeFromCart: cartActions.removeFromCart } )( CartMenu );

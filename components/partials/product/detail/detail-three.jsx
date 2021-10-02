import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useRouter} from 'next/router';

import ALink from '~/components/features/custom-link';
import Quantity from '~/components/features/quantity';

import ProductNav from '~/components/partials/product/product-nav';

import {wishlistActions} from '~/store/wishlist';
import {cartActions} from '~/store/cart';
import {twoDecimals} from "~/utils/format";

function DetailThree(props) {
    console.log(props);
    const {product} = props;
    let router = useRouter();
    const {data, isSticky = false, isNav = true, isDesc = false, adClass = '', isSizeGuide = true} = props;
    const {toggleWishlist, addToCart, wishlist} = props;
    const [curColor, setCurColor] = useState('null');
    const [curSize, setCurSize] = useState('null');
    const [curIndex, setCurIndex] = useState(0);
    const [cartActive, setCartActive] = useState(false);
    const [quantity, setQauntity] = useState(1);
    // console.log(props)
    // let product = data && data.product;


    // decide if the products is wishlisted
    // let isWishlisted, colors = [], sizes = [];
    // isWishlisted = wishlist.findIndex(item => item.slug === product.data.slug) > -1 ? true : false;

    // if (product.data && product.data.variants.length > 0) {
    //     if (product.data.variants[0].size)
    //         product.data.variants.forEach(item => {
    //             if (sizes.findIndex(size => size.name === item.size.name) === -1) {
    //                 sizes.push({name: item.size.name, value: item.size.size});
    //             }
    //         });
    //
    //     if (product.data.variants[0].color) {
    //         product.data.variants.forEach(item => {
    //             if (colors.findIndex(color => color.name === item.color.name) === -1)
    //                 colors.push({name: item.color.name, value: item.color.color});
    //         });
    //     }
    // }

    // useEffect(() => {
    //     setCurIndex(-1);
    //     resetValueHandler();
    // }, [product])

    // useEffect(() => {
    //     if (product.data.variants.length > 0) {
    //         if ((curSize !== 'null' && curColor !== 'null') || (curSize === 'null' && product.data.variants[0].size === null && curColor !== 'null') || (curColor === 'null' && product.data.variants[0].color === null && curSize !== 'null')) {
    //             setCartActive(true);
    //             setCurIndex(product.data.variants.findIndex(item => (item.size !== null && item.color !== null && item.color.name === curColor && item.size.name === curSize) || (item.size === null && item.color.name === curColor) || (item.color === null && item.size.name === curSize)));
    //         } else {
    //             setCartActive(false);
    //         }
    //     } else {
    //         setCartActive(true);
    //     }
    //
    //     if (product.stock === 0) {
    //         setCartActive(false);
    //     }
    // }, [curColor, curSize, product])

    const wishlistHandler = (e) => {
        e.preventDefault();

        if (toggleWishlist && !isWishlisted) {
            let currentTarget = e.currentTarget;
            currentTarget.classList.add('load-more-overlay', 'loading');
            toggleWishlist(product.data);

            setTimeout(() => {
                currentTarget.classList.remove('load-more-overlay', 'loading');
            }, 1000);
        } else {
            router.push('/pages/wishlist');
        }
    }

    const toggleColorHandler = (color) => {
        if (!isDisabled(color.name, curSize)) {
            if (curColor === color.name) {
                setCurColor('null');
            } else {
                setCurColor(color.name);
            }
        }
    }

    const toggleSizeHandler = (size) => {
        if (!isDisabled(curColor, size.name)) {
            if (curSize === size.name) {
                setCurSize('null');
            } else {
                setCurSize(size.name);
            }
        }
    }

    const addToCartHandler = () => {
        if (product.data.stock > 0 && cartActive) {
            if (product.data.variants.length > 0) {
                let tmpName = product.data.name, tmpPrice;
                tmpName += curColor !== 'null' ? '-' + curColor : '';
                tmpName += curSize !== 'null' ? '-' + curSize : '';

                if (product.data.price[0] === product.data.price[1]) {
                    tmpPrice = product.data.price[0];
                } else if (!product.data.variants[0].price && product.data.discount > 0) {
                    tmpPrice = product.data.price[0];
                } else {
                    tmpPrice = product.data.variants[curIndex].sale_price ? product.data.variants[curIndex].sale_price : product.data.variants[curIndex].price;
                }

                addToCart({...product.data, name: tmpName, qty: quantity, price: tmpPrice});
            } else {
                addToCart({...product.data, qty: quantity, price: product.data.price[0]});
            }
        }
    }

    const resetValueHandler = (e) => {
        setCurColor('null');
        setCurSize('null');
    }

    function isDisabled(color, size) {
        if (color === 'null' || size === 'null') return false;

        if (sizes.length === 0) {
            return product.data.variants.findIndex(item => item.color.name === curColor) === -1;
        }

        if (colors.length === 0) {
            return product.data.variants.findIndex(item => item.size.name === curSize) === -1;
        }

        return product.data.variants.findIndex(item => item.color.name === color && item.size.name === size) === -1;
    }

    function changeQty(qty) {
        setQauntity(qty);
    }

    return (
        <div className={`product-details ${isSticky ? 'sticky' : ''} ${adClass}`}>
            {
                isNav ?
                    <div className="product-navigation">
                        <ul className="breadcrumb breadcrumb-lg">
                            <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                            <li><ALink href="#" className="active">Products</ALink></li>
                            <li>Detail</li>
                        </ul>

                        <ProductNav product={product}/>
                    </div> : ''
            }

            <h2 className="product-name">{product.name}</h2>

            {/*<div className='product-meta'>*/}
            {/*    SKU: <span className='product-sku'>{ product.data.sku }</span>*/}
            {/*    CATEGORIES: <span className='product-brand'>*/}
            {/*        {*/}
            {/*            product.data.categories.map( ( item, index ) =>*/}
            {/*                <React.Fragment key={ item.name + '-' + index }>*/}
            {/*                    <ALink href={ { pathname: '/shop', query: { category: item.slug } } }>*/}
            {/*                        { item.name }*/}
            {/*                    </ALink>*/}
            {/*                    { index < product.data.categories.length - 1 ? ', ' : '' }*/}
            {/*                </React.Fragment>*/}
            {/*            ) }*/}
            {/*    </span>*/}
            {/*</div>*/}

            <div className="product-price">
                <ins className="new-price">${twoDecimals(product.price)}</ins>
            </div>

            {/*<div className="ratings-container">*/}
            {/*    <div className="ratings-full">*/}
            {/*        <span className="ratings" style={{width: 20 * product.data.ratings + '%'}}></span>*/}
            {/*        <span className="tooltiptext tooltip-top">{toDecimal(product.data.ratings)}</span>*/}
            {/*    </div>*/}

            {/*    <ALink href="#" className="rating-reviews">( {product.data.reviews} reviews )</ALink>*/}
            {/*</div>*/}

            <p className="product-short-desc">{product.content}</p>

            <hr className="product-divider"></hr>

            <div className="product-form product-qty pb-0">
                <label className="d-none">QTY:</label>
                <div className="product-form-group">
                    <Quantity max={10} product={product} onChangeQty={changeQty}/>
                    <button
                        className={`btn-product btn-cart text-normal ls-normal font-weight-semi-bold ${cartActive ? '' : 'disabled'}`}
                        onClick={() => console.log("ADDED TO CART")} onClick={() => console.log("ADDED TO CART")}><i
                        className='d-icon-bag'></i>Add to Cart
                    </button>
                </div>
            </div>

            <hr className="product-divider mb-3"></hr>
        </div>
    )
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {
    toggleWishlist: wishlistActions.toggleWishlist,
    addToCart: cartActions.addToCart
})(DetailThree);

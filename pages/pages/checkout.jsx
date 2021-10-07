import {useContext, useState} from 'react';
import {connect} from 'react-redux';
import {getTotalPrice, toDecimal} from '~/utils';
import {loadStripe} from "@stripe/stripe-js";
import {Collapse} from 'react-bootstrap';
import Helmet from 'react-helmet';
import SlideToggle from 'react-slide-toggle';


import ALink from '~/components/features/custom-link';
import Card from '~/components/features/accordion/card';


import AuthContext from "~/context/AuthContext";
import {useRouter} from "next/router";
import {API_URL, STRIPE_PK} from "~/utils/urls";

const stripePromise = loadStripe(STRIPE_PK);

function Checkout(props) {
    // TODO cartList weer toevoegen en dynamisch maken
    // const { cartList } = props;
    const [isFirst, setFirst] = useState(false);
    const [email, setEmail] = useState("");
    const {loginUser, user, getToken} = useContext(AuthContext);
    const router = useRouter();

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

    const handleSubmit = event => {
        event.preventDefault();
        loginUser(email);
    }

    const product = {
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
    };

    const redirectToLogin = () => {
        router.push('/login');
    }

    const handleBuy = async () => {
        const stripe = await stripePromise;
        const token = await getToken();

        const res = await fetch(`${API_URL}/orders`, {
            method: 'POST',
            body: JSON.stringify({product}),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        console.log(res);
        const session = await res.json();
        console.log("SESSION: ", session)
        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        })

    }

    return (
        <main className="main checkout">
            <Helmet>
                <title>Riode React eCommerce Template | Checkout</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Checkout</h1>

            <div className={`page-content pt-7 pb-10 ${cartList.length > 0 ? 'mb-10' : 'mb-2'}`}>
                <div className="step-by pr-4 pl-4">
                    <h3 className="title title-simple title-step"><ALink href="/pages/cart">1. Shopping Cart</ALink>
                    </h3>
                    <h3 className="title title-simple title-step active"><ALink href="#">2. Checkout</ALink></h3>
                    <h3 className="title title-simple title-step"><ALink href="/pages/order">3. Order Complete</ALink>
                    </h3>
                </div>
                <div className="container mt-7">
                    {
                        cartList.length > 0 ?
                            <>
                                {
                                    !user ? (
                                        <div className="card accordion">
                                            <Card type="parse" title="<div class='alert alert-light alert-primary alert-icon mb-4 card-header'>
                            <i class='fas fa-exclamation-circle'></i> <span class='text-body'>Returning customer?</span> <a href='#' class='text-primary collapse'>Click here to login</a>
                        </div>">
                                                <div className="alert-body collapsed">
                                                    <div className="row cols-md-2">
                                                        <form onSubmit={handleSubmit} className="mb-4 mb-md-0">
                                                            <label htmlFor="username">Email</label>
                                                            <input
                                                                type="email"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                className="input-text form-control mb-0"
                                                                name="username"
                                                                id="username"
                                                                placeholder="Your Email address *"
                                                                autoComplete="username"/>
                                                        </form>
                                                    </div>
                                                    <div className="link-group">
                                                        <ALink href="#"
                                                               className="btn btn-dark btn-rounded mb-4">Login</ALink>
                                                        <span
                                                            className="d-inline-block text-body font-weight-semi-bold">or Login With</span>
                                                        <div className="social-links mb-4">
                                                            <ALink href="#"
                                                                   className="social-link social-google fab fa-google"></ALink>
                                                            <ALink href="#"
                                                                   className="social-link social-facebook fab fa-facebook-f"></ALink>
                                                            <ALink href="#"
                                                                   className="social-link social-twitter fab fa-twitter"></ALink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    ) : ""
                                }
                                {user ? (
                                    <>
                                        <div className="card accordion">
                                            <Card title="
                                            <div class='alert alert-light alert-primary alert-icon mb-4 card-header'>
                                                <i class='fas fa-exclamation-circle'></i>
                                                <span class='text-body'>Have a coupon?</span>
                                                <a href='#' class='text-primary'>Click here to enter your code</a>
                                            </div>" type="parse">

                                                <div className="alert-body mb-4 collapsed">
                                                    <p>If you have a coupon code, please apply it below.</p>
                                                    <form className="check-coupon-box d-flex">
                                                        <input type="text" name="coupon_code"
                                                               className="input-text form-control text-grey ls-m mr-4"
                                                               id="coupon_code" placeholder="Coupon code"/>
                                                        <button type="submit"
                                                                className="btn btn-dark btn-rounded btn-outline">Apply
                                                            Coupon
                                                        </button>
                                                    </form>
                                                </div>
                                            </Card>
                                        </div>
                                        <form action="#" className="form">
                                            <div className="row">
                                                <div className="col-lg-7 mb-6 mb-lg-0 pr-lg-4">
                                                    <h3 className="title title-simple text-left text-uppercase">Billing
                                                        Details</h3>
                                                    <div className="row">
                                                        <div className="col-xs-6">
                                                            <label>First Name *</label>
                                                            <input type="text" className="form-control"
                                                                   name="first-name"/>
                                                        </div>
                                                        <div className="col-xs-6">
                                                            <label>Last Name *</label>
                                                            <input type="text" className="form-control" name="last-name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <label>Company Name (Optional)</label>
                                                    <input type="text" className="form-control" name="company-name"
                                                    />
                                                    <label>Country / Region *</label>
                                                    <div className="select-box">
                                                        <select name="country" className="form-control"
                                                                defaultValue="us">
                                                            <option value="us">United States (US)</option>
                                                            <option value="uk"> United Kingdom</option>
                                                            <option value="fr">France</option>
                                                            <option value="aus">Austria</option>
                                                        </select>
                                                    </div>
                                                    <label>Street Address *</label>
                                                    <input type="text" className="form-control" name="address1"
                                                           placeholder="House number and street name"/>
                                                    <input type="text" className="form-control" name="address2"
                                                           placeholder="Apartment, suite, unit, etc. (optional)"/>
                                                    <div className="row">
                                                        <div className="col-xs-6">
                                                            <label>Town / City *</label>
                                                            <input type="text" className="form-control" name="city"
                                                            />
                                                        </div>
                                                        <div className="col-xs-6">
                                                            <label>State *</label>
                                                            <input type="text" className="form-control" name="state"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xs-6">
                                                            <label>ZIP *</label>
                                                            <input type="text" className="form-control" name="zip"
                                                            />
                                                        </div>
                                                        <div className="col-xs-6">
                                                            <label>Phone *</label>
                                                            <input type="text" className="form-control" name="phone"
                                                            />
                                                        </div>
                                                    </div>
                                                    <label>Email Address *</label>
                                                    <input type="text" className="form-control" name="email-address"
                                                    />

                                                    <SlideToggle duration={300} collapsed>
                                                        {({onToggle, setCollapsibleElement}) => (
                                                            <div className="form-checkbox mb-0 pt-0">
                                                                <input type="checkbox" className="custom-checkbox"
                                                                       id="create-account" name="create-account"
                                                                       onChange={onToggle}/>
                                                                <label className='form-control-label ls-s'
                                                                       htmlFor='create-account'>Create an
                                                                    account?</label>

                                                                <div ref={setCollapsibleElement}
                                                                     style={{overflow: 'hidden'}}>
                                                                    <label htmlFor="account_username" className="pt-4">Account
                                                                        username&nbsp;
                                                                        <abbr className=""
                                                                              title="">*</abbr>
                                                                    </label>

                                                                    <input type="text" className="form-control"
                                                                           name="account_username" id="account_username"
                                                                           placeholder="Username" rows="5"/>

                                                                    <label htmlFor="account_password">Create account
                                                                        password&nbsp;
                                                                        <abbr className=""
                                                                              title="">*</abbr>
                                                                    </label>

                                                                    <input type="password" className="form-control mb-3"
                                                                           name="account_password" id="account_password"
                                                                           placeholder="Password" rows="5"/>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </SlideToggle>

                                                    <SlideToggle duration={300} collapsed>
                                                        {({onToggle, setCollapsibleElement}) => (
                                                            <div className="form-checkbox mb-6">
                                                                <input type="checkbox" className="custom-checkbox"
                                                                       id="different-address" name="different-address"
                                                                       onChange={onToggle}/>
                                                                <label className='form-control-label ls-s'
                                                                       htmlFor='different-address'>Ship to a different
                                                                    address?</label>

                                                                <div ref={setCollapsibleElement}
                                                                     style={{overflow: 'hidden'}}>
                                                                    <div className="row pt-4">
                                                                        <div className="col-xs-6">
                                                                            <label>First Name *</label>
                                                                            <input type="text" className="form-control"
                                                                                   name="first-name"/>
                                                                        </div>
                                                                        <div className="col-xs-6">
                                                                            <label>Last Name *</label>
                                                                            <input type="text" className="form-control"
                                                                                   name="last-name"/>
                                                                        </div>
                                                                    </div>
                                                                    <label>Company Name (Optional)</label>
                                                                    <input type="text" className="form-control"
                                                                           name="company-name"/>
                                                                    <label>Country / Region *</label>
                                                                    <div className="select-box">
                                                                        <select name="country" className="form-control"
                                                                                defaultValue="us">
                                                                            <option value="us">United States (US)
                                                                            </option>
                                                                            <option value="uk"> United Kingdom</option>
                                                                            <option value="fr">France</option>
                                                                            <option value="aus">Austria</option>
                                                                        </select>
                                                                    </div>
                                                                    <label>Street Address *</label>
                                                                    <input type="text" className="form-control"
                                                                           name="address1"
                                                                           placeholder="House number and street name"/>
                                                                    <input type="text" className="form-control"
                                                                           name="address2"
                                                                           placeholder="Apartment, suite, unit, etc. (optional)"/>
                                                                    <div className="row">
                                                                        <div className="col-xs-6">
                                                                            <label>Town / City *</label>
                                                                            <input type="text" className="form-control"
                                                                                   name="city"/>
                                                                        </div>
                                                                        <div className="col-xs-6">
                                                                            <label>State *</label>
                                                                            <input type="text" className="form-control"
                                                                                   name="state"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-xs-6">
                                                                            <label>ZIP *</label>
                                                                            <input type="text" className="form-control"
                                                                                   name="zip"/>
                                                                        </div>
                                                                        <div className="col-xs-6">
                                                                            <label>Phone *</label>
                                                                            <input type="text" className="form-control"
                                                                                   name="phone"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </SlideToggle>

                                                    <h2 className="title title-simple text-uppercase text-left mt-6">Additional
                                                        Information</h2>
                                                    <label>Order Notes (Optional)</label>
                                                    <textarea className="form-control pb-2 pt-2 mb-0" cols="30" rows="5"
                                                              placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                                                </div>

                                                <aside className="col-lg-5 sticky-sidebar-wrapper">
                                                    <div className="sticky-sidebar mt-1"
                                                         data-sticky-options="{'bottom': 50}">
                                                        <div className="summary pt-5">
                                                            <h3 className="title title-simple text-left text-uppercase">Your
                                                                Order</h3>
                                                            <table className="order-table">
                                                                <thead>
                                                                <tr>
                                                                    <th>Product</th>
                                                                    <th></th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                {
                                                                    cartList.map(item =>
                                                                        <tr key={'checkout-' + item.name}>
                                                                            <td className="product-name">{item.name}
                                                                                <span
                                                                                    className="product-quantity">×&nbsp;{item.qty}</span>
                                                                            </td>
                                                                            <td className="product-total text-body">${toDecimal(item.price * item.qty)}</td>
                                                                        </tr>
                                                                    )
                                                                }

                                                                <tr className="summary-subtotal">
                                                                    <td>
                                                                        <h4 className="summary-subtitle">Subtotal</h4>
                                                                    </td>
                                                                    <td className="summary-subtotal-price pb-0 pt-0">${toDecimal(getTotalPrice(cartList))}
                                                                    </td>
                                                                </tr>
                                                                <tr className="sumnary-shipping shipping-row-last">
                                                                    <td colSpan="2">
                                                                        <h4 className="summary-subtitle">Calculate
                                                                            Shipping</h4>
                                                                        <ul>
                                                                            <li>
                                                                                <div className="custom-radio">
                                                                                    <input type="radio" id="flat_rate"
                                                                                           name="shipping"
                                                                                           className="custom-control-input"
                                                                                           defaultChecked/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="flat_rate">Flat
                                                                                        rate</label>
                                                                                </div>
                                                                            </li>

                                                                            <li>
                                                                                <div className="custom-radio">
                                                                                    <input type="radio"
                                                                                           id="free-shipping"
                                                                                           name="shipping"
                                                                                           className="custom-control-input"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="free-shipping">Free
                                                                                        shipping</label>
                                                                                </div>
                                                                            </li>

                                                                            <li>
                                                                                <div className="custom-radio">
                                                                                    <input type="radio"
                                                                                           id="local_pickup"
                                                                                           name="shipping"
                                                                                           className="custom-control-input"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="local_pickup">Local
                                                                                        pickup</label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                <tr className="summary-total">
                                                                    <td className="pb-0">
                                                                        <h4 className="summary-subtitle">Total</h4>
                                                                    </td>
                                                                    <td className=" pt-0 pb-0">
                                                                        <p className="summary-total-price ls-s text-primary">${toDecimal(getTotalPrice(cartList))}</p>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="payment accordion radio-type">
                                                                <h4 className="summary-subtitle ls-m pb-3">Payment
                                                                    Methods</h4>

                                                                <div className="checkbox-group">
                                                                    <div className="card-header">
                                                                        <ALink href="#"
                                                                               className={`text-body text-normal ls-m ${isFirst ? 'collapse' : ''}`}
                                                                               onClick={() => {
                                                                                   !isFirst && setFirst(!isFirst)
                                                                               }}>Check payments</ALink>
                                                                    </div>

                                                                    <Collapse in={isFirst}>
                                                                        <div className="card-wrapper">
                                                                            <div
                                                                                className="card-body ls-m overflow-hidden">
                                                                                Please send a check to Store Name, Store
                                                                                Street,
                                                                                Store Town, Store State / County, Store
                                                                                Postcode.
                                                                            </div>
                                                                        </div>
                                                                    </Collapse>

                                                                    <div className="card-header">
                                                                        <ALink href="#"
                                                                               className={`text-body text-normal ls-m ${!isFirst ? 'collapse' : ''}`}
                                                                               onClick={() => {
                                                                                   isFirst && setFirst(!isFirst)
                                                                               }}>Cash on delivery</ALink>
                                                                    </div>

                                                                    <Collapse in={!isFirst}>
                                                                        <div className="card-wrapper">
                                                                            <div
                                                                                className="card-body ls-m overflow-hidden">
                                                                                Please send a check to Store Name, Store
                                                                                Street,
                                                                                Store Town, Store State / County, Store
                                                                                Postcode.
                                                                            </div>
                                                                        </div>
                                                                    </Collapse>
                                                                </div>
                                                            </div>
                                                            <div className="form-checkbox mt-4 mb-5">
                                                                <input type="checkbox" className="custom-checkbox"
                                                                       id="terms-condition"
                                                                       name="terms-condition"/>
                                                                <label className="form-control-label"
                                                                       htmlFor="terms-condition">
                                                                    I have read and agree to the website <ALink
                                                                    href="#">terms and conditions </ALink>*
                                                                </label>
                                                            </div>
                                                            <button
                                                                onClick={handleBuy}
                                                                className="btn btn-dark btn-rounded btn-order">
                                                                Place Order
                                                            </button>
                                                        </div>
                                                    </div>
                                                </aside>
                                            </div>
                                        </form>
                                    </>
                                ) : ""
                                }
                            </>
                            :
                            <div className="empty-cart text-center">
                                <p>Your cart is currently empty.</p>
                                <i className="cart-empty d-icon-bag"></i>
                                <p className="return-to-shop mb-0">
                                    <ALink className="button wc-backward btn btn-dark btn-md" href="/shop">
                                        Return to shop
                                    </ALink>
                                </p>
                            </div>
                    }
                </div>
            </div>
        </main>
    )
}

function mapStateToProps(state) {
    return {
        cartList: state.cart.data ? state.cart.data : []
    }
}

export default connect(mapStateToProps)(Checkout);

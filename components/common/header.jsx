import { useState, useEffect, useContext } from 'react';
import Reveal from "react-awesome-reveal";
import Cookie from "js-cookie";
import AuthContext from "~/context/AuthContext";
import { useRouter } from 'next/router';
import ALink from '~/components/features/custom-link';
import CartMenu from '~/components/common/partials/cart-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { fadeInRightShorter, fadeInLeftShorter } from '~/utils/data/keyframes';

export default function Header () {
    const router = useRouter();
    const [ showTopNotice, setShowTopNotice ] = useState( !Cookie.get( "closeTopNotice" ) );

    const {user} = useContext(AuthContext);

    useEffect( () => {
        window.addEventListener( 'resize', resizeHandler );

        if ( window.innerWidth > 1200 && router.pathname === '/' ) {
            document.querySelector( 'body' ).classList.add( 'category-sidebar-active' );
            window.jQuery( '.owl-carousel' ).trigger( 'refresh.owl.carousel' );
        }

        return ( () => {
            window.removeEventListener( 'resize', resizeHandler );
        } )
    }, [] );

    const resizeHandler = () => {
        if ( document.querySelector( 'body' ).classList.contains( 'category-sidebar-active' ) ) {
            document.querySelector( 'body' ).classList.remove( 'category-sidebar-active' );
            window.jQuery( '.owl-carousel' ).trigger( 'refresh.owl.carousel' );
        }
    }

    const showCategoryMenu = () => {
        document.querySelector( 'body' ).classList.toggle( 'category-sidebar-active' );
        window.jQuery( '.owl-carousel' ).trigger( 'refresh.owl.carousel' );
    }

    function closeTopNotice ( e ) {
        e.preventDefault();
        setShowTopNotice( false );
        Cookie.set( "closeTopNotice", true, { expires: 7 } );
    }

    return (
        <header className={ `header ${ router.pathname.includes( '/products' ) ? 'border-bottom' : '' }` }>
            {
                showTopNotice &&
                <div className="header-top has-center top-notice">
                    <div className="container" style={ { backgroundImage: "url(./images/home/header.png)" } }>
                        <div className="header-left">
                            <div className="banner1 banner d-flex align-items-center">
                                <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 1500 } triggerOnce>
                                    <figure>
                                        <img src="./images/home/money.png" alt="money" width="58" height="72" />
                                    </figure>
                                    <div className="banner-content text-normal">
                                        <h3 className="banner-title text-white font-weight-bold">Riode Birthday Sale</h3>
                                        <h4 className="banner-subtitle text-white font-weight-normal mb-0">Big Savings for you</h4>
                                    </div>
                                </Reveal>
                            </div>
                        </div>

                        <div className="header-right">
                            <div className="banner2 banner">
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1500 } triggerOnce>
                                    <div className="banner-content d-flex align-items-center">
                                        <h3 className="banner-title text-white mb-0 text-normal font-weight-normal">
                                            Instant discount on<span className="d-block  text-right">Get our Featured Products</span>
                                        </h3>
                                        <ALink href="/shop" className="btn btn-link btn-white">Shop now<i className="d-icon-arrow-right"></i></ALink>

                                        <a className="btn btn-icon btn-notice-close" href="#" onClick={ closeTopNotice }><i className="d-icon-close"></i></a>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="header-middle sticky-header fix-top sticky-content">
                <div className="container">
                    <div className="header-left">
                        <ALink href="#" className="left-sidebar-toggle" onClick={ showCategoryMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <ALink href="tel:#" className="icon-box icon-box-side">
                            <div className="icon-box-icon mr-0 mr-lg-2">
                                <i className="d-icon-phone"></i>
                            </div>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">Call Us Now:</h4>
                                <p>0(800) 123-456</p>
                            </div>
                        </ALink>

                        <span className="divider"></span>

                    </div>

                    <div className="header-center">
                        <ALink href="/" className="logo d-lg-none d-block">
                            <img src="/images/home/logo.jpg" alt="logo" width="153" height="44" />
                        </ALink>

                        <SearchBox />
                    </div>

                    <div className="header-right">
                        {
                            user ? (
                                <ALink href="/account" className="icon-box icon-box-side">
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title">Logged in as:</h4>
                                        <p>{user.email}</p>
                                    </div>
                                </ALink>
                            ) : <LoginModal/>
                        }

                        <ALink href="/pages/wishlist" className="wishlist">
                            <i className="d-icon-heart"></i>
                        </ALink>

                        <span className="divider"></span>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header >
    );
}

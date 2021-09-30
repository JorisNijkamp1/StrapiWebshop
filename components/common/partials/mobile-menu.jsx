import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SlideToggle from 'react-slide-toggle';

import ALink from '~/components/features/custom-link';



function MobileMenu () {
    const [ search, setSearch ] = useState( "" );
    const router = useRouter();
    const query = router.query;

    useEffect( () => {
        window.addEventListener( 'resize', hideMobileMenuHandler );
        document.querySelector( "body" ).addEventListener( "click", onBodyClick );

        return () => {
            window.removeEventListener( 'resize', hideMobileMenuHandler );
            document.querySelector( "body" ).removeEventListener( "click", onBodyClick );
        }
    }, [] )

    useEffect( () => {
        setSearch( "" );
    }, [ router.query.slug ] )

    const hideMobileMenuHandler = () => {
        if ( window.innerWidth > 991 ) {
            document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
        }
    }

    const hideMobileMenu = () => {
        document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
    }

    function onSearchChange ( e ) {
        setSearch( e.target.value );
    }

    function onBodyClick ( e ) {
        if ( e.target.closest( '.header-search' ) ) return e.target.closest( '.header-search' ).classList.contains( 'show-results' ) || e.target.closest( '.header-search' ).classList.add( 'show-results' );

        document.querySelector( '.header-search.show' ) && document.querySelector( '.header-search.show' ).classList.remove( 'show' );
        document.querySelector( '.header-search.show-results' ) && document.querySelector( '.header-search.show-results' ).classList.remove( 'show-results' );
    }

    function onSubmitSearchForm ( e ) {
        e.preventDefault();
        router.push( {
            pathname: '/shop',
            query: {
                search: search
            }
        } );
    }

    return (
        <div className="mobile-menu-wrapper">
            <div className="mobile-menu-overlay" onClick={ hideMobileMenu }>
            </div>

            <ALink className="mobile-menu-close" href="#" onClick={ hideMobileMenu }><i className="d-icon-times"></i></ALink>

            <div className="mobile-menu-container scrollable">
                <form action="#" className="input-wrapper" onSubmit={ onSubmitSearchForm }>
                    <input type="text" className="form-control" name="search" autoComplete="off" value={ search } onChange={ onSearchChange }
                        placeholder="Search your keyword..." required />
                    <button className="btn btn-search" type="submit">
                        <i className="d-icon-search"></i>
                    </button>
                </form>

                <ul className="mobile-menu mmenu-anim">
                    <SlideToggle duration={ 300 } collapsed >
                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                            <li className={ `submenu ${ toggleState === 'EXPANDED' ? 'show' : '' }` }>
                                <ALink href={ { pathname: '/shop', query: { category: 'fashion', grid: query.grid } } }>
                                    <i className="d-icon-t-shirt1"></i>Fashion
                                <span className={ `toggle-btn ${ toggleState.toLowerCase() }` } onClick={ e => { e.stopPropagation(); e.preventDefault(); onToggle(); } }></span>
                                </ALink>

                                <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                    <ul style={ { display: "block", background: "#232323" } }>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'dress', grid: query.grid } } }>Dress</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'shirts', grid: query.grid } } }>Shirts</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'bags', grid: query.grid } } }>Bags</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'trousers', grid: query.grid } } }>Trousers</ALink></li>
                                    </ul>
                                </div>
                            </li>
                        ) }
                    </SlideToggle>

                    <SlideToggle duration={ 300 } collapsed >
                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                            <li className={ `submenu ${ toggleState === 'EXPANDED' ? 'show' : '' }` }>
                                <ALink href={ { pathname: '/shop', query: { category: 'electronics', grid: query.grid } } }>
                                    <i className="d-icon-camera2"></i>Electronics
                                <span className={ `toggle-btn ${ toggleState.toLowerCase() }` } onClick={ e => { e.stopPropagation(); e.preventDefault(); onToggle(); } }></span>
                                </ALink>

                                <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                    <ul style={ { display: "block", background: "#232323" } }>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'watches', grid: query.grid } } }>Watches</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'equipments', grid: query.grid } } }>Equipments</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'machines', grid: query.grid } } }>Machines</ALink></li>
                                    </ul>
                                </div>
                            </li>
                        ) }
                    </SlideToggle>

                    <SlideToggle duration={ 300 } collapsed >
                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                            <li className={ `submenu ${ toggleState === 'EXPANDED' ? 'show' : '' }` }>
                                <ALink href={ { pathname: '/shop', query: { category: 'computer-and-laptops', grid: query.grid } } }>
                                    <i className="d-icon-desktop"></i>Computer &amp; Laptops
                                <span className={ `toggle-btn ${ toggleState.toLowerCase() }` } onClick={ e => { e.stopPropagation(); e.preventDefault(); onToggle(); } }></span>
                                </ALink>

                                <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                    <ul style={ { display: "block", background: "#232323" } }>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'computers', grid: query.grid } } }>Computers</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'laptops', grid: query.grid } } }>Laptops</ALink></li>
                                    </ul>
                                </div>
                            </li>
                        ) }
                    </SlideToggle>

                    <SlideToggle duration={ 300 } collapsed >
                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                            <li className={ `submenu ${ toggleState === 'EXPANDED' ? 'show' : '' }` }>
                                <ALink href={ { pathname: '/shop', query: { category: 'home-and-kitchen', grid: query.grid } } }>
                                    <i className="d-icon-cook"></i>Home &amp; kitchen
                                <span className={ `toggle-btn ${ toggleState.toLowerCase() }` } onClick={ e => { e.stopPropagation(); e.preventDefault(); onToggle(); } }></span>
                                </ALink>

                                <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                    <ul style={ { display: "block", background: "#232323" } }>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'home', grid: query.grid } } }>Home</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'kitchen', grid: query.grid } } }>Kitchen</ALink></li>
                                    </ul>
                                </div>
                            </li>
                        ) }
                    </SlideToggle>

                    <li>
                        <ALink href={ { pathname: '/shop', query: { category: 'toys-and-babycare', grid: query.grid } } }><i className="d-icon-babycare"></i>Toys &amp; Babycare</ALink>
                    </li>
                    <li>
                        <ALink href={ { pathname: '/shop', query: { category: 'sports', grid: query.grid } } }><i className="d-icon-basketball1"></i>Sports</ALink>
                    </li>
                    <li>
                        <ALink href={ { pathname: '/shop', query: { category: 'backpack-and-bags', grid: query.grid } } }><i className="d-icon-officebag"></i>Backpack &amp; Bags</ALink>
                    </li>
                    <li>
                        <ALink href={ { pathname: '/shop', query: { category: 'gaming-and-accessories', grid: query.grid } } }><i className="d-icon-gamepad1"></i>Gaming &amp; Accessories</ALink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default React.memo( MobileMenu );
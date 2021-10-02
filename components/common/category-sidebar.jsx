import React from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

function CategorySidebar() {
    const router = useRouter();
    const query = router.query;

    let categoryList = [
        {
            name: "Fashion",
            slug: "fashion",
            icon: "d-icon-t-shirt2"
        },
        {
            name: "Electronics",
            slug: "electronics",
            icon: "d-icon-camera2"
        },
        {
            name: "Computer & Laptops",
            slug: "computer",
            icon: "d-icon-desktop"
        },
        {
            name: "Home & Kitchen",
            slug: "home-and-kitchen",
            icon: "d-icon-pot"
        },
        {
            name: "Toys & Babycare",
            slug: "toys-and-babycare",
            icon: "d-icon-babycare"
        },
        {
            name: "Sports",
            slug: "sports",
            icon: "d-icon-basketball1"
        },
        {
            name: "Backpack & Bags",
            slug: "backpacks",
            icon: "d-icon-officebag"
        },
        {
            name: "Lounge & Underwear",
            slug: "clothing",
            icon: "d-icon-loungewear"
        }
    ]

    const hideSidebar = ( e ) => {
        e.preventDefault();
        document.querySelector( 'body' ).classList.remove( "category-sidebar-active" );
    }

    return (
        <aside className="category-sidebar">
            <div className="sidebar-overlay" onClick={ hideSidebar }>
                <a className="sidebar-close" href="#" onClick={ hideSidebar }><i className="d-icon-times"></i></a>
            </div>

            <div className="sidebar-content d-flex flex-column">
                <ALink href="/" className="logo">
                    <img src="/images/home/logo.jpg" alt="logo" width="153" height="44" />
                </ALink>

                <ul className="menu toggle-menu category-menu">
                    {
                        categoryList.map( ( item ) =>
                            <li className={ query.category === item.slug ? 'active' : '' } key={ "category-filter-" + item.slug }>
                                <ALink href={ { pathname: '/shop', query: { category: item.slug, grid: query.grid } } }>
                                    <i className={ item.icon }></i>{ item.name }
                                </ALink>
                            </li>
                        )
                    }
                </ul>

                <div className="social-links no-border">
                    <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                    <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                    <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                </div>
            </div>
        </aside>
    );
}

export default React.memo( CategorySidebar );

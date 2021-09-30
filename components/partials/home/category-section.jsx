import React from 'react';
import Reveal from "react-awesome-reveal";

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeIn } from '~/utils/data/keyframes';
import { categorySlider } from '~/utils/data/carousel';

function CategorySection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="categories pt-10 pb-md-10 pb-4" style={ { backgroundColor: "#fff" } }>
                <div className="container pt-5 pb-6">
                    <h2 className="title title-simple mb-5 mb-lg-7">Shop by Categories</h2>

                    <OwlCarousel adClass="owl-theme" options={ categorySlider }>
                        <div className="category category-group-icon" style={ { backgroundColor: "#23282d" } }>
                            <ALink href={ { pathname: '/shop', query: { category: 'clothing' } } }>
                                <figure className="category-media">
                                    <i className="d-icon-t-shirt1" style={ { fontSize: "7.2rem", margin: "-.2rem 0 1.2rem" } }></i>
                                </figure>
                                <h4 className="category-name">Clothing</h4>
                            </ALink>

                            <div className="category-content">
                                <ul className="category-list">
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'accessories-clothing' } } }>Accessories</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'bracelets-clothing' } } }>Bracelets</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'men-s-clothing' } } }>Men's Necklace</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'pendant-clothing' } } }>Pendant</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'watch-clothing' } } }>Watch</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="category category-group-icon" style={ { backgroundColor: "#0b49a6" } }>
                            <ALink href={ { pathname: '/shop', query: { category: 'accessories' } } }>
                                <figure className="category-media">
                                    <i className="d-icon-basketball2"></i>
                                </figure>
                                <h4 className="category-name">Accessories</h4>
                            </ALink>

                            <div className="category-content">
                                <ul className="category-list">
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'accessories-accessories' } } }>Accessories</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'bracelets-accessories' } } }>Bracelets</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'men-s-accessories' } } }>Men's</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'shoes' } } }>Shoes</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'women-s-accessories' } } }>Women's</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="category category-group-icon" style={ { backgroundColor: "#23282d" } }>
                            <ALink href={ { pathname: '/shop', query: { category: 'backpacks' } } }>
                                <figure className="category-media">
                                    <i className="d-icon-backpack"></i>
                                </figure>
                                <h4 className="category-name">Backpacks</h4>
                            </ALink>

                            <div className="category-content">
                                <ul className="category-list">
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'accessories-backpacks' } } }>Accessories</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'bracelets-backpacks' } } }>Bracelets</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'men-s-backpacks' } } }>Men's Bags</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'watch-backpacks' } } }>Watch</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'women-s-backpacks' } } }>Women's</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="category category-group-icon" style={ { backgroundColor: "#2879fe" } }>
                            <ALink href={ { pathname: '/shop', query: { category: 'computers' } } }>
                                <figure className="category-media">
                                    <i className="d-icon-desktop"></i>
                                </figure>
                                <h4 className="category-name">Computers</h4>
                            </ALink>

                            <div className="category-content">
                                <ul className="category-list">
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'accessories-computers' } } }>Accessories</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'laptops' } } }>Laptops</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'pads' } } }>Pads</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'pcs' } } }>PCs</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'phones' } } }>Phones</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </Reveal >
    )
}

export default React.memo( CategorySection );
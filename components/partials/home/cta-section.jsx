import React from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';

function CtaSection() {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="pt-10 pb-10" style={ { backgroundColor: "#fff" } }>
                <div className="container pt-4 pb-4">
                    <div className="banner banner-cta" style={ { backgroundImage: "url(./images/home/banner/sale-banner.png)", backgroundPosition: "center", backgroundSize: "cover" } }>
                        <div className="banner-content">
                            <div className="banner-left mb-lg-0 mb-4">
                                <figure>
                                    <img src="./images/home/banner/money.png" alt="icon" width="44" height="55" />
                                </figure>

                                <div>
                                    <h3 className="banner-title text-white text-uppercase font-weight-bold">Trade-In</h3>
                                    <p className="text-white font-primary mb-0">Upgrade and Save</p>
                                </div>
                            </div>

                            <div className="banner-center text-center mb-lg-0 mb-4">
                                <h4 className="banner-subtitle ls-normal text-white font-weight-normal">Get an Riode Gift Card+25% off New Trending Collection</h4>
                                <p className="text-white font-primary mb-0">Limited time offer</p>
                            </div>

                            <div className="banner-right align-items-center">
                                <ALink href="/shop" className="btn btn-dark btn-rounded">Shop now<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( CtaSection );
import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <section className="intro-section container-fluid">
            <OwlCarousel adClass="intro-slider animation-slider owl-theme owl-dot-inner owl-dot-white" options={ introSlider }>
                <div className="intro-slide1 banner banner-fixed" style={ { backgroundColor: "#fff" } }>
                    <figure>
                        <LazyLoadImage
                            src="./images/home/slides/img1.png"
                            alt="Intro Slider"
                            effect="opacity"
                            width="auto"
                            height={ 649 }
                        />
                    </figure>

                    <div className="banner-content y-50">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1600 }>
                            <h4 className="banner-subtitle text-white font-weight-normal">Buy 2 Get 1 Free</h4>
                            <h3 className="banner-title text-white font-weight-bold">Fashionable 2021 <br /> Collection</h3>
                            <p className="font-primary text-white mb-6">From 9th January to 19th February 2021</p>
                            <ALink href="/shop" className="btn btn-primary btn-rounded">Shop now<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>

                <div className="intro-slide2 banner banner-fixed" style={ { backgroundColor: "#77818a" } }>
                    <figure>
                        <LazyLoadImage
                            src="./images/home/slides/2.jpg"
                            alt="Intro Slider"
                            effect="opacity"
                            width="auto"
                            height={ 649 }
                        />
                    </figure>

                    <div className="banner-content y-50">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 1600 }>
                            <h4 className="banner-subtitle">The Riode Online Store</h4>
                            <h3 className="banner-title">Autumn Trending <br /> Collection</h3>
                            <p className="font-primary mb-6">From 9th January to 19th February 2021</p>
                            <ALink href="/shop" className="btn btn-dark btn-rounded">Shop now<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    )
}

export default React.memo( IntroSection );

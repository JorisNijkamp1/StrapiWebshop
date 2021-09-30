import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import { brandSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BrandSection () {
    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } delay={ 300 } triggerOnce>
            <section className="brands pt-10 pb-10">
                <div className="container">
                    <h2 className="title title-simple mb-5 mb-lg-7 pt-5">Shop by Brand</h2>

                    <OwlCarousel adClass="owl-theme owl-shadow-carousel pb-6" options={ brandSlider }>
                        <figure>
                            <img src="./images/home/clients/1.jpg" alt="Brand" width="180" height="142" />
                        </figure>
                        <figure>
                            <img src="./images/home/clients/2.jpg" alt="Brand" width="180" height="142" />
                        </figure>
                        <figure>
                            <img src="./images/home/clients/3.jpg" alt="Brand" width="180" height="142" />
                        </figure>
                        <figure>
                            <img src="./images/home/clients/4.jpg" alt="Brand" width="180" height="142" />
                        </figure>
                        <figure>
                            <img src="./images/home/clients/5.jpg" alt="Brand" width="180" height="142" />
                        </figure>
                        <figure>
                            <img src="./images/home/clients/6.jpg" alt="Brand" width="180" height="142" />
                        </figure>
                    </OwlCarousel>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( BrandSection );
import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { instagramSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function InstagramSection () {
    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } delay={ 300 } triggerOnce>
            <section className="instagrams pt-3 pb-4" style={ { backgroundColor: "#fff" } }>
                <div className="container pt-10 pb-10">
                    <h2 className="title title-simple">Our Instagram</h2>

                    <OwlCarousel adClass="owl-theme" options={ instagramSlider }>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/1.jpg"
                                    alt="instagram"
                                    effect="opacity; transform"
                                    width="auto"
                                    height="auto"
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/2.jpg"
                                    alt="instagram"
                                    effect="opacity; transform"
                                    width="auto"
                                    height="auto"
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/3.jpg"
                                    alt="instagram"
                                    effect="opacity; transform"
                                    width="auto"
                                    height="auto"
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/4.jpg"
                                    alt="instagram"
                                    effect="opacity; transform"
                                    width="auto"
                                    height="auto"
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/5.jpg"
                                    alt="instagram"
                                    effect="opacity; transform"
                                    width="auto"
                                    height="auto"
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/6.jpg"
                                    alt="instagram"
                                    effect="opacity; transform"
                                    width="auto"
                                    height="auto"
                                />
                            </ALink>
                        </figure>
                    </OwlCarousel>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( InstagramSection );
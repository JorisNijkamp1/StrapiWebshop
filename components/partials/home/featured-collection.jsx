import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';

import { productSlider2 } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function FeaturedCollection ( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper container mt-10 pt-5 mb-md-10 mb-4 pb-5">
                <h2 className="title title-simple mb-5 mb-lg-7">Our Featured</h2>

                {
                    loading ?
                        <OwlCarousel adClass="owl-theme owl-nav-inner" options={ productSlider2 }>
                            {
                                [ 1, 2, 3, 4, 5, 6 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'featured-skel-' + item }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme owl-nav-inner" options={ productSlider2 }>
                            {
                                products && products.slice( 0, 6 ).map( ( item, index ) =>
                                    <ProductTwo
                                        product={ item }
                                        key={ `featured-product ${ index }` }
                                        adClass="product-image-gap text-center"
                                        isBadge={ false }
                                    />
                                )
                            }
                        </OwlCarousel>
                }
            </section>
        </Reveal>
    )
}

export default React.memo( FeaturedCollection );

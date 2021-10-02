import React from 'react';
import Reveal from 'react-awesome-reveal';
import OwlCarousel from '~/components/features/owl-carousel';

import {productSlider} from '~/utils/data/carousel';
import {fadeIn} from '~/utils/data/keyframes';
import ProductTwo from "~/components/features/product/product-two";

function CourseCollections(props) {
    const {products, loading} = props;

    return (
        <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
            <section className="product-wrapper container mt-10 pt-5 mb-md-9 mb-3 pb-3">
                <h2 className="title title-simple mb-5 mb-lg-7">Trending 2021</h2>
                {
                    loading ?
                        <OwlCarousel adClass="owl-theme owl-nav-inner" options={productSlider}>
                            {
                                products.map((item) =>
                                    <div className="product-loading-overlay" key={'latest-skel-' + item}></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme owl-nav-inner" options={productSlider}>
                            {
                                products && products.map((product, index) =>
                                    <ProductTwo
                                        product={ product }
                                        key={ `latest-products ${ index }` }
                                        adClass="products-image-gap text-center mb-4"
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

export default React.memo(CourseCollections);

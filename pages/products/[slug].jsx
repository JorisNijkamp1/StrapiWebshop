import React, {useEffect, useState} from 'react';
import Helmet from 'react-helmet';

import products from 'products.json';
import {API_URL} from "~/utils/urls";
import MediaOne from "~/components/partials/product/media/media-one";
import DetailThree from "~/components/partials/product/detail/detail-three";
import OwlCarousel from "~/components/features/owl-carousel";
import {mainSlider17} from "~/utils/data/carousel";


function ProductDefault({product}) {
    // const { data, loading, error } = useQuery( GET_PRODUCT, { variables: { slug } } );
    const [ loaded, setLoadingState ] = useState( false );
    // const product = data && data.product.data;
    // const related = data && data.product.related;

    console.log(product)

    useEffect( () => {
        if ( !product )
            imagesLoaded( 'main' ).on( 'done', function () {
                setLoadingState( true );
            } ).on( 'progress', function () {
                setLoadingState( false );
            } );
    }, [ product ] )

    return (
        <main className="main mt-4 border-top single-product">
            <Helmet>
                <title>{product.name}</title>
                <meta name="description" content={product.name} />
            </Helmet>

            <h1 className="d-none">{product.name}</h1>
            {
                products !== undefined ?
                    <div className={`page-content mb-10`}>
                        <div className="container skeleton-body">
                            <div className="products products-single row mb-4">
                                <div className="col-md-6">
                                    <MediaOne product={product}/>
                                </div>

                                <div className="col-md-6">
                                    <DetailThree product={product} isSticky={true} isDesc={false}/>
                                </div>
                            </div>

                            {/*<DescOne products={ products } isShipping={ true } isGuide={ false } />*/}

                            {/*<RelatedProducts products={ related } adClass="products-wrapper" />*/}
                        </div>
                    </div> : <div className="skeleton-body container mb-10">
                        <div className="row mb-7">
                            <div className="col-md-6 pg-vertical">
                                <div className="skel-pro-gallery"></div>
                            </div>

                            <div className="col-md-6">
                                <div className="skel-pro-summary"></div>
                            </div>
                        </div>
                        <div className="skel-pro-tabs"></div>
                        <section className="pt-3 mt-4">
                            <h2 className="title justify-content-center">Related Products</h2>

                            <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={ mainSlider17 }>
                                {
                                    [ 1, 2, 3, 4, 5, 6 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'popup-skel-' + item }></div>
                                    )
                                }
                            </OwlCarousel>
                        </section>
                    </div>
            }
        </main>
    )
}

export async function getStaticProps({params: {slug}}) {
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
    const found = await product_res.json();

    return {
        props: {
            product: found[0] // Response is an array.
        }
    }
}

export async function getStaticPaths() {
    const product_res = await fetch(`${API_URL}/products/`);
    const products = await product_res.json();

    return {
        paths: products.map(product => ({
            params: {
                slug: String(product.slug)
            }
        })),
        fallback: false // Tells to nextjs to show aa 404 if the params does not match.
    }
}

export default (ProductDefault);

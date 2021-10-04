import React from 'react';
import Helmet from 'react-helmet';

// import products from 'products.json';
import {API_URL} from "~/utils/urls";
import MediaOne from "~/components/partials/product/media/media-one";
import DetailThree from "~/components/partials/product/detail/detail-three";


function ProductDefault({product}) {
    return (
        <main className="main mt-4 border-top single-product">
            <Helmet>
                <title>{product.name}</title>
                <meta name="description" content={product.name} />
            </Helmet>

            <h1 className="d-none">{product.name}</h1>
            {
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
        },
        revalidate: 2
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

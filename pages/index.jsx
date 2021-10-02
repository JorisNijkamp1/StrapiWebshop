import React from 'react';
import Helmet from 'react-helmet';

import IntroSection from '~/components/partials/home/intro-section';
import CategorySection from '~/components/partials/home/category-section';
import BrandSection from '~/components/partials/home/brand-section';
import CourseCollections from "~/components/partials/home/CourseCollections";
import {API_URL} from "~/utils/urls";

export default function HomePage({products}) {
    console.log(products);
    return (
        <div className="main homepage">
            <Helmet>
                <title>e-commerce shop - Home</title>
            </Helmet>

            <h1 className="d-none">e-commerce shop - Home</h1>

            <div className="page-content">
                <IntroSection />

                <CourseCollections products={products} loading={false}/>

                {/*<NewCollection products={ products } loading={ loading } />*/}

                <CategorySection />

                {/*<FeaturedCollection products={ featured } loading={ loading } />*/}

                {/*<CtaSection />*/}

                {/*<BlogSection posts={ posts } />*/}

                {/*<InstagramSection />*/}

                <BrandSection />
            </div>

            {/*<NewsletterModal />*/}
        </div>
    )
}

export async function getStaticProps(){
    const product_res = await fetch(`${API_URL}/products/`);
    const products = await product_res.json();

    return {
        props:{
            products
        }
    }
}


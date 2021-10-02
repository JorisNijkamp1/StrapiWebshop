import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';

import { relatedProductSlider } from '~/utils/data/carousel';

export default function RelatedProducts ( props ) {
    const { products, adClass = "" } = props;

    return (
        products.length > 0 ?
            <section className={ `related-products ${ adClass }` }>
                <h2 className="title text-center d-block">Related Products</h2>

                <OwlCarousel adClass="owl-theme owl-nav-full" options={ relatedProductSlider }>
                    {
                        products && products.slice( 0, 5 ).map( ( item, index ) =>
                            <div className="product-wrap" key={ 'products-two-' + index }>
                                <ProductTwo product={ item } />
                            </div>
                        )
                    }
                </OwlCarousel>
            </section> : ''
    )
}

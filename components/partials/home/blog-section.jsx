import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostEight from '~/components/features/post/post-eight';

import { fadeIn } from '~/utils/data/keyframes';
import { mainSlider6 } from '~/utils/data/carousel';

function BlogSection ( props ) {
    const { posts } = props;

    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } delay={ 200 } triggerOnce>
            <section className="blog container pt-10 pb-md-10 pb-4">
                <h2 className="title title-simple pt-5">Latest Blog</h2>

                <OwlCarousel adClass="owl-theme owl-shadow-carousel pb-4" options={ mainSlider6 }>
                    {
                        posts && posts.length ?
                            posts.slice( 15, 19 ).map( ( post, index ) => (
                                <React.Fragment key={ "post-eight" + index }>
                                    <PostEight post={ post } adClass="overlay-zoom" adClass="post-image-gap" btnAdClass="btn-md" />
                                </React.Fragment>
                            ) ) : ''
                    }
                </OwlCarousel>
            </section>
        </Reveal>
    )
}

export default React.memo( BlogSection );
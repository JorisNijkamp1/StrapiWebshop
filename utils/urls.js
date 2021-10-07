export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://strapi-webshop.jorisnijkamp.nl'
export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_KEY || 'pk_live_5674B79447EDA8CE';
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51JhsSKEHTM6BX0hwj3BInApe9YtlA5t7jFfjNMfHo8VoJtD4jet8BAZMWIpaGzOVkuz0twsUaFEYvyPo1kDBqwyy00QKxnffiu';
export const fromImageToUrl = image => {
    if (!image) {
        return "/logo.png"
    }

    if (image.url.indexOf('/') === 0) {
        return `${API_URL}${image.url}`
    }

    return image.url;
}



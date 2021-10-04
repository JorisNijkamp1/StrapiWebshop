export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://strapi-webshop.jorisnijkamp.nl'
export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_KEY || 'pk_live_5674B79447EDA8CE';

export const fromImageToUrl = image => {
    if (!image) {
        return "/logo.png"
    }

    if (image.url.indexOf('/') === 0) {
        return `${API_URL}${image.url}`
    }

    return image.url;
}



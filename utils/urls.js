export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_KEY;

export const fromImageToUrl = image => {
    if (!image) {
        return "/logo.png"
    }

    if (image.url.indexOf('/') === 0) {
        return `${API_URL}${image.url}`
    }

    return image.url;
}



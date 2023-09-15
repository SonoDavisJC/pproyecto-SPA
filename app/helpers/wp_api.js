
// https://www.rollingstone.com/
// https://sylvesterstallone.com/


const NAME = 'sylvesterstallone',
DOMAIN = `https://${NAME}.com`,
SITE = `${DOMAIN}/wp-json`,
API_WP = `${SITE}/wp/v2`,
PER_PAGE = 12,
POSTS = `${API_WP}/posts?_emdeb&per_page=${PER_PAGE}`,
USER_WEBMASTER = `${API_WP}/users/2`,
POST = `${API_WP}/posts`,
SEARCH = `${API_WP}/search?_emdeb&subtype=post&search=`;


let page = 1;

export default {
    NAME, 
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    SEARCH,
    USER_WEBMASTER,
    page
}
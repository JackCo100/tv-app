export const apiBaseUrl = "https://api.tvmaze.com";
export const searchEndpoint = "/search/shows?q=";
export const showDetailsEndpoint = "/shows/";

export const searchUrl = (query) => `${apiBaseUrl}${searchEndpoint}${encodeURIComponent(query)}`;
export const showDetailsUrl = (id) => `${apiBaseUrl}${showDetailsEndpoint}${id}`;

export const getMovies = async (query) => {
    if (!query) return [];
    const response = await fetch(searchUrl(query));
    const data = await response.json();
    return data.map((item) => item.show);
}

export const getMovieDetails = async (id) => {
    const response = await fetch(showDetailsUrl(id));
    return await response.json();
}
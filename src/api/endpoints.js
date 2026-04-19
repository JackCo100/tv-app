export const apiBaseUrl = 'https://api.tvmaze.com';

/* Search Endpoints */
export const showsEndpoint = '/shows';
export const showSearchEndpoint = '/search/shows?q={query}';
export const singleSearchEndpoint = '/singlesearch/shows?q={query}&embed=episodes';
export const peopleSearchEndpoint = '/search/people?q={query}';
export const showLookupEndpoint = '/lookup/shows?thetvdb={id}';
export const alternateShowsEndpoint = '/alternatelists/{id}?embed=alternateepisodes';

/* Schedule Endpoints */
export const scheduleEndpoint = '/schedule?country={country}&date={date}';

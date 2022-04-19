const THEMOVIEDB_API_CONFIG = {
  KEY: process.env.THEMOVIEDB_API_KEY,
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  DEFAULT_LANGUAGE: 'en-US',
  CACHE_NAME: 'MovieCatalogue',
};

export default THEMOVIEDB_API_CONFIG;

import TheMovieDbSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <h2>Detail</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.movieDetail(url.id);
    console.log(movie);

    // TODO: render movie detail to DOM.
  },
};

export default Detail;

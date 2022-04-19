import { createLikeButtonTemplate, createMovieDetailTemplate } from '../../../templates/template-creator';
import TheMovieDbSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.movieDetail(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;

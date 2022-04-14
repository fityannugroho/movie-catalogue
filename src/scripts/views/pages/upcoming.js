import TheMovieDbSource from '../../data/themoviedb-source';

const Upcoming = {
  async render() {
    return `
      <h2>Upcoming</h2>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies();
    console.log(movies);

    // TODO: render movies to DOM.
  },
};

export default Upcoming;

const NowPlaying = {
  async render() {
    return `
      <h2>Now Playing</h2>
    `;
  },

  async afterRender() {
    // This function wiil be called after render().
  },
};

export default NowPlaying;

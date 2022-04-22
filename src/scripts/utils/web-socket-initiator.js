import THEMOVIEDB_API_CONFIG from '../globals/themoviedb-api-config';
import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const movie = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${movie.title} is now available in the cinema`,
      options: {
        body: movie.overview,
        image: THEMOVIEDB_API_CONFIG.BASE_IMAGE_URL + movie.poster_path,
      },
    });
  },
};

export default WebSocketInitiator;

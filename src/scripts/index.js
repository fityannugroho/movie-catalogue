import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import serviceWorkerRegister from './utils/service-worker-register';
import WebSocketInitiator from './utils/web-socket-initiator';
import APP_CONFIG from './globals/app-config';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  serviceWorkerRegister();
  WebSocketInitiator.init(APP_CONFIG.WEB_SOCKET_URL);
});

const serviceWorkerRegister = async () => {
  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register('../service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      }).catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
    return;
  }
  console.log('Service Worker not supported');
};

export default serviceWorkerRegister;

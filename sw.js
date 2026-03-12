const CACHE_NAME = 'up-controle-v1';

// Instala o Service Worker e cria um cache básico
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['./']);
    })
  );
});

// Responde às requisições (necessário para o Chrome liberar a instalação)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

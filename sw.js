// Service worker minimal — pas de cache agressif
// La page se charge depuis le réseau à chaque fois
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  // Supprime tous les anciens caches
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
  self.clients.claim();
});
// Pas de fetch handler = réseau direct, jamais de cache cassé

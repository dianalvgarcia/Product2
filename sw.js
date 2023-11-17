// sw.js

const CACHE_NAME = 'mi-cache';
const urlsToCache = [
  '/',
  'index.html',  
  '/styles.css',
  '/script.js',
  '/index.php'
  
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});

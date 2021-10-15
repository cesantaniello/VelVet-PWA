const nombreCache = 'apv-v1';
const archivos = [
    '/', 
    '/index.html',
    '/error.html', 
    '/css/bootstrap.css', 
    '/css/style.css', 
    '/js/app.js', 
    '/js/apv.js'
];

//Cuando se instala el ServiceWorker
self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalado');
    event.waitUntil(
        caches.open(nombreCache)
        .then(cache => {
            console.log('Service Worker: Cargando cache');
            cache.addAll(archivos);
        })
    );
});

//Activa el ServiceWorker
self.addEventListener('activate', (event) => {
    console.log('Service Worker activado');
    console.log(event);
});

//Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', (event) => {
    console.log('Fetch', event);

    event.respondWith(
        caches.match(event.request)
        .then(respuestaCache => {
            return respuestaCache
        })
        .catch(() => caches.match('/error.html'))
    );
});
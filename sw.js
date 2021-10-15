//Cuando se instala el ServiceWorker

self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalado');
    console.log(event);
});

//Activa el ServiceWorker

self.addEventListener('activate', (event) => {
    console.log('Service Worker activado');
    console.log(event);
});

//Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', (event) => {
    console.log('Fetch', event);
});
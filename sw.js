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
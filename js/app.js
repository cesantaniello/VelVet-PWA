if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js') 
        .then(registrado => console.log('Service Worker registrado', registrado))
        .catch(error => console.log('No se pudo registrar el Service Worker', error));
}else{
    console.log('Service Worker not supported');
}
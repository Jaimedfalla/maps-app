import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYmxhbmNoaW5nOTU0OSIsImEiOiJjbGN6NjlrdnEwMGFiM3BwankzZGN1YTgzIn0.AUG-ZCp3DhCKeamliRW9ow';

if(!navigator.geolocation){
    throw new Error('Your browser does not support or is not enable Geolocation feature')
}

createApp(App)
.use(store)
.use(router)
.mount('#app')

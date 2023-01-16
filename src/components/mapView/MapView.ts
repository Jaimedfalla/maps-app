import { usePlacesModule } from '@/composables';
import Mapboxgl from 'mapbox-gl';
import { defineComponent,onMounted,ref, watch } from 'vue';

export default defineComponent ({
    name:'MapView',
    setup() {
        const mapElement = ref<HTMLDivElement>(); //Formar de referenciar un elemento HTML, en este caso un div
        const {
            userLocation,
            isUserLocationReady
        } = usePlacesModule()

        const initMap = async ()=>{
            if(!mapElement.value) throw new Error('Div element does not exists');
            if(!userLocation.value) throw new Error('User location does not exists');

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });

            const myLocationPopup = new Mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h4>You are here</h4>
                    <p>${userLocation.value}</p>
                `)

            const myLocationMarker = new Mapboxgl.Marker();
            myLocationMarker
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map);
        }

        onMounted(()=>{
            if(isUserLocationReady.value) return initMap();

            console.log('No hay localización aún')
        })

        watch(isUserLocationReady,()=>{
            if(isUserLocationReady.value) initMap()
        })

        return {
            isUserLocationReady,
            mapElement
        }
    }
});
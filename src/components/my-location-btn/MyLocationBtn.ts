import { useMapModule, usePlacesModule } from '@/composables';
import { computed, defineComponent } from 'vue';

export default defineComponent ({
    name:'MyLocationBtn',
    setup() {
        const {userLocation,isUserLocationReady}=usePlacesModule();
        const {map,isReady}=useMapModule();

        return {
            isBotonReady:computed<boolean>(()=>isUserLocationReady.value && isReady.value),
            onMyLocationClicked: () =>{
                map.value?.flyTo({
                    center: userLocation.value!,
                    zoom:14
                })
            }
        }
    }
});
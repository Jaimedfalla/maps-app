import { useMapModule, usePlacesModule } from '@/composables';
import { Feature } from '@/interfaces/places';
import { defineComponent,ref, watch } from 'vue';

export default defineComponent ({
    name:'SarchResults',
    setup() {
        
        const {isLoadingPlaces, searchResult,userLocation} = usePlacesModule();
        const {map,setPlaceMarkers,getRoutes} = useMapModule();
        const activePlace = ref('');

        watch(searchResult,(newPlaces)=>{
            if(newPlaces.length===0) return;
            activePlace.value = '';
            setPlaceMarkers(newPlaces);
        })

        return {
            isLoadingPlaces,
            searchResult,
            activePlace,

            onPlaceClicked:(place:Feature)=>{
                activePlace.value = place.id;
                const [lng,lat] = place.center;

                map.value?.flyTo({
                    center:[lng,lat],
                    zoom:14
                });
            },
            getRouteDirections:async(place:Feature)=>{
                if(!userLocation.value) return;

                const [lng,lat] = place.center;
                const [startLng,startLat] =userLocation.value;
                const start:[number,number] = [startLng,startLat];
                const end  :[number,number] = [lng,lat];
                await getRoutes(start,end);
            }
        }
    }
});
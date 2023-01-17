import { useStore } from "vuex";
import { IState } from "@/store";
import { computed, onMounted } from "vue";
import { Feature } from "@/interfaces/places";

export const usePlacesModule = () => {
    const store = useStore<IState>();

    onMounted(()=>{
        if(!store.getters['places/isUserLocationReady']){
            store.dispatch('places/getInitialLocation')
        }
    })

    return {
        isLoading:computed(()=> store.state.places.isLoading),
        userLocation:computed(()=> store.state.places.userLocation),
        searchResult:computed<Feature[]>(()=>store.state.places.places),
        isLoadingPlaces:computed<boolean>(()=>store.state.places.isLoadingPlaces),

        isUserLocationReady:computed<boolean>(()=> store.getters['places/isUserLocationReady']),
        searchPlaceByTerm:(query='')=>store.dispatch('places/searchPlacesByTerm',query)
    }
}
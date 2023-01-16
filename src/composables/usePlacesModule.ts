import { useStore } from "vuex";
import { IState } from "@/store";
import { computed, onMounted } from "vue";

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

        isUserLocationReady:computed<boolean>(()=> store.getters['places/isUserLocationReady'])
    }
}
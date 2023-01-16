import { IState } from "@/store";
import mapboxgl from "mapbox-gl";
import { computed } from "vue";
import { useStore } from "vuex"


export const useMapModule = ()=>{
    const store = useStore<IState>();

    return {
        map:computed(()=>store.state.map.map),
        isReady:computed<boolean>(()=> store.getters['map/isMapReady']),
        setMap:(map:mapboxgl.Map) =>store.commit('map/setMap',map)
    }

}
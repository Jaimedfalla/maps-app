import { Feature } from "@/interfaces/places";
import { IState } from "@/store";
import { LngLat } from "@/store/map/actions";
import mapboxgl from "mapbox-gl";
import { computed } from "vue";
import { useStore } from "vuex"


export const useMapModule = ()=>{
    const store = useStore<IState>();

    return {
        map:computed(()=>store.state.map.map),
        isReady:computed<boolean>(()=> store.getters['map/isMapReady']),
        distance:computed(()=>store.state.map.distance),
        duration:computed(()=>store.state.map.duration),
        setMap:(map:mapboxgl.Map) =>store.commit('map/setMap',map),
        setPlaceMarkers:(places:Feature[])=>store.commit('map/setPlaceMarkers',places),
        getRoutes:(start:LngLat,end:LngLat) => store.dispatch('map/getRoutes',{start,end})
    }

}
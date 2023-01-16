import mapboxgl from "mapbox-gl";
import { MutationTree } from "vuex";
import { IMapState } from "./state";

const mutations:MutationTree<IMapState> = {
    setMap(state,map:mapboxgl.Map){
        state.map = map;
    }
}

export default mutations;
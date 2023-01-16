import { GetterTree } from "vuex";
import { IState } from "..";
import { IMapState } from "./state";

const getters:GetterTree<IMapState,IState>= {
    isMapReady(state){ 
        return !!state.map
    }
}

export default getters; 
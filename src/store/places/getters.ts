import { GetterTree } from "vuex";
import { IStatePlaces } from "./state";
import { IState } from "..";

const getters:GetterTree<IStatePlaces,IState>={
    isUserLocationReady(state){
        return !!state.userLocation
    }
}

export default getters
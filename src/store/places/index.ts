import { Module } from "vuex";
import { IState } from "..";

import state,{IStatePlaces} from "./state";
import actions from './actions';
import getters from "./getters";
import mutations from "./mutations";

const PlacesModule: Module<IStatePlaces,IState> = {
    namespaced:true,
    actions,
    getters,
    mutations,
    state
}

export default PlacesModule

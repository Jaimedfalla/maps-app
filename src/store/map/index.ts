import { Module } from "vuex";
import { IState } from "..";
import state,{ IMapState } from './state';
import getters from "./getters";
import mutations from "./mutations";
import actions from './actions';

const mapModule:Module<IMapState,IState> = {
    namespaced:true,
    actions,
    getters,
    mutations,
    state
}

export default mapModule;
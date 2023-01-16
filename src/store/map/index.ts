import { Module } from "vuex";
import { IState } from "..";
import state,{ IMapState } from './state';
import getters from "./getters";
import mutations from "./mutations";

const mapModule:Module<IMapState,IState> = {
    namespaced:true,
    getters,
    mutations,
    state
}

export default mapModule;
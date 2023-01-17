import { Feature } from "@/interfaces/places";
import { MutationTree } from "vuex";
import { IStatePlaces } from "./state";

const mutations:MutationTree<IStatePlaces> = {
    setLgnLat(state:IStatePlaces,{lng,lat}:{lng:number,lat:number}){
        state.userLocation = [lng,lat];
        state.isLoading = false;
    },
    setLoadingPlaces(state){
        state.isLoadingPlaces=true; 
    },
    setPlaces(state,places:Feature[]){
        state.places = places;
        state.isLoadingPlaces = false;
    }
}

export default mutations
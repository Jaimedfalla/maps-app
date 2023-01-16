import { MutationTree } from "vuex";
import { IStatePlaces } from "./state";

const mutations:MutationTree<IStatePlaces> = {
    setLgnLat(state:IStatePlaces,{lng,lat}:{lng:number,lat:number}){
        state.userLocation = [lng,lat];
        state.isLoading = false;
    }
}

export default mutations
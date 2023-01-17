import { ActionTree } from "vuex";
import {IStatePlaces} from './state'
import {IState} from '../index'
import {searchApi} from "@/apis";
import { Feature, PlacesResponse } from "@/interfaces/places";

const actions:ActionTree<IStatePlaces,IState> = {
    getInitialLocation({commit}){
        navigator.geolocation.getCurrentPosition(            
            ({coords})=> commit('setLgnLat',{lng:coords.longitude,lat:coords.latitude}),
            (err) => {
                console.error(err)
                throw new Error('No geolocations :(')
            }
        )
    },
    async searchPlacesByTerm({commit,state},query:string):Promise<Feature[]>{
        if(query.length ===0)
        {
            commit('setPlaces',[])
            return [];
        }
        if(!state.userLocation) throw new Error('User Location not exists');

        commit('setLoadingPlaces');
        const response = await searchApi.get<PlacesResponse>(`/${query}.json`,{
            params:{
                proximity:state.userLocation?.join(',')
            }
        });

        commit('setPlaces',response.data.features)

        return response.data.features;
    }
}

export default actions
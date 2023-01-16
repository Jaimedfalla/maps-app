import { ActionTree } from "vuex";
import {IStatePlaces} from './state'
import {IState} from '../index'

const actions:ActionTree<IStatePlaces,IState> = {
    getInitialLocation({commit}){
        navigator.geolocation.getCurrentPosition(            
            ({coords})=>
                {
                    console.log(coords)
                    commit('setLgnLat',{lng:coords.longitude,lat:coords.latitude})
                },
            (err) => {
                console.error(err)
                throw new Error('No geolocations :(')
            }
        )
    }
}

export default actions
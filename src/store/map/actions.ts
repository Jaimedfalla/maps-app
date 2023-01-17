import { ActionTree } from "vuex";
import { IMapState } from "./state";
import { IState } from "..";
import {directionsApi} from '@/apis';
import { DirectionsResponse } from "@/interfaces/directions";

export type LngLat = [number,number];

const actions:ActionTree<IMapState,IState>={
    async getRoutes({commit},{start,end}:{start:LngLat,end:LngLat}){
        const respon = await directionsApi
            .get<DirectionsResponse>(`${start.join(',')};${end.join(',')}`);

        commit('setDistanceDuration',{
            distance:respon.data.routes[0].distance,
            duration:respon.data.routes[0].duration,
        });
        commit('setRoutePolyline',respon.data.routes[0].geometry.coordinates)
    }
}

export default actions;
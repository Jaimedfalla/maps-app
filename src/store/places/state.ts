import { Feature } from "@/interfaces/places";

export interface IStatePlaces{
    isLoading:boolean;
    userLocation?:[number,number]; //lng,tat
    isLoadingPlaces:boolean,
    places:Feature[]
}

function state():IStatePlaces{
    return{
        isLoading:true,
        userLocation:undefined,
        places:[],
        isLoadingPlaces:false
    }
}

export default state;
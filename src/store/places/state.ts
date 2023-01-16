export interface IStatePlaces{
    isLoading:boolean;
    userLocation?:[number,number]; //lng,tat
}

function state():IStatePlaces{
    return{
        isLoading:true,
        userLocation:undefined
    }
}

export default state
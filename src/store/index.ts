import { createStore } from 'vuex'
import PlacesModule from './places'
import { IStatePlaces } from './places/state'
import MapModule from './map'
import { IMapState } from './map/state'

export interface IState{
  places:IStatePlaces,
  map:IMapState
}

export default createStore<IState>({
  modules:{
    places:PlacesModule,
    map:MapModule
  }
})
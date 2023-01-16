import { createStore } from 'vuex'
import PlacesModule from './places'
import { IStatePlaces } from './places/state'

export interface IState{
  places:IStatePlaces
}

export default createStore<IState>({
  modules:{
    places:PlacesModule
  }
})
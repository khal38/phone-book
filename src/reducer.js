import{action} from './action'
import { CHANGE_SEARCH_FIELD } from './constants'

const  initialState = {
    searchfield = '',

}
// reducer get input state, do an action on the state and return a new state
export const searchRobots = (state = initialState, action ={})=>{
    switch(action.type){
        case : CHANGE_SEARCH_FIELD :
                return Object.assign({}, state, )
    }
}
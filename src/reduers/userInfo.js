import * as actionTypes from '../constants/userInfo.js'

let initialState = {}

export default function userInfo(state = initialState,action){
    switch (action.type){
        case actionTypes.USERINFO_UPDATA:
            return action.data
        default:
            return state
    }
}
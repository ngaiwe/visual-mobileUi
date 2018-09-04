import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '@/reduers/index.js'

export default function configureStore(initialState){
    const store =  createStore(reducers,initialState,composeWithDevTools()) 
    return store
}


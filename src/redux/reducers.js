import { combineReducers } from 'redux'

const user = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return {...state, ...action.value}
        case 'REMOVE_USER':
            return action.value
        default:
            return state
    }
}

const listings = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTING':
            return [ ...state, action.value ]
        case 'REMOVE_LISTING':
            const listings = [ ...state ]
            listings.splice(action.value, 1)
            return listings
        default:
            return state
    }
}

const map = (state = null, action) => {
    switch(action.type) {
        case "ADD_COORDS":
            return {...state, ...action.value}
        default:
            return state
    }
}

const mapOps = (state = null) => state

export default combineReducers({ user, listings, map, mapOps})
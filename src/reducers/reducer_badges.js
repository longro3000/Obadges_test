import _ from 'lodash';

import {FETCH_BADGES, FETCH_BADGE} from '../actions'

export default function(state={}, action) {
    switch (action.type){
      case FETCH_BADGE:
          return {...state, [action.payload.id]: action.payload};
      case FETCH_BADGES:
        return _.mapKeys(action.payload,'id');
      default:
        return state;
  }
}

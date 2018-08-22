import _ from 'lodash';

import {FETCH_BADGES, FETCH_BADGE, FETCH_BADGE_ON_TAG, FETCH_BADGE_ON_SEARCH, FETCH_NEW_BADGES} from '../actions'

export default function(state={}, action) {
    switch (action.type){
      case FETCH_BADGE:
          return {...state, [action.payload.id]: action.payload};
      case FETCH_BADGES:
        return _.mapKeys(action.payload, 'id');
      case FETCH_BADGE_ON_TAG:
        return _.mapKeys(action.payload, 'id');
      case FETCH_BADGE_ON_SEARCH:
        return _.mapKeys(action.payload, 'id');
      case FETCH_NEW_BADGES:
        return _.mapKeys(action.payload, 'id');
      default:
        return state;
  }
}

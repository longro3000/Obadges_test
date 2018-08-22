import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const FETCH_USER = 'fetch_user';
export const FETCH_BADGES = 'fetch_badges';
export const FETCH_TAGS = 'fetch_tags';
export const FETCH_BADGE = 'fetch_badge';
export const FETCH_BADGE_ON_SEARCH = 'fetch_badges_on_search';
export const FETCH_BADGE_ON_TAG = 'fetch_badges_on_search';
export const FETCH_NEW_BADGES = 'fetch_new_badges';

import {DUMP_USERS} from '../reducers/dump_users';
import {DUMP_TAGS} from '../reducers/dump_tags';
import {DUMP_BADGES} from '../reducers/dump_badges';

//--------------------------USERS-----------------------------

export function fetchUsers(){
    const request = DUMP_USERS;
    return {
        type: FETCH_USERS,
        payload: request
    };
}

export function fetchUser(id){
    const temp = _.mapKeys(DUMP_USERS, 'id');
    const request=temp[`${id}`];
    return {
        type: FETCH_USER,
        payload: request
    };
}

//----------------------TAGS----------------------------------
export function fetchTags(){
    const request = DUMP_TAGS;
    return {
        type: FETCH_TAGS,
        payload: request
    };
}

//---------------------BADGES------------------------------------
export function fetchBadgeOnSearch(values){
  const request = DUMP_BADGES;
  return {
      type: FETCH_BADGE_ON_SEARCH,
      payload: request
  };
}
export function fetchBadgeOnTag(values){
    const request = DUMP_BADGES;
    return {
        type: FETCH_BADGE_ON_TAG,
        payload: request
    };
}

export function fetchBadges(){
    const request = DUMP_BADGES;
    return {
        type: FETCH_BADGES,
        payload: request
    };
}

export function fetchNewBadges(){
    const request = DUMP_BADGES;
    return {
        type: FETCH_NEW_BADGES,
        payload: request
    };
}

export function fetchBadge(id){
    const temp = _.mapKeys(DUMP_BADGES, 'id');
    const request = temp[`${id}`];
    return {
        type: FETCH_BADGE,
        payload: request
    };
}

import {
  UPDATE_APP_STATE
} from './action-types';


export function updateAppState(payload) {
  return {
    type: UPDATE_APP_STATE,
    payload
  }
}

export default {
  updateAppState,
}

import {
  UPDATE_APP_STATE
} from './action-types';

const initialState = {
  isMobile: false,
};

const reducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case UPDATE_APP_STATE:
      return updateAppState(payload);
    default:
      return state
  }
};

function updateAppState(payload) {
  return { ...initialState, ...payload };
}

export default reducer;

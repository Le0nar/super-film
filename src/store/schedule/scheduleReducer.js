import { FETCH_SCHEDULE_FAILURE, FETCH_SCHEDULE_REQUEST, FETCH_SCHEDULE_SUCCESS } from "./scheduleTypes";


// Initial State
export const initialState = {
  loading: false,
  schedule: [],
  error: ''
};

// Reducer
export const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCHEDULE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_SCHEDULE_SUCCESS:
    return {
      ...state,
      loading: false,
      schedule: action.payload,
      error: ''
    };
    case FETCH_SCHEDULE_FAILURE:
    return {
      ...state,
      loading: false,
      schedule: [],
      error: action.payload
    };
    default:
      return state;
  };
};

export default scheduleReducer;

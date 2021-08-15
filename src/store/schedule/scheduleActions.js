import {
  FETCH_SCHEDULE_FAILURE,
  FETCH_SCHEDULE_REQUEST,
  FETCH_SCHEDULE_SUCCESS,
} from "./scheduleTypes";

export const fetchScheduleRequest = () => ({
  type: FETCH_SCHEDULE_REQUEST,
});

export const fetchScheduleSuccess = (schedule) => ({
  type: FETCH_SCHEDULE_SUCCESS,
  payload: schedule,
});

export const fetchScheduleFailure = (err) => ({
  type: FETCH_SCHEDULE_FAILURE,
  payload: err,
});

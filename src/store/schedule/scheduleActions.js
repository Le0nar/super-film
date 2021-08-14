import axios from "axios";
import { formatDate } from "../../utils/formatDate";

import { FETCH_SCHEDULE_FAILURE, FETCH_SCHEDULE_REQUEST, FETCH_SCHEDULE_SUCCESS } from "./scheduleTypes";

// Action Creators

export const fetchScheduleRequest = () => ({
  type: FETCH_SCHEDULE_REQUEST,
});

export const fetchScheduleSuccess = (schedule) => ({
  type: FETCH_SCHEDULE_SUCCESS,
  payload: schedule
});

export const fetchScheduleFailure = (err) => ({
  type: FETCH_SCHEDULE_FAILURE,
  payload: err
});


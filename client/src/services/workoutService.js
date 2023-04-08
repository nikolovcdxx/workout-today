import * as request from './requester';

const baseUrl = 'http://localhost:3005/data/workouts';

export const getAll = () => request.get(baseUrl);

export const getOne = (workoutId) => request.get(`${baseUrl}/${workoutId}`);

export const create = (workoutData) => request.post(baseUrl, workoutData);
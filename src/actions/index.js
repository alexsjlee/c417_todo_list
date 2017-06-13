import { FETCH_ALL, GET_ONE, ADD_TODO, DELETE_TODO } from './types';
import axios from 'axios';

const BASE_URL = 'http://api.scottbowlerdev.com';
const API_KEY = '?key=c417alex';

export function fetch_all() {
    const request = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: FETCH_ALL,
        payload: request
    }
}

export function get_one(id) {
    const request = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: GET_ONE,
        payload: request
    }
}

export function add_todo(item) {
    const request = axios.post(`${BASE_URL}/todos/${API_KEY}`, item);

    return {
        type: ADD_TODO,
        payload: request
    }
}

export function delete_todo(id) {
    const request = axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: DELETE_TODO,
        payload: request
    }
}
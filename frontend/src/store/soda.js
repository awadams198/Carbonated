import { csrfFetch } from "./csrf";

const ADD_SODA = '/soda/new';
const REMOVE_SODA = '/soda/del';
const GET_SODAS = '/sodas';

const newSODA = (soda) => {
    return {
        type: ADD_SODA,
        soda
    }
};

const allSODAS = (sodas) => {
    return {
        type: GET_SODAS,
        sodas
    }
}

const remove = (sodaId) => {
    return {
        type: REMOVE_SODA,
        sodaId
    }
};

export const createSoda = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/sodas/new`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    if (response.ok) {
        const soda = await response.json();
        dispatch(newSODA(soda));
        return soda;
    }
};

export const getOneSoda = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/sodas/${id}`);

    if (response.ok) {
        const soda = await response.json();
        dispatch(newSODA(soda));
        return soda;
    }
}

export const getAllSodas = () => async (dispatch) => {
    const response = await csrfFetch('/api/sodas');

    if (response.ok) {
        const sodas = await response.json();
        dispatch(allSODAS(sodas));
        return sodas;
    }
}

export const updateSoda = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/sodas/${data.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const soda = await response.json();
        dispatch(newSODA(soda));
        return soda;
    }
};
export const deleteSoda = sodaId => async dispatch => {
    const response = await csrfFetch(`/api/sodas/${sodaId}`, { method: 'delete', });

    if (response.ok) {
        await response.json()
        await dispatch(remove(sodaId))
    }
};

const sodaReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case ADD_SODA:
            if (state && action.soda && !state[action.soda.id]) {
                newState = {
                    [action.soda.id]: action.soda
                };
            } else {
                newState = { ...state }
            }
            return newState;
        case REMOVE_SODA:
            newState = { ...state };
            delete newState[action.sodaId];
            return newState;
        case GET_SODAS:
            const newSodas = {};
            newState = { ...state };
            action.sodas.forEach(soda => {
                if (soda.id) {
                    newSodas[soda.id] = soda;
                }
            });
            return {
                ...newState,
                ...newSodas
            };
        default:
            return state;
    }
};

export default sodaReducer;
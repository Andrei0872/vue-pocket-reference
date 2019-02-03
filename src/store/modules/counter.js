
import posts from './posts';
import * as types from '../types';

const state = {
    counter: 0,
    value: 10
};

const getters = {
    doubleCounter: state => state.counter * 2,
    stringCounter: state => state.counter + ' clicks',
    currentValue: state => state.value
};

const mutations = {
    increment: (state,) => {
        state.counter += 1;
    },
    decrement: (state) => {
        state.counter -= 1;
    },
    assignValue: (state, payload) => {
        state.value = payload
    }
};

const actions = {
    increment: ({ dispatch, commit, getters, rootGetters }) => {
        commit('increment');
    },
    decrement: ({ dispatch, commit, getters, rootGetters }) => {
        commit('decrement');
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by);
        }, payload.duration)
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement',payload.by);
        }, payload.duration)
    },
    updateVal: ({ commit }, payload) => {
        commit(types.UPDATE_VALUE, payload, { root: true });
    },
    test: ({ commit }, payload) => {
        commit(types.UPDATE_VALUE, payload, { root: true })
    }
};

// Include another namespaced module
const modules = {
    posts
};

export default {
    state,
    mutations,
    actions,
    getters,
    modules,
    namespaced: true
}
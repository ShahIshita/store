import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            obj: {}
        }
    },
    mutations: {
        mutationData(state, payload) {
            console.log(payload);
            state.obj = payload;
        }
    },
    actions: {
        actionData(context, payload) {
            console.log(payload);
            context.commit('mutationData', payload);
        }

    },
    getters: {
        userDetail(state) {
            return state.obj;
        }
    }

});


export default store;
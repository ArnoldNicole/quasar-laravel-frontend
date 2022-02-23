const state = {
  user:null
}


const getters = {
    getUser(state) {
      return state.user.name;
  },
  isAuthenticated(state) {
    return state.user == null ? false : true;
  }
}


const mutations = {
  logOutUser(state) {
     return state.user = null
  },
  setUpdateUser(state, payload){
    return state.user = payload;
  }
}


const actions = {
    logIn({commit}, data) {
        commit("setUpdateUser", data);
    },
    logOut({commit},data){
        commit("logOutUser",data);
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

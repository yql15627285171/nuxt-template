// state
export const state = () => ({
  name: '',
  age: '',
  token: ''
})

// getter
export const getters = {
  name: state => state.name,
  age: state => state.age,
  token: state => state.token,
}

// mutations
export const mutations = {
  U_set_info(state, data) {
    state.name = data.name
    state.age = data.age
    state.token = data.token
  }
}

// action
export const actions = {
  u_set_info({
    commit
  }, data) {
    commit("U_set_info", data)
  }
}

import Vue from 'vue'
// state
export const state = () => ({
  id:'',
  name: 'Xiaomi',
  age: '',
  token: ''
})

// getter
export const getters = {
  id: state => state.id,
  name: state => state.name,
  age: state => state.age,
  token: state => state.token,
}

// mutations
export const mutations = {
  U_set_info(state, data) {
    state.id = data.id
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

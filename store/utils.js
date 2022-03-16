// state
export const state = () => ({
    login_bg: '', //登录界面的背景照片
        protocols: [], //协议条款
        storeClose: false,
  })
  
  // getter
  export const getters = {
    login_bg: state => state.login_bg,
    protocols: state => state.protocols,
    storeClose: state => state.storeClose,
  }
  
  // mutations
  export const mutations = {
    set_login_bg: (state, image) => {
        state.login_bg = image
    },
    set_protocols: (state, protocols) => {
        state.protocols = protocols
    },
    u_store_close: (state, status) => {
        state.storeClose = status
    }
  }
  
  // action
  export const actions = {
    
    set_login_bg({
        commit
    }) {
       
    },

    set_protocols({
        commit
    }) {
       

    },
    u_store_close({
        commit
    }, status) {
        commit("u_store_close", status)
    }
  }
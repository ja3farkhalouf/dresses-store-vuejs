import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: null,
    username: 'jaafar',
    password: null,
    loggedin: true,
    users:  [
      { isloggedin: true, age: 40, username: "jaafar",password: "1234" },
      { isloggedin: false, age: 21, username: "ali",password: "223344" },
      {
        isloggedin: false,
        age: 9,
        username: "sally",
        password: 1234,
        _rowVariant: "success",
      },
      { isloggedin: false, age: 89, username: "juju",password: "12354" },
      { isloggedin: true, age: 38, username: "koko" ,password: "123754"},
      { isloggedin: false, age: 27, username: "lolo",password: "123124" },
      {
        isloggedin: true,
        age: 87,
        username: "mohamad",
        password: "12834"
      },
      { isloggedin: false, age: 26, username: "ahmad",password: "12534" },
      { isloggedin: false, age: 22, username: "julla",password: "09997" },
      { isloggedin: true, age: 38, username: "haneen",password: "126534" },
      { isloggedin: false, age: 29, username: "yammar",password: "5566" },
    ],
     
    
    products: null,
  },
  mutations: {
    SET_users(state, payload) {
      state.users = payload;
    },
    SET_products(state, payload) {
      state.products = payload;
    },
    SET_id(state, payload) {
      state.id = payload;
    },
    SET_username(state, payload) {
      state.username = payload;
    },
    SET_password(state, payload) {
      state.password = payload;
    },
    SET_loggedin(state, payload) {
      state.loggedIn = payload;
    },
    SET_newuser(state,payload){
      state.users.push(payload);
    },
    

  },
  actions: {
    performRegisterAction({commit ,payload}) {
      
      commit("SET_newuser", payload);
            
        
     
    },
  },
  modules: {},
  getters: {
    get_users(state) {
      return state.users;
    },
    get_products(state) {
      return state.products;
    },
    get_id(state) {
      return state.id;
    },
    get_username(state) {
      return state.username;
    },
    get_password(state) {
      return state.password;
    },
    get_loggedin(state) {
      return state.username;
    },
  },
});

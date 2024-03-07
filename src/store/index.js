import { createStore } from 'vuex';
import axiosService from '../services/axiosService';

export default createStore({
  state: {
    comics: [],
    selectedComic: {},
    cart: []
  },
  mutations: {
    INCREASE_QUANTITY(state, comicId) {
      const itemIndex = state.cart.findIndex((item) => item.id === comicId);
      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity += 1;
      }
    },
    DECREASE_QUANTITY(state, comicId) {
      const itemIndex = state.cart.findIndex((item) => item.id === comicId);
      if (itemIndex !== -1) {
        if (state.cart[itemIndex].quantity > 1) {
          state.cart[itemIndex].quantity -= 1;
        }
      }
    },
    setComics(state, comics) {
      state.comics = comics;
    },
    setComicDetails(state, comic) {
      state.selectedComic = comic;
    },
    addToCart(state, comic) {
      const existingItem = state.cart.find((item) => item.id === comic.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ ...comic, quantity: 1 });
      }
    },
    removeFromCart(state, comicId) {
      state.cart = state.cart.filter((item) => item.id !== comicId);
    },
    addToCart(state, comic) {
      state.cart.push(comic);
    },
    removeFromCart(state, comicId) {
      state.cart = state.cart.filter(comic => comic.id !== comicId);
    },
  },
  actions: {
    fetchComics({ commit }) {
      axiosService.getComics().then((response) => {
        commit('setComics', response.data.data.results);
      });
    },
    fetchComicDetails({ commit }, comicId) {
      axiosService.getComicDetails(comicId).then((response) => {
        commit('setComicDetails', response.data.data.results[0]);
      });
    },
    addComicToCart({ commit }, comic) {
      commit('addToCart', comic);
    },
    removeComicFromCart({ commit }, comicId) {
      commit('removeFromCart', comicId);
    },
    increaseQuantity({ commit }, comicId) {
      commit('INCREASE_QUANTITY', comicId);
    },
    decreaseQuantity({ commit }, comicId) {
      commit('DECREASE_QUANTITY', comicId);
    },
  
  },
  getters: {
    comicsList: state => state.comics,
    cartItemCount: state => state.cart.length,
    cartItems: state => state.cart,
  }
});

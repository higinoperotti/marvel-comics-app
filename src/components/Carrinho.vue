<template>
  <div>
    <div v-for="item in cart" :key="item.id">
      {{ item.title }} - {{ item.quantity }}
      <button @click="removeFromCart(item.id)">Remover</button>
    </div>
    <div>Total: {{ calculateTotal() }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    removeFromCart(comicId) {
      this.$store.commit('removeFromCart', comicId);
    },
    calculateTotal() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    }
  }
};
</script>

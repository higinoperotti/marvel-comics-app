<template>
  <div class="cart">
    <h2>Seu Carrinho</h2>
    <ul v-if="cartItems.length > 0">
      <li v-for="item in cartItems" :key="item.id" class="cart-item">
        <div class="item-details">
          <h3>{{ item.title }}</h3>
          <p>Quantidade: {{ item.quantity }}</p>
          <p>Preço por unidade: R$ {{ item.price.toFixed(2) }}</p>
          <p>Total: R$ {{ itemTotal(item).toFixed(2) }}</p>
        </div>
        <div class="quantity-controls">
          <button @click="increaseQuantity(item)">+</button>
          <button @click="decreaseQuantity(item)">-</button>
        </div>
        <button @click="removeFromCart(item.id)" class="remove-button">Remover</button>
      </li>
    </ul>
    <p v-else>Seu carrinho está vazio.</p>
    <div v-if="cartItems.length > 0" class="cart-summary">
      <p>Subtotal: R$ {{ calculateSubtotal().toFixed(2) }}</p>
      <p>Total: R$ {{ calculateTotal().toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
  methods: {
    removeFromCart(comicId) {
      this.$store.dispatch('removeComicFromCart', comicId);
    },
    increaseQuantity(item) {
      this.$store.dispatch('increaseQuantity', item.id);
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        this.$store.dispatch('decreaseQuantity', item.id);
      } else {
        // Caso a quantidade seja 1, remova o item do carrinho
        this.removeFromCart(item.id);
      }
    },
    calculateSubtotal() {
      return this.cartItems.reduce((total, item) => total + this.itemTotal(item), 0);
    },
    calculateTotal() {
      // Pode adicionar taxas ou descontos aqui se necessário
      return this.calculateSubtotal();
    },
    itemTotal(item) {
      return item.price * item.quantity;
    },
  },
};
</script>

<style lang="scss" scoped>
/* Adicione estilos conforme necessário */

.cart {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 10px;
  }

  .item-details {
    flex-grow: 1;
  }

  .quantity-controls {
    display: flex;
    flex-direction: column;

    button {
      background-color: #3498db;
      color: #fff;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      margin-bottom: 5px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #2980b9;
      }
    }
  }

  .remove-button {
    background-color: #e74c3c;
    color: #fff;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c0392b;
    }
  }
}

.cart-summary {
  margin-top: 20px;
  padding: 10px;
  background-color: #ecf0f1;
  border: 1px solid #ddd;
  border-radius: 8px;

  p {
    font-size: 1rem;
    margin: 5px 0;
  }
}
</style>

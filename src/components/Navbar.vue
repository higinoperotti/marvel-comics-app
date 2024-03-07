<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="navbar-links" :class="{ 'show-menu': isMenuOpen }">
        <router-link to="/">Página Inicial</router-link>
        <router-link to="/cart">Carrinho ({{ cartItemCount }})</router-link>
        <router-link to="/about">Sobre</router-link>
        <!-- Adicione mais links conforme necessário -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #3498db;
  padding: 15px 0;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    background-color: #fff;
    height: 3px;
    width: 25px;
    margin: 5px 0;
    display: block;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
}

.navbar-links {
  display: flex;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    background-color: #3498db;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    top: 60px;
    left: 0;
    padding: 15px;

    &.show-menu {
      display: flex;
    }
  }
}
</style>

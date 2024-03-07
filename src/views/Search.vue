<!-- Search.vue -->
<template>
  <div class="search">
    <div class="container">
      <input v-model="searchQuery" @input="searchComics" class="search-input" placeholder="Digite o nome do quadrinho" />
      <Listagem :comics="searchResults" />
    </div>
  </div>
</template>

<script>
import Listagem from "@/components/Listagem.vue";

export default {
  components: {
    Listagem
  },
  data() {
    return {
      searchQuery: "",
      searchResults: []
    };
  },
  methods: {
    searchComics() {
      // Lógica de busca na API da Marvel usando Axios
      // Atualizar searchResults com os resultados da busca
    }
  }
};
</script>

<style lang="scss" scoped>
/* Estilos específicos para a view Search */
.search {
  background-color: #f0f0f0;
}

.container {
  padding: 20px;
  box-sizing: border-box;
}

.search-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
</style>

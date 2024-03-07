<template>
  <div>
    <input v-model="searchQuery" @input="searchComics" placeholder="Digite o nome do quadrinho" />
    <div v-for="result in searchResults" :key="result.id" @click="showDetails(result.id)">
      {{ result.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchResults: []
    };
  },
  methods: {
    searchComics() {
      // Lógica de busca na API da Marvel usando Axios
      // Atualizar searchResults com os resultados da busca
    },
    showDetails(comicId) {
      this.$router.push(`/details/${comicId}`);
    }
  }
};
</script>

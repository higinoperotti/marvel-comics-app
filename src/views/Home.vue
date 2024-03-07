<template>
  <div class="home">
    <header class="home-header">
      <div class="header-content">
        <h1>Descubra o Universo Marvel</h1>
        <p>Explore uma vasta coleção de quadrinhos e mergulhe em histórias emocionantes.</p>
        <button @click="navigateToAbout">Saiba Mais</button>
      </div>
    </header>
    <div class="search-bar">
      <label for="search">Buscar Quadrinhos:</label>
      <input
        type="text"
        id="search"
        v-model="searchTerm"
        @input="searchComics"
        placeholder="Digite o nome do quadrinho"
      />
    </div>

    <main class="container">
      <div class="comic-list" style="display: none;">
        <div v-for="comic in comics" :key="comic.id" class="comic-card" @click="showDetails(comic.id)">
          <img :src="getComicImage(comic)" :alt="comic.title" class="comic-image" />
          <h2>{{ comic.title }}</h2>
          <router-link :to="{ name: 'Details', params: { id: comic.id } }" class="details-link">
            Ver Detalhes
          </router-link>
        </div>
      </div>
      <div class="comic-list">
        <ComicCard v-for="comic in filteredComics" :key="comic.id" :comic="comic" />
      </div>
    </main>
  </div>
</template>

<script>
import marvelService from '@/services/marvelService';
import ComicCard from '@/components/ComicCard.vue';

export default {
  components: {
    ComicCard,
  },

  data() {
    return {
      searchTerm: '',
      comics: []
    };
  },

  computed: {
    filteredComics() {
      const normalizedSearch = this.searchTerm.toLowerCase().trim();
      return this.comics.filter(comic =>
        comic.title.toLowerCase().includes(normalizedSearch)
      );
    },
  },

  mounted() {
    this.fetchComics();
  },
  methods: {
    async fetchComics() {
      try {
        const response = await marvelService.getComics(this.searchTerm);
        this.comics = response.data.data.results;
        this.comics.forEach((item) => {
          item.quantity = 0
          item.price = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        });
      } catch (error) {
        console.error('Erro ao buscar quadrinhos:', error);
      }
    },
    async searchComics() {
      if (this.searchTerm) {
        try {
          const response = await marvelService.getComics(this.searchTerm);
          this.comics = response.data.data.results;
          this.comics.forEach((item) => {
            item.quantity = 0
            item.price = Math.floor(Math.random() * (6 - 1 + 1) + 1)
          });
        } catch (error) {
          console.error('Erro ao buscar quadrinhos:', error);
        }
      } else {
        this.fetchComics();
      }
      
    },
    showDetails(comicId) {
      this.$router.push(`/details/${comicId}`);
    },
    navigateToAbout() {
      this.$router.push('/about');
    },
    getComicImage(comic) {
      return `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #fff;
}

.home-header {
  background: url('https://source.unsplash.com/featured/?marvel,comics') center/cover no-repeat;
  color: #333;
  padding: 120px 20px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-content {
  max-width: 800px;
}

.home-header h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #e74c3c;
}

.home-header p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}
.search-bar {
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
  }
}

button {
  background-color: #2ecc71;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #27ae60; /* Cor alternativa ao passar o mouse sobre o botão */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.comic-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>
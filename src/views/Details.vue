<template>
  <div class="details">
    <router-link to="/" class="back-button">
      &#8592; Voltar para a lista de quadrinhos
    </router-link>

    <div v-if="comic" class="comic-details">
      <img :src="getComicImage(comic)" :alt="comic.title" class="comic-image" />
      <div class="comic-info">
        <h2>{{ comic.title }}</h2>
        <p v-if="comic.description">{{ comic.description }}</p>

        <div v-if="comic.creators" class="comic-creators">
          <h2>Criadores:</h2>
          <ul>
            <li v-for="creator in comic.creators.items" :key="creator.name">
              {{ creator.role }}: {{ creator.name }}
            </li>
          </ul>
        </div>

        <div v-if="comic.characters" class="comic-characters">
          <h2>Personagens:</h2>
          <ul>
            <li v-for="character in comic.characters.items" :key="character.name">
              {{ character.name }}
            </li>
          </ul>
        </div>

        <div v-if="comic.dates" class="comic-dates">
          <h2>Datas de Lançamento:</h2>
          <ul>
            <li v-for="date in comic.dates" :key="date.type">
              {{ date.type }}: {{ formatDate(date.date) }}
            </li>
          </ul>
        </div>

        <div class="comic-prices">
          <h2>Compre Agora:</h2>
          <div v-if="comic.prices.length === 0">Preço não disponível</div>
          <div v-else>
            <button v-for="price in comic.prices" :key="price.type" class="buy-button">
              {{ price.type }}: {{ formatCurrency(price.price) }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marvelService from '@/services/marvelService';

export default {
  data() {
    return {
      comic: null
    };
  },
  mounted() {
    this.fetchComicDetails();
  },
  methods: {
    async fetchComicDetails() {
      try {
        const comicId = this.$route.params.id;
        const response = await marvelService.getComicDetails(comicId);
        this.comic = response.data.data.results[0];
      } catch (error) {
        console.error('Erro ao buscar detalhes do quadrinho:', error);
      }
    },
    getComicImage(comic) {
      return `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    },
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    }
  }
};
</script>

<style lang="scss" scoped>
.details {
  padding: 20px;
}

.back-button {
  color: #3498db;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 20px;
  display: inline-block;
}

.comic-details {
  display: flex;
  align-items: flex-start;
}

.comic-image {
  width: 300px;
  height: auto;
  border-radius: 8px;
}

.comic-info {
  margin-left: 20px;
}

.comic-info h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.comic-info p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.comic-creators,
.comic-characters,
.comic-dates,
.comic-prices {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.comic-creators h2,
.comic-characters h2,
.comic-dates h2,
.comic-prices h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.comic-creators ul,
.comic-characters ul,
.comic-dates ul,
.comic-prices div {
  list-style-type: none;
  padding: 0;
}

.comic-creators ul,
.comic-characters ul,
.comic-dates ul,
.comic-prices ul{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.comic-creators li,
.comic-characters li,
.comic-dates li {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.buy-button {
  background-color: #27ae60;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buy-button:hover {
  background-color: #218c53;
}
</style>

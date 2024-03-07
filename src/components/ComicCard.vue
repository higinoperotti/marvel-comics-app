<template>
  <div class="comic-card">
    <img :src="getComicImage(comic)" :alt="comic.title" class="comic-image" />
    <div class="comic-details">
      <h3 :title="comic.title">{{ comic.title }}</h3>
      <p v-if="comic.price" style="font-size: 12px;">{{ comic.price }} USD</p>
      <router-link :to="{ name: 'Details', params: { id: comic.id } }" class="details-link">
        Ver Detalhes
      </router-link>
      <button @click="addToCart" class="add-to-cart-button">Adicionar ao Carrinho</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comic: {
      type: Object,
      required: true,
    },
  },
  computed: {
    comicList() {
      return this.$store.getters.comicsList;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    getComicImage(comic) {
      return `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    },
    async addToCart() {
      this.$store.dispatch('addComicToCart', this.comic);
    },
  },
};
</script>

<style lang="scss" scoped>
.comic-card {
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}


.comic-card {
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.comic-card:hover {
  transform: scale(1.1);
}

.comic-image {
  width: 100%;
  height: 300px;
  border-radius: 8px;
}

.comic-card h2 {
  margin-top: 10px;
  font-size: 1.2rem;
}

.comic-details {
  position: relative;
  padding: 10px;

  h3 {
    position: relative;
    max-width: 185px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #555;
  }

  .details-link {
    position: relative;
    display: block;
    background-color: #3498db;
    color: #fff;
    padding: 5px 10px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 0.9rem;
    margin: 5px 0;
    transition: background-color 0.3s ease;
    width: 170px;

    &:hover {
      background-color: #2c81ba;
    }
  }
  .add-to-cart-button {
    background-color: #27ae60;
    width: 100%;
    color: #fff;
    padding: 5px 10px;
    border: none;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #219349;
    }
  }
}
</style>

<template>
  <div>BBBB
    <div v-for="comic in comics" :key="comic.id" @click="showDetails(comic.id)">
      {{ comic.title }} ggggg
    </div>
  </div>
</template>

<script>
export default {
  props: ['comics'],
  methods: {
    showDetails(comicId) {
      this.$router.push(`/details/${comicId}`);
    }
  }
};
</script>

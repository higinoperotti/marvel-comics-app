import axios from 'axios';

const apiKey = '582c0c77412d137f45750b35b65df634';
const baseUrl = 'https://gateway.marvel.com/v1/public';
const ts = '1'
const hash = '276376e86a6ca4ffccef40fc33e8df6a'

export default {
  searchComics: (searchTerm) => axios.get(`${baseUrl}/comics?apikey=${apiKey}&ts=${ts}&hash=${hash}&limit=100&titleStartsWith=${searchTerm}`),
  getComics: () => axios.get(`${baseUrl}/comics?apikey=${apiKey}&ts=${ts}&hash=${hash}&limit=100`),
  getComicDetails: (comicId) => axios.get(`${baseUrl}/comics?apikey=${apiKey}&ts=${ts}&hash=${hash}&id=${comicId}`)
};
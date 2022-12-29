// import React from 'react';
import axios from 'axios';

const galleryApiService = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '31497264-8254871d687ec8d5b65884355',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export async function fetchGallery(searchQuery, page = 1) {
  // console.log(searchQuery);
  try {
    const { data } = await galleryApiService.get('', {
      params: { q: searchQuery, page },
    });
    return data.hits;
  } catch (error) {
    return error.message;
  }
}

// export class GalleryApiService {
//   constructor() {
//     this.page = 1;
//     this.searchQuery = '';
//     this.url = 'https://pixabay.com/api/';
//     this.key = '31497264-8254871d687ec8d5b65884355';
//   }

//   async fetchGallery() {
//     try {
//       const { data } = await axios.get(
//         `${this.url}?q=${this.searchQuery}&page=${this.page}&key=${this.key}&image_type=photo&orientation=horizontal&per_page=12`
//       );
//       return data.hits;
//     } catch (error) {
//       return error.message;
//     }
//   }

//   incrementPage() {
//     this.page += 1;
//   }

// get query() {
//   return this.searchQuery;
// }

// set query(newQuery) {
//   this.searchQuery = newQuery;
// }
// }

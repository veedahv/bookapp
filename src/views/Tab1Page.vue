<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="">
      <!-- <ion-content :fullscreen="false"> -->
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header> -->

      <div class="px-4 py-5">
        <div class="my-5">
          <div class="flex my-3">
            <ion-title class="px-0 font-medium text-base">Categories</ion-title>

            <a href="http://" class="font-medium text-sm text-white">
              See more
            </a>
          </div>

          <div class="flex gap-3 my-3 overflow-scroll">
            <ion-button color="light"> Art </ion-button>
            <ion-button color="light"> Business </ion-button>
            <ion-button color="light"> Comedy </ion-button>
            <ion-button color="light"> Drama </ion-button>
            <ion-button color="light"> Sciences </ion-button>
            <ion-button color="light"> Culture </ion-button>
            <ion-button color="light"> Education </ion-button>
            <ion-button color="light"> History </ion-button>
          </div>
        </div>
        <div class="my-5">
          <div class="flex my-3">
            <ion-title class="px-0 font-medium text-base">Recommended For You</ion-title>

            <a href="http://" class="font-medium text-sm text-white">
              See more
            </a>
          </div>
          <div class="flex gap-3 my-3 overflow-scroll">
            <div v-for="book in recommendedBooks" :key="book.id">
          <img :src="book.volumeInfo.imageLinks.thumbnail" class="h-60 w-auto block max-w-max">
               </div>
          </div>
        </div>
        <div class="my-5">
          <div class="flex my-3">
            <ion-title class="px-0 font-medium text-base">Best Seller</ion-title>

            <a href="http://" class="font-medium text-sm text-white">
              See more
            </a>
          </div>

          <div class="flex gap-3 my-3 overflow-scroll">
            <best-seller-card :book="book" v-for="book in bestBooks" :key="book.id"></best-seller-card>
          </div>
        </div>
        <div class="my-5">
          <div class="flex my-3">
            <ion-title class="px-0 font-medium text-base">New Releases</ion-title>

            <a href="http://" class="font-medium text-sm text-white">
              See more
            </a>
          </div>

          <div class="flex gap-3 my-3 overflow-scroll">
            <book-card :book="book" v-for="book in newBooks" :key="book.id"></book-card>
          </div>
        </div>
        <div class="my-5">
          <div class="flex my-3">
            <ion-title class="px-0 font-medium text-base">Trending Now</ion-title>

            <a href="http://" class="font-medium text-sm text-white">
              See more
            </a>
          </div>

          <div class="flex gap-3 my-3 overflow-scroll">
            <book-card :book="book" v-for="book in trendingBooks" :key="book.id"></book-card>
          </div>
        </div>

        <!-- <ExploreContainer name="Tab 1 page" /> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  // IonImg
} from "@ionic/vue";
import BestSellerCard from "@/components/BestSellerCard.vue";
import BookCard from "@/components/BookCard.vue";
// import ExploreContainer from "@/components/ExploreContainer.vue";

export default defineComponent({
  name: "Tab1Page",
  components: {
    // ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    BestSellerCard,
    BookCard
    // IonImg
  },
  data() {
    return {
      recommendedBooks: [],
      trendingBooks: [],
      newBooks: [],
      bestBooks: [],
      // getRecommededBooks: [],
    }
  },
  methods: {
    async getBooks (book: any) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${book}`
  );
  const data = await response.json();
  return data;
},

// const extractThumbnail = ({ imageLinks }) => {
//   const DEFAULT_THUMBNAIL = "icons/logo.svg";
//   if (!imageLinks || !imageLinks.thumbnail) {
//     return DEFAULT_THUMBNAIL;
//   }
//   return imageLinks.thumbnail.replace("http://", "https://");
// },
async drawChartBook (subject: any, startIndex = 0) {
  // let cbookContainer = document.querySelector(`.${subject}`);
  // cbookContainer.innerHTML = `<div class='prompt'><div class="loader"></div></div>`;
  const cdata = await this.getBooks(
    `subject:${subject}&startIndex=${startIndex}&maxResults=6`
  );
  console.log(cdata);
  // if (cdata.error) {
  //   cbookContainer.innerHTML = `<div class='prompt'>ツ Limit exceeded! Try after some time</div>`;
  // } else if (cdata.totalItems == 0) {
  //   cbookContainer.innerHTML = `<div class='prompt'>ツ No results, try a different term!</div>`;
  // } else if (cdata.totalItems == undefined) {
  //   cbookContainer.innerHTML = `<div class='prompt'>ツ Network problem!</div>`;
  // } else if (!cdata.items || cdata.items.length == 0) {
  //   cbookContainer.innerHTML = `<div class='prompt'>ツ There is no more result!</div>`;
  // } else {
  //   cbookContainer.innerHTML = cdata.items;
  //   cbookContainer.innerHTML = cdata.items
  //     .map(
  //       ({ volumeInfo }) =>
  //         `<div class='book' style='background: linear-gradient(` +
  //         getRandomColor() +
  //         `, rgba(0, 0, 0, 0));'><a href='${volumeInfo.previewLink}' target='_blank'><img class='thumbnail' src='` +
  //         extractThumbnail(volumeInfo) +
  //         `' alt='cover'></a><div class='book-info'><h3 class='book-title'><a href='${volumeInfo.previewLink}' target='_blank'>${volumeInfo.title}</a></h3><div class='book-authors' onclick='updateFilter(this,"author");'>${volumeInfo.authors}</div><div class='info' onclick='updateFilter(this,"subject");' style='background-color: ` +
  //         getRandomColor() +
  //         `;'>` +
  //         (volumeInfo.categories === undefined
  //           ? "Others"
  //           : volumeInfo.categories) +
  //         `</div></div></div>`
  //     )
  //     .join("");
  // }
},
async getRecommendedBooks (subject: any, startIndex = 0) {
  const cdata = await this.getBooks(
    `subject:${subject}&startIndex=${startIndex}&maxResults=6`
  );
  this.recommendedBooks = cdata.items;
  console.log(this.recommendedBooks);
},
async getTrendingBooks (subject: any, startIndex = 0) {
  const cdata = await this.getBooks(
    `subject:${subject}&startIndex=${startIndex}&maxResults=6`
  );
  this.trendingBooks = cdata.items;
  console.log(this.trendingBooks);
},
async getNewBooks (subject: any, startIndex = 0) {
  const cdata = await this.getBooks(
    `subject:${subject}&startIndex=${startIndex}&maxResults=6`
  );
  this.newBooks = cdata.items;
  console.log(this.newBooks);
},
async getBestBooks (subject: any, startIndex = 0) {
  const cdata = await this.getBooks(
    `subject:${subject}&startIndex=${startIndex}&maxResults=6`
  );
  this.bestBooks = cdata.items;
  console.log(this.bestBooks);
}
  },
  created() {
    
  this.drawChartBook("romance");
  this.getRecommendedBooks("romance");
  this.getNewBooks("inspirational");
  // this.getTrendingBooks("fantasy");
  this.getTrendingBooks("fiction");
  this.getBestBooks("love");
  // this.getBestBooks("love");
  // this.getBestBooks("authors");
  // drawChartBook("love");
  // drawChartBook("feminism");
  // drawChartBook("inspirational");
  // drawChartBook("authors");
  // drawChartBook("fiction");
  // drawChartBook("poetry");
  // drawChartBook("fantasy");
  },
});
</script>

<style>
/* .w-auto img {
  width: auto;
} */
img {
  width: auto;
}
</style>

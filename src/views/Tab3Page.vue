<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="px-4 py-5">
        <div class="my-5">
          <div class="flex my-3">
            <ion-title class="px-0 font-semibold text-xl"> Explore </ion-title>

            <!-- <a href="http://" class="font-medium text-sm text-white">
              See more
            </a> -->
          </div>

          <!-- <input type="text" name="" class=""> -->

          <div class="bg-white px-4 rounded-md overflow-hidden">
            <ion-input
              placeholder="Search Books or Author..."
              class="bg-white text-dark"
              color="dark"
              v-model="search"
            ></ion-input>
          </div>
        </div>
        <div class="my-5">
          <div class="flex my-3">
            <ion-title class="px-0 font-medium text-base">
              Recommended Categories
            </ion-title>

            <a href="http://" class="font-medium text-sm text-white">
              See more
            </a>
          </div>

          <div class="grid gap-3 my-3 grid-cols-1">
            <ion-button color="light"> Art </ion-button>
            <ion-button color="light"> Business </ion-button>
            <ion-button color="light"> Comedy </ion-button>
            <ion-button color="light"> Drama </ion-button>
          </div>
        </div>
        <div class="my-5">
          <div class="flex my-3">
            <ion-title class="px-0 font-medium text-base">
              Latest Search
            </ion-title>
          </div>

          <div class="grid gap-3 my-3 grid-cols-1">
            <library-card
              :book="book"
              v-for="book in newBooks"
              :key="book.id"
            ></library-card>
            <!-- <book-card :book="book" v-for="book in newBooks" :key="book.id"></book-card>
            <book-card :book="book" v-for="book in newBooks" :key="book.id"></book-card>
            <book-card :book="book" v-for="book in newBooks" :key="book.id"></book-card>
            <book-card :book="book" v-for="book in newBooks" :key="book.id"></book-card>
            <book-card :book="book" v-for="book in newBooks" :key="book.id"></book-card> -->
          </div>
        </div>
        <div class="my-5">
          <div class="flex my-3">
            <ion-title class="px-0 font-medium text-base">
              Search Results
            </ion-title>
          </div>

          <div class="grid gap-3 my-3 grid-cols-2">
            <library-card
              :book="book"
              v-for="book in newBooks"
              :key="book.id"
            ></library-card>
            <!-- <book-card :book="book" v-for="book in newBooks" :key="book.id"></book-card> -->
            <!-- <book-card :book="book" v-for="book in newBooks" :key="book.id"></book-card>
            <book-card :book="book" v-for="book in newBooks" :key="book.id"></book-card>
            <book-card :book="book" v-for="book in newBooks" :key="book.id"></book-card>
            <book-card :book="book" v-for="book in newBooks" :key="book.id"></book-card> -->
          </div>
        </div>
      </div>

      <!-- <ExploreContainer name="Tab 3 page" /> -->
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
} from "@ionic/vue";
// import ExploreContainer from "@/components/ExploreContainer.vue";
import LibraryCard from "@/components/LibraryCard.vue";

export default defineComponent({
  name: "Tab3Page",
  components: {
    // ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    LibraryCard,
  },
  data() {
    return {
      recommendedBooks: [],
      trendingBooks: [],
      newBooks: [],
      bestBooks: [],
      search: "",
      // getRecommededBooks: [],
    };
  },
  methods: {
    async getBooks(book: any) {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${book}`
      );
      const data = await response.json();
      return data;
    },

    async drawChartBook(subject: any, startIndex = 0) {
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
    async getRecommendedBooks(subject: any, startIndex = 0) {
      const cdata = await this.getBooks(
        `subject:${subject}&startIndex=${startIndex}&maxResults=6`
      );
      this.recommendedBooks = cdata.items;
      console.log(this.recommendedBooks);
    },
    async getTrendingBooks(subject: any, startIndex = 0) {
      const cdata = await this.getBooks(
        `subject:${subject}&startIndex=${startIndex}&maxResults=6`
      );
      this.trendingBooks = cdata.items;
      console.log(this.trendingBooks);
    },
    async getNewBooks(subject: any, startIndex = 0) {
      const cdata = await this.getBooks(
        `subject:${subject}&startIndex=${startIndex}&maxResults=6`
      );
      this.newBooks = cdata.items;
      console.log(this.newBooks);
    },
    async getBestBooks(subject: any, startIndex = 0) {
      const cdata = await this.getBooks(
        `subject:${subject}&startIndex=${startIndex}&maxResults=6`
      );
      this.bestBooks = cdata.items;
      console.log(this.bestBooks);
    },
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

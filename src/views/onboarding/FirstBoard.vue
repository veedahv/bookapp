<template>
  <ion-page>
    <ion-content :fullscreen="true">
  <ion-slides pager="true" :options="slideOpts">
    <ion-slide>
      <div class="px-4 py-5 text-center relative">
        <!-- <div class="px-4 py-5 text-center bg-url"> -->
        <div class="absolute top-0 left-0 w-1/2">
          <ion-img
            :src="require('@/assets/onboarding-bg.png')"
            class="w-full"
          ></ion-img>
        </div>
        <div class="my-5">
          <div class="my-3">
            <div class="">
              <ion-img
                :src="require('@/assets/firstboard.png')"
                class="w-full"
              ></ion-img>
            </div>
      <!-- <h1>Slide 1</h1> -->
            <ion-title class="px-0 font-semibold text-base">
              Read Offline
            </ion-title>
            <p class="text-sm font-normal">
              To read books when you’re not connected to the internet, you’ll
              need to download them to your device.
            </p>

            <!-- <a href="http://" class="font-medium text-sm text-white">
              See more
            </a> -->
          </div>

        </div>
      </div>
    </ion-slide>
    <ion-slide>
      <h1>Slide 2</h1>
    </ion-slide>
    <ion-slide>
      <h1>Slide 3</h1>
    </ion-slide>
  </ion-slides>
          <div class="flex justify-center gap-3 my-3">
            <ion-button
              fill="clear"
              class="
                w-3
                h-3
                rounded-full
                overflow-hidden
                bg-[#4838D1] bg-opacity-50
              "
            >
              &nbsp;
            </ion-button>
            <ion-button
              fill="clear"
              class="
                w-3
                h-3
                rounded-full
                overflow-hidden
                bg-[#1C1C4D] bg-opacity-90
              "
            >
              &nbsp;
            </ion-button>
            <ion-button
              fill="clear"
              class="
                w-3
                h-3
                rounded-full
                overflow-hidden
                bg-[#1C1C4D] bg-opacity-90
              "
            >
              &nbsp;
            </ion-button>
          </div>
          <div class="flex justify-center gap-3 my-3">
            <!-- <ion-button color="light" class="w-3 h-3 p-0 rounded-full overflow-hidden"> &nbsp; </ion-button> -->
            <ion-button fill="clear" class="text-white flex-1">
              Skip
            </ion-button>
            <ion-button
              fill="clear"
              class="
                text-sm text-white
                bg-[#4838D1] bg-opacity-50
                rounded-md
                flex-1
              "
              @click="slides.value.slideNext()"
            >
              Next
            </ion-button>
          </div>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonPage,
  //   IonHeader,
  //   IonToolbar,
  IonTitle,
  IonButton,
  IonContent,
  IonImg,
  IonSlides,
  IonSlide,
} from "@ionic/vue";
//   import BookCard from "@/components/BookCard.vue";
// import ExploreContainer from "@/components/ExploreContainer.vue";

export default defineComponent({
  name: "FirstBoard",
  components: {
    // ExploreContainer,
    // IonHeader,
    // IonToolbar,
    IonTitle,
    IonSlides,
    IonSlide,
    IonButton,
    IonContent,
    IonPage,
    IonImg,
    // BookCard
  },
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
    };
    const slides = ref();
      const setSwiperInstance = (swiper: any) => {
        slides.value = swiper;
        console.log(slides)
      }
    return { slideOpts, setSwiperInstance };
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
  methods: {},
});
</script>

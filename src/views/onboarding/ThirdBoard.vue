<template>
  <ion-page>
    <ion-content :fullscreen="true" class="relative">
      <div class="absolute top-0 left-0 w-1/2">
        <ion-img
          :src="require('@/assets/onboarding-bg.png')"
          class="w-full"
        ></ion-img>
      </div>
      <ion-grid>
        <ion-row class="ion-align-items-end h-screen">
          <ion-col size="12" size-sm>
            <div class="max-w-xs mx-auto">
              <swiper
                :modules="modules"
                :keyboard="true"
                :pagination="{ clickable: true }"
                @slideChangeTransitionStart="slideWillChange"
                @slideChangeTransitionEnd="slideDidChange"
                @swiper="swiperInit"
              >
                <swiper-slide>
                  <div class="px-4 py-5 text-center relative">
                    <div class="my-5">
                      <div class="my-3">
                        <div class="">
                          <ion-img
                            :src="require('@/assets/firstboard.png')"
                            class="w-full"
                          ></ion-img>
                        </div>
                        <!-- <h1>Slide 1</h1> -->
                        <ion-title class="px-0 my-2 font-semibold text-base">
                          Read Offline
                        </ion-title>
                        <p class="text-sm font-normal">
                          To read books when you’re not connected to the
                          internet, you’ll need to download them to your device.
                        </p>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="px-4 py-5 text-center relative">
                    <div class="my-5">
                      <div class="my-3">
                        <div class="">
                          <ion-img
                            :src="require('@/assets/secondboard.png')"
                            class="w-full"
                          ></ion-img>
                        </div>
                        <!-- <h1>Slide 1</h1> -->
                        <ion-title class="px-0 my-2 font-semibold text-base">
                          Search and Read
                        </ion-title>
                        <p class="text-sm font-normal">
                          Using search buttons, quickly and esily find the book you need. .
                        </p>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="px-4 py-5 text-center relative">
                    <div class="my-5">
                      <div class="my-3">
                        <div class="">
                          <ion-img
                            :src="require('@/assets/thirdboard.png')"
                            class="w-full"
                          ></ion-img>
                        </div>
                        <!-- <h1>Slide 1</h1> -->
                        <ion-title class="px-0 my-2 font-semibold text-base">
                          Create a personal library
                        </ion-title>
                        <p class="text-sm font-normal">
                          All the books that you download will remian forever in your personal library, 
                          whch can be accessed from any device.
                        </p>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <!-- <div class="flex justify-center gap-3 my-3"> -->
                <!-- <ion-button
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
      </div> -->
              </swiper>
              <div class="flex justify-center gap-3 my-3" v-if="lastSlide">
                <ion-button
                  fill="clear"
                  class="
                    text-sm text-white
                    bg-[#4838D1] bg-opacity-50
                    rounded-md
                    flex-1
                  "
                  @click="slidesRef.value.slideNext()"
                >
                  Lets Get Started
                </ion-button>
              </div>
              <div class="flex justify-center gap-3 my-3" v-else>
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
                  @click="slidesRef.slideNext()"
                >
                  <!-- @click="slidesRef.value.slideNext()" -->
                  Next
                </ion-button>
              </div>
            </div>
            <!-- ion-col [size="12"] [size-sm] -->
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  //   IonHeader,
  IonPage,
  IonTitle,
  //   IonToolbar,
  IonicSlides,
  IonButton,
  IonImg,
  IonCol,
  IonGrid,
  IonRow,
  // IonSlides,
  // IonSlide,
  //   IonToolbar,
} from "@ionic/vue";

import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, Pagination } from "swiper";
// import { Keyboard, Pagination, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "@ionic/vue/css/ionic-swiper.css";

export default defineComponent({
  name: "ThirdBoard",
  components: {
    IonContent,
    // IonHeader,
    IonPage,
    IonTitle,
    // IonToolbar,
    Swiper,
    SwiperSlide,
    // IonSlides,
    // IonSlide,
    IonButton,
    IonImg,
    IonCol,
    IonGrid,
    IonRow,
  },
  data() {
    return {
      //   lastSlide: false
      // slideSetup: {}
    };
  },
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    // const slideOpts = {
    //   initialSlide: 0,
    //   speed: 400,
    // };
    // return { slideOpts, setSwiperInstance };
    const slidesRef = ref();
    const lastSlide = ref(false);
    // const lastSlide = {
    //     isEnd: false
    // };

    const swiperInit = (swiper: any) => {
      slidesRef.value = swiper;
      console.log(slidesRef);
      console.log(slidesRef.value);
    };

    const slideWillChange = () => {
      console.log("Slide will change");
    };

    const slideDidChange = () => {
      console.log("Slide did change");

      if (!slidesRef.value) return;

      (lastSlide.value = slidesRef.value.isEnd),
        //   lastSlide.isEnd = slidesRef.value.isEnd,
        console.table({
          isBeginning: slidesRef.value.isBeginning,
          isEnd: slidesRef.value.isEnd,
        });
      console.log(lastSlide);
    };

    return {
      slideWillChange,
      slideDidChange,
      swiperInit,
      slidesRef,
      lastSlide,
      modules: [Keyboard, Pagination, IonicSlides],
      //   modules: [Keyboard, Pagination, Scrollbar, IonicSlides],
    };
  },
  //   mounted() {
  //     this.slideSetup = this.slidesRef;
  //   },
  methods: {},
});
</script>

<style scoped>
.swiper {
  /* height: 300px; */

  /* --bullet-background: rgb(var(--ion-color-primary-rgb), 0.5);
  --bullet-background-active: var(--ion-color-primary); */
  --bullet-background: rgba(8, 28, 77, 0.9);
  --bullet-background-active: rgba(72, 56, 209, 0.9);
  --scroll-bar-background: var(--ion-color-light);
}
</style>
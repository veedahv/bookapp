<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <div class="px-8">

      <ion-grid>
        <ion-row class="ion-align-items-end">
          <ion-col size="12" size-sm>
            <div class="max-w-xs mx-auto">
                  <div class="px-4 py-5 text-center relative">
                    <div class="my-5">
                      <div class="my-3">
                        <div class="">
                          <ion-img
                            :src="require('@/assets/firstboard.png')"
                            class="w-4"
                          ></ion-img>
                        </div>
                        <!-- <h1>Slide 1</h1> -->
                        <ion-title class="px-0 my-2 font-bold text-3xl">
                          Welcome Back!
                        </ion-title>
                        <p class="text-[#4838D1] text-sm font-normal">
                          Fill your details to log in
                        </p>
                      </div>
                    </div>
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
                >
                  <!-- @click="slidesRef.slideNext()" -->
                  <!-- @click="slidesRef.value.slideNext()" -->
                  Next
                </ion-button>
              </div>
            </div>
            <!-- ion-col [size="12"] [size-sm] -->
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- Default Input -->
      <ion-input></ion-input>

      <!-- Input with value -->
      <ion-input value="custom"></ion-input>

      <!-- Input with placeholder -->
          <div class="flex items-center bg-white px-4 rounded-md overflow-hidden">
        <ion-label color="primary">Default</ion-label>
            <ion-input
              placeholder="Search Books or Author..."
              class="bg-white text-dark"
              color="dark"
            ></ion-input>
          </div>
      <ion-input placeholder="Enter Input"></ion-input>

      <!-- Input with clear button when there is a value -->
      <ion-input clear-input value="clear me"></ion-input>

      <!-- Number type input -->
      <ion-input type="number" value="333"></ion-input>

      <!-- Disabled input -->
      <ion-input value="Disabled" disabled></ion-input>

      <!-- Readonly input -->
      <ion-input value="Readonly" readonly></ion-input>

      <!-- Inputs with labels -->
      <ion-item>
        <ion-label>Default Label</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Floating Label</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="fixed">Fixed Label</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Stacked Label</ion-label>
        <ion-input></ion-input>
      </ion-item>
        </div>
    </ion-content>
  </ion-page>
</template>







<script lang="ts">
import {
  IonContent,
  //   IonHeader,
  IonPage,
  IonTitle,
  IonButton,
  IonImg,
  IonCol,
  IonGrid,
  IonRow,
  IonLabel,
  IonInput,
  IonItem,
  //   IonToolbar,
} from "@ionic/vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "OnboardingPage",
  components: {
    IonContent,
    // IonHeader,
    // IonToolbar,
    IonPage,
    IonTitle,
    IonButton,
    IonImg,
    IonCol,
    IonGrid,
    IonRow,
    IonLabel,
    IonInput,
    IonItem,
  },
  data() {
    return {
      //   lastSlide: false
      // slideSetup: {}
    };
  },
  setup() {
    const slidesRef = ref();
    const lastSlide = ref(false);

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
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="px-8">
        <ion-grid>
          <ion-row class="ion-align-items-end">
            <ion-col size="12" size-sm>
              <div class="max-w-xs mx-auto">
                <div class="py-5 relative">
                  <div class="my-5">
                    <div class="my-3">
                      <ion-title class="px-0 my-2 font-bold text-3xl">
                        Welcome Back!
                      </ion-title>
                      <p class="text-[#4838D1] text-sm font-normal">
                        Fill your details to log in
                      </p>
                    </div>
                  </div>
                </div>
                <form class="form" @submit.prevent="login">
                  <div
                    class="
                      bg-white
                      px-4
                      my-4
                      gap-3
                      rounded-md
                      overflow-hidden
                      flex
                      items-center
                      flex-nowrap
                      input-group
                    "
                  >
                    <label for="name">
                      <ion-img
                        :src="require('@/assets/auth/user.svg')"
                        class="w-4"
                      ></ion-img>
                    </label>
                    <input
                      placeholder="Name"
                      class="
                        bg-white
                        text-dark
                        w-full
                        flex-auto
                        outline-none
                        py-3
                      "
                      color="dark"
                      v-model="name"
                      id="name"
                    />
                  </div>
                  <div
                    class="
                      bg-white
                      px-4
                      my-4
                      gap-3
                      rounded-md
                      overflow-hidden
                      flex
                      items-center
                      flex-nowrap
                      input-group
                    "
                  >
                    <label for="email">
                      <ion-img
                        :src="require('@/assets/auth/mail.svg')"
                        class="w-4"
                      ></ion-img>
                    </label>
                    <input
                      class="
                        bg-white
                        text-dark
                        w-full
                        flex-auto
                        outline-none
                        py-3
                      "
                      color="dark"
                      v-model="email"
                      placeholder="Email Address"
                      id="email"
                    />
                  </div>
                  <div
                    class="
                      bg-white
                      px-4
                      my-4
                      gap-3
                      rounded-md
                      overflow-hidden
                      flex
                      items-center
                      flex-nowrap
                      input-group
                    "
                  >
                    <label for="password">
                      <ion-img
                        :src="require('@/assets/auth/lock.svg')"
                        class="w-4"
                      ></ion-img>
                    </label>
                    <input
                      placeholder="Password"
                      class="
                        bg-white
                        text-dark
                        w-full
                        flex-auto
                        outline-none
                        py-3
                      "
                      color="dark"
                      v-model="password"
                      id="password"
                    />
                    <button class="">
                      <ion-img
                        :src="require('@/assets/auth/eye-slash.svg')"
                        class="w-4"
                      ></ion-img>
                      <!-- @click="slidesRef.slideNext()" -->
                      <!-- @click="slidesRef.value.slideNext()" -->
                      <!-- Next -->
                    </button>
                  </div>
                  <div class="">
                    <a href="" class=""> Forget password? </a>
                  </div>
                  <div class="flex justify-center gap-3 my-3">
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
                      Login
                    </ion-button>
                  </div>
                </form>
                <div class="flex justify-center gap-3 my-3">
                  <!-- <ion-button color="light" class="w-3 h-3 p-0 rounded-full overflow-hidden"> &nbsp; </ion-button> -->
                  <ion-button
                    fill="clear"
                    class="bg-white flex-1 rounded-lg overflow-hidden"
                  >
                    Skip
                  </ion-button>
                  <ion-button fill="clear" class="bg-white flex-1">
                    Skip
                  </ion-button>
                  <ion-button fill="clear" class="bg-white flex-1">
                    Skip
                  </ion-button>
                  <!-- <ion-button
                    fill="clear"
                    class="
                      text-sm text-white
                      bg-[#4838D1] bg-opacity-50
                      rounded-md
                      flex-1
                    "
                  > -->
                  <!-- @click="slidesRef.slideNext()" -->
                  <!-- @click="slidesRef.value.slideNext()" -->
                  <!-- Next
                  </ion-button> -->
                </div>
                <div class="">
                  <p class="">
                    Don't have an account?
                    <a href="" class=""> Register </a>
                  </p>
                </div>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
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
  // IonLabel,
  // IonInput,
  // IonItem,
  //   IonToolbar,
} from "@ionic/vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SignUpPage",
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
    // IonLabel,
    // IonInput,
    // IonItem,
  },
  data() {
    return {
      //   lastSlide: false
      // slideSetup: {}
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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
    mounted() {
      console.log(this.$router.currentRoute);
  //     this.slideSetup = this.slidesRef;
    },
  methods: {
    login() {
      console.log("email: ", this.email);
    },
  },
});
</script>

<style scoped>
</style>
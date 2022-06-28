<template>
  <ion-page>
    <ion-content>
      <!-- <swiper :modules="modules" :autoplay="true" :keyboard="true" :pagination="true" :scrollbar="true" :zoom="true"> -->
      <swiper @swiper="setSwiperInstance" :modules="modules" :keyboard="true" :pagination="true" :scrollbar="true" :zoom="true">
        <swiper-slide>
            <div class="my-10">
            Slide 1

            <p class="text-sm font-normal">
              To read books when you’re not connected to the internet, you’ll
              need to download them to your device.
            </p>
            </div>
            </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
  import { defineComponent, ref } from 'vue';
//   import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
  import { Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

  import 'swiper/css';
//   import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
    const slides = ref();
      const setSwiperInstance = (swiper) => {
        slides.value = swiper;
        console.log(slides.value)
        console.log(slides.value.activeIndex )
      }
      return {
        // modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides],
        modules: [Keyboard, Pagination, Scrollbar, Zoom, IonicSlides],
        setSwiperInstance
      };
    },
  });
</script>
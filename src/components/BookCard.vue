<template>
  <div class="flex">
    <ion-card class="m-0 p-0">
      <div class="my-3">
          <img :src="book.volumeInfo.imageLinks.thumbnail" class="h-60 w-auto block max-w-max" v-if="book.volumeInfo.imageLinks.thumbnail"> 
        <div class="py-3">
          <div>
            <ion-title class="px-0 font-medium text-base max-w-[10rem]">
              {{ book.volumeInfo.title }}
            </ion-title>
            <small class="text-sm my-2">
              {{ book.volumeInfo.authors[0] }}
            </small>
          </div>
        </div>
      </div>
    </ion-card>
  </div>
</template>






<script lang="ts">
import { defineComponent } from "vue";
import {
  //   IonPage,
  //   IonHeader,
  //   IonToolbar,
  IonTitle,
  //   IonContent,
  //   IonButton,
  //   IonIcon,
  IonCard,
//   IonImg,
} from "@ionic/vue";
// import { star, starOutline } from "ionicons/icons";
// import ExploreContainer from "@/components/ExploreContainer.vue";

export default defineComponent({
  name: "BookCard",
  components: {
    // ExploreContainer,
    // IonHeader,
    // IonToolbar,
    IonTitle,
    // IonIcon,
    // IonContent,
    // IonPage,
    // IonButton,
    IonCard,
    // IonImg,
  },
//   setup() {
//     return {
//       star,
//       starOutline,
//     };
//   },
  props: ["book"],
  //   data() {
  //     return {
  //       recommendedBooks: [],
  //       // getRecommededBooks: [],
  //     }
  //   },
  created() {
    console.log(this.book);
  },
});
</script>


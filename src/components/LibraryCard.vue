<template>
  <div class="flex">
    <ion-card color="light m-0 px-3">
      <div class="flex gap-3 my-3 overflow-scroll">
        <ion-img
          :src="book.volumeInfo.imageLinks.thumbnail"
          class="h-32 w-28 object-cover"
        ></ion-img>
        <div class="flex flex-col justify-between py-3">
          <div>
            <ion-title class="px-0 font-medium text-lg max-w-[10rem]">
              {{ book.volumeInfo.title }}
            </ion-title>
            <!-- <small
              class="text-sm my-2"
              v-for="author in book.volumeInfo.authors"
              :key="author"
            >
              {{ author }}
            </small> -->
            <small
              class="text-sm my-2"
            >
              {{ book.volumeInfo.authors[0] }}
            </small>
          </div>
          <!-- <div class="flex gap-2 mt-8">
            <ion-icon
              :icon="star"
              class="text-amber-600 text-lg"
              v-for="n in book.volumeInfo.averageRating | 0"
              :key="n + 'no-rating'"
            ></ion-icon>
            <ion-icon
              :icon="starOutline"
              class="text-amber-600 text-lg"
              v-for="n in 5 - (book.volumeInfo.averageRating | 0)"
              :key="n + 'rating'"
            ></ion-icon>
          </div> -->
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
  IonImg,
} from "@ionic/vue";
import { star, starOutline } from "ionicons/icons";
// import ExploreContainer from "@/components/ExploreContainer.vue";

export default defineComponent({
  name: "LibraryCard",
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
    IonImg,
  },
  setup() {
    return {
      star,
      starOutline,
    };
  },
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


<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
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


      <!-- <ExploreContainer name="Tab 2 page" /> -->
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
  IonButton,
  IonContent,
} from "@ionic/vue";
  import BookCard from "@/components/BookCard.vue";
// import ExploreContainer from "@/components/ExploreContainer.vue";

export default defineComponent({
  name: "Tab2Page",
  components: {
    // ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonContent,
    IonPage,
    BookCard
  }, 
  data() {
    return {
      recommendedBooks: [],
      trendingBooks: [],
      newBooks: [],
      bestBooks: [],
      search: ""
      // getRecommededBooks: [],
    }
  },
  methods: {

  },
  created() {
    
  },
});
</script>

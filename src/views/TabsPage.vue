<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- <ion-title>Tab 1</ion-title> -->
        <div class="px-4 py-4">
          <div class="flex justify-between items-center w-full">

        <div class="flex gap-1">
          <ion-img :src="require('@/assets/logo.png')" class="w-8"></ion-img>
          <ion-img :src="require('@/assets/logo-name.png')"></ion-img>
        </div>
        <button class="">
          <ion-img :src="require('@/assets/setting.png')" class=""></ion-img>
        </button>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <!-- <ion-icon :icon="triangle" /> -->
          <ion-img :src="require('@/assets/icons/bold-home.png')" v-if="router.currentRoute.value.fullPath.includes('tab1')"></ion-img>
          <ion-img :src="require('@/assets/icons/home.png')" v-else></ion-img>
          <ion-label class="text-white" :class="(router.currentRoute.value.fullPath.includes('tab1')) ? 'font-bold' : ''">Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <!-- <ion-icon :icon="ellipse" /> -->
          <ion-img :src="require('@/assets/icons/bold-search.png')" v-if="router.currentRoute.value.fullPath.includes('tab2')"></ion-img>
          <ion-img :src="require('@/assets/icons/search.png')" v-else></ion-img>
          <ion-label class="text-white" :class="(router.currentRoute.value.fullPath.includes('tab2')) ? 'font-bold' : ''">Explore</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <!-- <ion-icon :icon="square" /> -->
          <!-- <ion-thumbnail slot="start"> -->
          <ion-img :src="require('@/assets/icons/bold-document.png')" v-if="router.currentRoute.value.fullPath.includes('tab3')"></ion-img>
          <ion-img :src="require('@/assets/icons/document.png')" v-else></ion-img>
          <!-- </ion-thumbnail> -->
          <!-- <ion-thumbnail slot="end"> -->
          <!-- <ion-thumbnail> -->
          <!-- </ion-thumbnail> -->
          <ion-label class="text-white" :class="(router.currentRoute.value.fullPath.includes('tab3')) ? 'font-bold' : ''">Library</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
    <!-- <ion-list> -->
    <!-- <ion-img src="../../../assets/icons/bold.png"></ion-img> -->
    <!-- <ion-img :src="require('../assets/icons/bold.png')"></ion-img> -->
    <!-- <ion-item v-for="item in items" :key="item.src">
      <ion-thumbnail slot="start">
        <ion-img :src="item.src"></ion-img>
      </ion-thumbnail>
      <ion-label>{{item.text}}</ion-label>
    </ion-item> -->
    <!-- </ion-list> -->
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonImg,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { useRouter } from 'vue-router';
// import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonImg, IonItem, IonList, IonThumbnail, IonPage, IonRouterOutlet } from '@ionic/vue';
// import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
// import { ellipse, square, triangle } from 'ionicons/icons';
// import { IonImg, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/vue';

export default defineComponent({
  name: "TabsPage",
  // components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  // components: { IonImg, IonItem, IonLabel, IonList, IonThumbnail, IonTabs, IonTabBar, IonTabButton, IonPage, IonRouterOutlet },
  components: {
    IonImg,
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonPage,
    IonRouterOutlet,
  },
  // setup() {
  //   return {
  //     ellipse,
  //     square,
  //     triangle,
  //   }
  // }
  setup() {
      const router = useRouter();
      console.log(router);
      return { router };

    // const items = [
    //   {
    //     text: "Item 1",
    //     // 'src': require('@/assets/icons/bold.png')
    //     src: "/path/to/external/file.png",
    //   },
    //   {
    //     text: "Item 2",
    //     src: "/path/to/external/file.png",
    //   },
    //   {
    //     text: "Item 3",
    //     src: "/path/to/external/file.png",
    //   },
    // ];
    // return { items };
  },
  // computed: {
  //   ()
  //   if (router.path)
  // },
  created() {
    console.log(this.router)
    console.log(this.router.getRoutes())
    console.log(this.router.hasRoute("tab1"))
    console.log(this.router.hasRoute("tab2"))
    console.log(this.router.hasRoute("tab3"))
    console.log(this.router.hasRoute("tabs"))
    console.log(this.router.currentRoute.value.fullPath.includes("tab1"))
    console.log(this.router.currentRoute.value.fullPath.includes("tab2"))
    console.log(this.router.currentRoute.value.fullPath.includes("tab3"))
    // console.log((path: string) => path === route. this.router.fullPath.contains("tab1"))
    // const isActive = (path: string) => path === route.fullPath;
  },
});
</script>

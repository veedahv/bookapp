<template>
  <ion-page>
      <ion-router-outlet></ion-router-outlet>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
//   IonTabBar,
//   IonTabButton,
//   IonTabs,
//   IonLabel,
//   IonImg,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
// import { useRouter } from 'vue-router';
// import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonImg, IonItem, IonList, IonThumbnail, IonPage, IonRouterOutlet } from '@ionic/vue';
// import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
// import { ellipse, square, triangle } from 'ionicons/icons';
// import { IonImg, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/vue';

export default defineComponent({
  name: "AuthLayout",
  // components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  // components: { IonImg, IonItem, IonLabel, IonList, IonThumbnail, IonTabs, IonTabBar, IonTabButton, IonPage, IonRouterOutlet },
  components: {
    // IonImg,
    // IonLabel,
    // IonTabs,
    // IonTabBar,
    // IonTabButton,
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
//   setup() {
//       const router = useRouter();
//       console.log(router);
//       return { router };
//   },
//   created() {
//     console.log(this.router)
//     console.log(this.router.getRoutes())
//     console.log(this.router.hasRoute("tab1"))
//     console.log(this.router.hasRoute("tab2"))
//     console.log(this.router.hasRoute("tab3"))
//     console.log(this.router.hasRoute("tabs"))
//     console.log(this.router.currentRoute.value.fullPath.includes("tab1"))
//     console.log(this.router.currentRoute.value.fullPath.includes("tab2"))
//     console.log(this.router.currentRoute.value.fullPath.includes("tab3"))
//     // console.log((path: string) => path === route. this.router.fullPath.contains("tab1"))
//     // const isActive = (path: string) => path === route.fullPath;
//   },
});
</script>

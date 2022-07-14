<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="px-8">
        <ion-grid>
          <ion-row class="ion-align-items-end">
            <ion-col size="12" size-sm>
              <div class="max-w-xs mx-auto">
                <div class="px-4 py-5 text-center relative">
                    <div class="my-3">
                      <ion-title class="px-0 my-2 font-bold text-xl">
                        Email Sent
                      </ion-title>
                      <p class="text-sm font-normal">
                        We sent an email to y***@mail.com with a link to get
                        back into your account.
                      </p>
                      <div class="flex justify-center gap-3 my-3">
                        <ion-button
                          fill="clear"
                          class="
                            text-sm text-white
                            bg-opacity-50
                            border border-white
                            rounded-md
                            flex-1
                          "
                        >
                          Close
                        </ion-button>
                      </div>
                    </div>
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
  IonPage,
  IonTitle,
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "EmailSentPage",
  components: {
    IonContent,
    IonPage,
    IonTitle,
    IonButton,
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
  methods: {},
});
</script>

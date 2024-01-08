import { defineNuxtPlugin } from "#app";
import "primeflex/primeflex.css";
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Menubar from 'primevue/menubar';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Carousel from "primevue/carousel";
import Card from "primevue/card";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Menubar", Menubar);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Textarea", Textarea);
  nuxtApp.vueApp.component("Carousel", Carousel);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("TabView", TabView);
  nuxtApp.vueApp.component("TabPanel", TabPanel);
});

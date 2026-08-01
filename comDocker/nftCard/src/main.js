import { createApp } from 'vue';
import NftCard from "@/NftCard.vue";

//Arquivos CSS
import "@/assets/css/reset.css";
import "@/assets/css/main.css";
import Card from "@/components/Card.vue";

const app = createApp(NftCard);

//injetando componentes globais
app.component('Card', Card);

app.mount('#app');

<template>
  <div id="carModels">
    <Header textHeader="Navita" />
    <div id="title">{{ textTitle }}</div>
    <CarMarks textTitle="Marcas" titleTable="Marca" />
    <CarModelsTable textTitle="Modelos" titleTable="Modelo" />
    <Footer textFooter="Copyright © Navita 2020" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CarMarks from "./components/CarMarks.vue";
import CarModelsTable from "./components/CarModelsTable.vue";

export default {
  name: "CarModels",
  components: {
    Header,
    Footer,
    CarMarks,
    CarModelsTable,
  },
  data() {
    return {
      textTitle: "Veículos",
    };
  },

  created() {
    var self = this;
    self.clearLocalStorage();
  },

  methods: {
    clearLocalStorage() {
      if (localStorage != null) {
        localStorage.clear();
      }
    },
  },
};
</script>

<style>
#carModels {
  margin: 0;
  font-family: Arial;
  background-color: #f7f8fb;
}

#title {
  color: #5a5c69;
  font-size: 20px;
  margin: 25px;
}
</style>

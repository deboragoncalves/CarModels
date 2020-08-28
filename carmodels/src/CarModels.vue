<template>
  <div id="carModels">
    <Header textHeader="Navita" />
    <div id="title">{{ textTitle }}</div>
    <CarMarks textTitle="Marcas" titleTable="Marca" v-scroll-to="'#carModelsTable'"  />
    <CarModelsTable id="carModelsTable" textTitle="Modelos" titleTable="Modelo" />
    <Footer textFooter="Copyright © Navita 2020" />
    <button v-scroll-to="'#carModels'" ><img src="http://www.hostcgs.com.br/hostimagem/images/109button.png" id="imageTop" /></button>
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
      textTitle: "Veículos"
    };
  },
  created() {
    localStorage.clear()
  },
};
</script>

<style>
#carModels {
  margin: 0;
  font-family: Arial;
  background-color: #f7f8fb;
}

#imageTop {
  position: fixed;
  bottom: 10px;
  right: 20px;
  width: 60px;
  border-radius: 4px;
}

#title {
  color: #5a5c69;
  font-size: 20px;
  margin: 25px;
}
</style>

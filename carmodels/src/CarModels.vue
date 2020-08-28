<template>
  <div id="carModels">
    <Header textHeader="Navita" />
    <div id="title">{{ textTitle }}</div>
    <CarMarks id="carMarksTable" textTitle="Marcas" titleTable="Marca" v-scroll-to="'#carModelsTable'"  />
    <CarModelsTable id="carModelsTable" textTitle="Modelos" titleTable="Modelo" />
    <Footer textFooter="Copyright © Navita 2020" />
    <img src="http://www.hostcgs.com.br/hostimagem/images/109button.png" id="imageTop" v-scroll-to="'#carModels'" />
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
  box-shadow: -9px 11px 11px rgba(58, 59, 69, 0.15);
  -webkit-box-shadow: -9px 11px 11px rgba(58, 59, 69, 0.15);
  -moz-box-shadow: -9px 11px 11px rgba(58, 59, 69, 0.15);
}

#carMarksTable {
  margin: 20px;
}

#imageTop {
  position: fixed;
  bottom: 10px;
  right: 20px;
  width: 60px;
  border-radius: 4px;
}

#title {
  color: #5A5C69;
  font-size: 23px;
  margin: 25px;
}
</style>

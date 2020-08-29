<template>
  <div id="car-models">
    <Header textHeader="Navita" />
    <div id="title">{{ textTitle }}</div>
    <CarMarks id="car-marks-table" textTitle="Marcas" titleTable="Marca" v-scroll-to="'#car-models-table'"  />
    <CarModelsTable id="car-models-table" textTitle="Modelos" titleTable="Modelo" />
    <Footer textFooter="Copyright © Navita 2020" />
    <img src="http://www.hostcgs.com.br/hostimagem/images/109button.png" id="image-top" v-scroll-to="'#car-models'" />
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
#car-models {
  font-family: Arial;
  background-color: #f7f8fb;
  box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
  -webkit-box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
  -moz-box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
}

#car-models-table {
  margin: 40px 20px 20px 20px;
}

#car-marks-table {
  margin: 20px;
}

#image-top {
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

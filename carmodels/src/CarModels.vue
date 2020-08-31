<template>
  <div id="car-models">
      <Header textHeader="Navita" />
      <div id="title">{{ textTitle }}</div>
      <CarMarks
        id="car-marks-table"
        textTitle="Marcas"
        titleTable="Marca"
        v-scroll-to="'#car-models-table'"
      />
      <CarModelsTable id="car-models-table" textTitle="Modelos" titleTable="Modelo" />
      <Footer textFooter="Copyright © Navita 2020" />
      <img
        src="http://www.hostcgs.com.br/hostimagem/images/213botao.png"
        id="image-top"
        v-scroll-to="'#car-models'"
      />
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
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Gayathri);

#car-models {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
  font-family: 'Gayathri', Arial; 
  background-color: #f7f8fb;
  box-shadow: 0 30px 30px rgba(58, 59, 69, 0.15);
  -webkit-box-shadow: 0 30px 30px rgba(58, 59, 69, 0.15);
  -moz-box-shadow: 0 30px 30px rgba(58, 59, 69, 0.15);
}

#car-models-table {
  margin: 30px 20px 0px 20px;
}

#car-marks-table {
  margin: 0px 20px 0px 20px;
}

#image-top {
  position: fixed;
  bottom: 10px;
  right: 20px;
  width: 45px;
  border-radius: 4px;
}

#title {
  color: #5a5c69;
  font-size: 26px;
  font-weight: 600;
  padding: 30px 25px 23px 25px;
  margin: 0;
}
</style>

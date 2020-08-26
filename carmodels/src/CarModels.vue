<template>
  <div id="carModels">
    <Header textHeader="Navita" />
    <div id="title">
      {{ textTitle }}
      </div>
    <CarMarks textTitle="Marcas" titleTable="Marca" />
    <Footer textFooter="Copyright © Navita 2020" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CarMarks from './components/CarMarks.vue'

export default {
  name: 'CarModels',
  components: {
    Header,
    Footer,
    CarMarks
  },
  data: function() {
    return {
      textTitle: "Veículos"
    }
  }
}
</script>

<style>
#carModels {
  margin: 0;
  font-family: Arial;
  background-color: #F7F8FB;
}

#title {
  color: #5A5C69;
  font-size: 20px;
  margin: 25px;
}
</style>

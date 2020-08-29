<template>
  <div id="models" v-show="showModelsTable">
    <div id="main-div">
    <div id="subTitle">{{ textTitle }}</div>

    <div id="table">
      <div id="title-table">{{ titleTable }}</div>

      <table>
        <tr v-for="model in listModels" :key="model.codigo">
          <td id="model-name-class">{{ model.nome | filteredNames }}</td>
        </tr>
      </table>
    </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../bus.js";
import axios from "axios";
import '@/assets/styles/tableStyle.css';
import 'normalize.css';

export default {
  name: "CarModelsTable",
  props: {
    textTitle: String,
    titleTable: String,
  },
  data() {
    return {
      currentView: null,
      showModelsTable: false,
      listModels: [],
    };
  },
  created() {
    var self = this;

    bus.$on("showModelsTable", (data) => {
      self.showModelsTable = data;
    }),
      bus.$on("getAllModels", self.getAllModels)
  },
  methods: {
    getAllModels() {
      var self = this;

      axios
        .get(
          'https://parallelum.com.br/fipe/api/v1/carros/marcas/' +
            localStorage.getItem("markId") +
            '/modelos'
        )
        .then((response) => (self.listModels = response.data.modelos))
        .catch((err) => console.log("Error: " + err));
    },
  },
};
</script>

<style>
#model-name-class {
  text-align: left;
  border-bottom: 0.1px solid #e3e6f0;
  padding: 14px 30px 14px 30px;
}

</style>
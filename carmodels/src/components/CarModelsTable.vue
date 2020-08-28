<template>
  <div id="models" v-show="showModelsTable">
    <div id="mainDiv">
    <div id="title">{{ textTitle }}</div>

    <div id="table">
      <div id="titleTable">{{ titleTable }}</div>

      <table>
        <tr v-for="model in listModels" :key="model.codigo">
          <td>{{ model.nome | filteredNames }}</td>
        </tr>
      </table>
    </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../bus.js";
import axios from "axios";

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

<style scoped>
#models {
  box-shadow: -9px 11px 11px rgba(58, 59, 69, 0.15);
  -webkit-box-shadow: -9px 11px 11px rgba(58, 59, 69, 0.15);
  -moz-box-shadow: -9px 11px 11px rgba(58, 59, 69, 0.15);
  background-color: #F7F8FB;
  color: #5A5C69;
}

#mainDiv {
  background-color: #F7F8FB;
  box-shadow: 8px 8px 5px 0px rgba(58, 59, 69, 0.15);
  -webkit-box-shadow: 8px 8px 5px 0px rgba(58, 59, 69, 0.15);
  -moz-box-shadow: 8px 8px 5px 0px rgba(58, 59, 69, 0.15); 
}

#title {
  font-size: 13px;
  font-weight: bold;
  color: #4E73DF;
  font-family: Arial;
  background-color: #f8f9fc;
  margin-left: 5px;
}

#titleTable {
  text-align: left;
  padding: 12px;
  border-bottom: 0.1px solid #E3E6F0;
  border-top: 0.1px solid #E3E6F0;
  color: gray;
  font-weight: bold;
  font-size: 13px;
  background-color: #ffffff;
}

table {
  background-color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  color: gray;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #E3E6F0;
}

table td {
  text-align: left;
  border-bottom: 0.1px solid #E3E6F0;
  padding: 15px 15px 20px 15px;
}
</style>
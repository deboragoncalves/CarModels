<template>
  <div v-show="showModelsTable">
    <div id="main-div">
    <div id="sub-title">{{ textTitle }}</div>

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
      showModelsTable: false,
      listModels: [],
    };
  },
  created() {
    var self = this;

    // Escuta o evento "showModelsTable" e torna o valor da variável "showModelsTable" "true".

    bus.$on("showModelsTable", (data) => {
      self.showModelsTable = data;
    }),

    // Escuta o evento "getAllModels" e chama o método "getAllModels", que irá consumir os dados da API.

      bus.$on("getAllModels", self.getAllModels)
  },
  methods: {
    getAllModels() {
      var self = this;

      // Consome os dados da API pelo método get. O id da marca é necessário na URL e está armazenado em Local Storage.

      axios
        .get(
          'https://parallelum.com.br/fipe/api/v1/carros/marcas/' +
            localStorage.getItem("markId") +
            '/modelos'
        )

        // Se a requisição for bem sucedida, o array "listModels" vai receber os dados em formato de JSON.

        .then((response) => (self.listModels = response.data.modelos))

        // Se der erro, exibe mensagem no console.log

        .catch((err) => console.log("Error: " + err));
    },
  },
};
</script>

<style scoped>
#table {
  padding: 5px 0px 50px 0px;
}

#model-name-class {
  text-align: left;
  border-bottom: 0.1px solid #e3e6f0;
  padding: 17px 25px 14px 13px;
}

</style>
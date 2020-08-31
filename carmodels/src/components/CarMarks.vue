<template>
  <div>
    <div id="main-div">
      <div id="sub-title">{{ textTitle }}</div>
      <div id="table">
        <div id="title-table">{{ titleTable }}</div>

        <table>
          <tr v-for="(mark, index) in marks" :key="mark.codigo">
            <td
              :class="['mark-name-class', (index == Object.keys(marks).length - 1 ? 'line-no-border' : 'line-border')]"
            >{{ mark.nome | filteredNames }}</td>
            <td
              :class="['see-model-class', (itemClicked == index ? 'green' : 'blue'), (index == Object.keys(marks).length - 1 ? 'line-no-border' : 'line-border')]"
              v-on:click="showTableModels(mark.codigo, index)"
            >Ver modelos</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../bus.js";
import axios from "axios";
import "@/assets/styles/tableStyle.css";
import "normalize.css";

const marksEndpoint = "https://parallelum.com.br/fipe/api/v1/carros/marcas";

export default {
  name: "CarMarks",
  props: {
    textTitle: String,
    titleTable: String,
  },
  data() {
    return {
      showTable: false,
      itemClicked: undefined,
      marks: [],
    };
  },
  created() {
    var self = this;
    self.getAllMarks();
  },
  methods: {
    getAllMarks() {
      var self = this;

      // Consome os dados da API pelo método get
      axios
        .get(marksEndpoint)

        // Se a requisição for bem sucedida, o array "marks" vai receber os dados em formato de JSON.

        .then((response) => {
          self.marks = response.data;
        })

      // Se der erro, exibe mensagem no console.log

        .catch((err) => console.log("Error: " + err));
    },
    showTableModels(id, index) {
      var self = this;

      // A variável "itemClicked" recebe o índice no array do item clicado. 
      // Se o item for o último do array, excluir border-bottom (v-bind class).

      self.itemClicked = index;

      // Se o item do array for clicado, a variável "showTable" muda para "true", 
      // para que o componente "CarModelsTable" seja mostrado.

      self.showTable = true;

      bus.$emit("showModelsTable", self.showTable);

      // Quando clicar em um item, chamar o evento "getAllModels", que será escutado no componente "CarModelsTable".

      bus.$emit("getAllModels"); 

      // O código da marca é armazenado em Local Storage e depois será utilizado para consumir os dados
      // e exibir a tabela dos modelos, no componente "CarModelsTable".

      localStorage.setItem("markId", id);
    },
  }
}
</script>

<style scoped>
#table {
  padding: 5px 0px 30px 0px;
}

.line-no-border {
  border-bottom: none;
}

.line-border {
  border-bottom: 0.1px solid #e3e6f0;
}

.mark-name-class {
  text-align: left;
  padding-top: 0px;
  padding-bottom: 9px;
  padding-left: 13px;
  padding-right: 25px;
  width: 40%;
}

.see-model-class {
  text-align: left;
  font-weight: bold;
  cursor: pointer;
  padding: 22px 20px 20px 20px;
}

.green {
  color: #1cc88a;
}

.blue {
  color: #4e73df;
}
</style>
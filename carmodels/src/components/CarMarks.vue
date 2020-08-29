<template>
  <div id="marks">
    <div id="main-div">
        <div id="subTitle">{{ textTitle }}</div>

      <div id="title-table">{{ titleTable }}</div>

      <table>
        <tr v-for="(mark, index) in marks" :key="mark.codigo">
          <td id="mark-name-class">{{ mark.nome | filteredNames }}</td>
          <td
            :class="[itemClicked == index ? 'green' : 'blue', 'see-model-class']"
            v-on:click="showTableModels(mark.codigo, index)"
          >Ver modelos</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { bus } from "../bus.js";
import axios from "axios";
import '@/assets/styles/tableStyle.css';
import 'normalize.css';

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
  mounted() {
    var self = this;
    self.getAllMarks();
  },
  methods: {
    getAllMarks() {
      var self = this;
      axios
        .get(marksEndpoint)
        .then((response) => {
          self.marks = response.data;
        })
        .catch((err) => console.log("Error: " + err));
    },
    showTableModels(id, index) {
      var self = this;

      self.itemClicked = index;

      self.showTable = true;

      bus.$emit("showModelsTable", self.showTable);

      bus.$emit("getAllModels");

      localStorage.setItem("markId", id);
    },
  },
};
</script>

<style>
#mark-name-class {
  text-align: left;
  border-bottom: 0.1px solid #e3e6f0;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 8px;
  padding-bottom: 22px;
  width: 40%;
}

.see-model-class {
  text-align: left;
  border-bottom: 0.1px solid #e3e6f0;
  font-weight: bold;
  cursor: pointer;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 22px;
}

.green {
  color: #1cc88a;
}

.blue {
  color: #4e73df;
}
</style>
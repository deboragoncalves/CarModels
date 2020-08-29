<template>
  <div id="marks">
    <div id="main-div">
        <div id="title">{{ textTitle }}</div>

      <div id="title-table">{{ titleTable }}</div>

      <table id="table">
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

<style scoped>
#marks {
  box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
  -webkit-box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
  -moz-box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
  background-color: #f7f8fb;
  color: #5a5c69;
}

#main-div {
  background-color: #f7f8fb;
  box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
  -webkit-box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
  -moz-box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
}

#title {
  color: #4e73df;
  font-weight: bold;
  font-size: 13px;
  font-family: Arial;
  background-color: #f7f8fb;
  padding: 0px;
  margin: 0px;
}

#title-table {
  text-align: left;
  margin-top: 20px;
  padding: 14px 30px 14px 30px;
  border-bottom: 0.1px solid #e3e6f0;
  border-top: 0.1px solid #e3e6f0;
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
  border: 0.1px solid #e3e6f0;
}

#mark-name-class {
  text-align: left;
  border-bottom: 0.1px solid #e3e6f0;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 8px;
  padding-bottom: 22px;
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
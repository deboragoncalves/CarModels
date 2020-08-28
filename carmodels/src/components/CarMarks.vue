<template>
  <div id="marks">
    <div id="mainDiv">
    <div id="title">{{ textTitle }}</div>

    <div id="tableStructure">
      <div id="titleTable">{{ titleTable }}</div>

      <table id="table">
        <tr id="table1" v-for="(mark, index) in marks" :key="mark.codigo">
          <td>{{ mark.nome | filteredNames }}</td>
          <td :class="[itemClicked == index ? 'green' : 'blue', 'seeModelStaticClass']"
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
      marks: []
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
      var self = this

      this.itemClicked = index;

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
  margin-top: 20px;
  padding: 14px;
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
  border: 0.1px solid #E3E6F0;
}

table td {
  text-align: left;
  border-bottom: 0.1px solid #E3E6F0;
  padding: 15px 15px 20px 15px;
}

.seeModelStaticClass {
    font-weight: bold;
    padding: 15px 15px 15px 15px;
    cursor: pointer;
}

.green {
  color: #1CC88A;
}

.blue {
  color: #4E73DF;
}
</style>
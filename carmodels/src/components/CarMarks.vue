<template>
  <div id="marks">
    <div id="title">{{ textTitle }}</div>

    <div id="table">
      <div id="titleTable">{{ titleTable }}</div>

      <table>
        <tr v-for="mark in marks" :key="mark.codigo">
          <td>{{ mark.nome | filteredNames }}</td>
          <td
            :class="{'green': showTable, 'blue': !showTable}"
            v-on:click="showTableModels(mark.codigo)"
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
      marks: [],
    };
  },
  mounted() {
    var self = this;

    axios
      .get(marksEndpoint)
      .then((response) => {
        self.marks = response.data;
      })
      .catch((err) => console.log("Error: " + err));
  },
  methods: {
    showTableModels: function (id) {
      var self = this;
      self.showTable = !self.showTable;
      bus.$emit("showModelsTable", self.showTable);
      bus.$emit("requestAPI");
      localStorage.setItem("markId", id);
    },
  },
};
</script>

<style scoped>
#marks {
  box-shadow: -9px 11px 11px rgba(58, 59, 69, 0.15);
}

#title {
  font-size: 17px;
  font-weight: bold;
  color: #3f59bf;
  font-family: Arial;
  background-color: #f8f9fc;
  margin: 15px 35px 15px 35px;
}

#table {
  margin: 15px 35px 15px 35px;
}

#titleTable {
  text-align: left;
  padding: 12px;
  border-bottom: 0.2px solid gray;
  border-top: 0.2px solid gray;
  color: gray;
  font-weight: bold;
}

table {
  background-color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  color: gray;
  width: 100%;
  border-collapse: collapse;
}

table td {
  text-align: left;
  border-bottom: 0.1px solid gray;
  padding: 15px 15px 20px 15px;
}

.green {
  color: #3fbf4c;
  font-weight: bold;
  padding: 15px 15px 15px 15px;
  cursor: pointer;
}

.blue {
  color: #167aed;
  font-weight: bold;
  padding: 15px 15px 15px 15px;
  cursor: pointer;
}
</style>
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
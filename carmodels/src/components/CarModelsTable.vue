<template>
    <div id="models" v-show="showModelsTable">
        <div id="title">
            {{ textTitle }}
        </div>

        <div id="table">
        <div id="titleTable">
            {{ titleTable }}
        </div>

             <table>
                <tr v-for="model in listModels" :key="model.codigo">
                    <td>{{ model.nome }}</td>
                </tr>
            </table>
        </div>
        </div> 
</template>

<script>
import { bus } from '../bus.js';
import axios from 'axios'

export default {
    name: 'CarModelsTable',
    props: {
        textTitle: String,
        titleTable: String
    },
    data() {
        return {
            showModelsTable: false,
            listModels: []
        }
    },
    created() {
            var self = this;

            bus.$on('showModelsTable', (data) => {
                self.showModelsTable = data;
            })
    },
    mounted() {
        var self = this;
        axios
      .get('https://parallelum.com.br/fipe/api/v1/carros/marcas/1/modelos')
      .then(response => (self.listModels = response.data.modelos))
      .catch(err => (console.log('Error: ' + err)))
    }
}
</script>

<style scoped>
#models {
    margin-top: 30px;
    box-shadow: -9px 11px 11px rgba(58, 59, 69, .15);
}

#title {
    font-size: 17px;
    font-weight: bold;
    color: #3F59BF;
    font-family: Arial;
    background-color: #F8F9FC;
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
    background-color: #FFFFFF;
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

</style>
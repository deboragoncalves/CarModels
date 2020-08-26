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
                <tr>
                    <td>Onix</td>
                </tr>
            </table>
        </div>
        </div> 
</template>

<script>
import { bus } from '../bus.js';

export default {
    name: 'CarModelsTable',
    props: {
        textTitle: String,
        titleTable: String
    },
    data() {
        return {
            showModelsTable: false
        }
    },
    created() {
            bus.$on('showModelsTable', (data) => {
                this.showModelsTable = data;
            })
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
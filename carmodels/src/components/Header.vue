<template>
  <div id="header">{{ textHeader }}</div>
</template>

<script>
export default {
  name: "Header",
  props: {
    textHeader: String,
  },
};
</script>

<style scoped>
#header {
  padding: 20px 25px 18px 33px;
  margin: 0;
  font-size: 20px;
  background-color: #FFFFFF;
  color: #1CC88A;
  font-weight: 600;
  box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
  -webkit-box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
  -moz-box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
}
</style>
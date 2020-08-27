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
  padding: 25px;
  font-family: Arial;
  font-size: 17px;
  background-color: #ffffff;
  color: #72bf3f;
  font-weight: bold;
  box-shadow: -9px 11px 11px rgba(58, 59, 69, 0.15);
}
</style>
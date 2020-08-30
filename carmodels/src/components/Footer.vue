<template>
  <div id="footer">{{ textFooter }}</div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    textFooter: String,
  },
};
</script>

<style scoped>
#footer {
  margin-top: 0px;
  text-align: center;
  font-size: 16px;
  padding: 25px;
  background-color: #FFFFFF;
  box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
  -webkit-box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
  -moz-box-shadow: 0 0 15px rgba(58, 59, 69, 0.15);
}
</style>
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
  margin: 0;
  text-align: center;
  font-size: 13px;
  padding: 25px;
  background-color: #ffffff;
}
</style>
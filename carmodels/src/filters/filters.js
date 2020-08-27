import  Vue  from  "vue";

Vue.filter("filteredNames", function (name) {
  name = name.toString().split(" ");
    
  return name
    .map(function (word) {
      return (
        word.slice(0, 1).toUpperCase() +
        word.slice(1, word.lenght).toLowerCase()
      );
    })
    .join(' ');
});
import  Vue  from  "vue";

Vue.filter("filteredNames", function (name) {
  // Cada item do array é transformado em um array de palavras.
  // Exemplo: Item: Marca do Carro. A variável name vai se tornar: ["Marca", "do", "Carro"].

  name = name.toString().split(" ");
    
  return name

  // Mapear cada palavra do array criado. 

    .map(function (word) {
      return (

        // Transformar a primeira letra da palavra em maiúscula e o restante em minúscula.

        word.slice(0, 1).toUpperCase() +
        word.slice(1, word.lenght).toLowerCase()
      );
    })

    // Juntar todas as palavras do array

    .join(' ');
});
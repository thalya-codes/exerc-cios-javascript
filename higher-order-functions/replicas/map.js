/*
  SOBRE O MAP
    Ele...
      ** itera cada item de um array
      ** permite que a pessoa passe uma função que transforme os itens do array
      ** retorna um novo array com os elementos modificados
*/


const demonsSlayerChar = ["Nezuko", "Tanjiro", "Zenitsu", "Inosuke"];

function replicaMap(array, whatDoYouWantMeToDo) {
  const newArray = [];

  for (let iterador = 0; iterador < array.length; iterador++) {
    newArray.push(whatDoYouWantMeToDo(array[iterador]));
  }

  return newArray;
}

const mapResult = replicaMap(
  demonsSlayerChar,
  (char) => `<li>Character name:: ${char}</li>`
);

console.log(mapResult);
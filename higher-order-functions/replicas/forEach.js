/*
 SOBRE O FOREACH
   Ele...
    ** possui uma lógica interna para iterar um array
    ** permite que a pessoa informe o que ela quer que seja realizada para cada item através de uma função
    ** invoca a função passada
*/

const ghiblinChar = ["Kiki", "Howl", "Ponyo", "Chihiro"];

function replicaForEach(array, whatDoYouWantMeToDo) {
  for (let iterator = 0; iterator < array.length; iterator++) {
    const currentEl = array[iterator];

    whatDoYouWantMeToDo(currentEl);
  }
}

replicaForEach(ghiblinChar, (char) =>
  console.log(`Ghiblin character name: ${char}`)
);

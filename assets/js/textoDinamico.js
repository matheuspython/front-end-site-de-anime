const generos = ['ação','aventura','issekai']
const listaGeneros = document.querySelector('ul#list-generos')
let intervalo
function escreve(indice){
  const divide = indice.split('')  
  const newLi = document.createElement("li")

  listaGeneros.appendChild(newLi)

  divide.forEach((letra, i) => setTimeout(()=> newLi.innerHTML+=letra, 150*i))
}

for(let i = 0;i<generos.length;i++){
  if(i == 0){ intervalo = 0}
  else if(i == 1){ intervalo = 1000 }
  else if(i == 2){ intervalo = 3000 }
  setTimeout(()=> escreve(generos[i]), intervalo)
}
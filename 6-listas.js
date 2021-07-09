console.log("Trabalhando com listas");
// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro";
//console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

listaDeDestinos.push("Curitiba"); //adicionando um item no Array//
console.log("Destinos possíveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1) //tirando um item da lista//
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); //mostrando um elemento da lista//
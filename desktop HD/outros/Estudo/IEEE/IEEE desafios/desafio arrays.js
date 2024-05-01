//array nomes e idades.

const listaNomesIdades = [{nome: "Joao", idade: 22},
                    {nome: "Pedro", idade: 17},
                    {nome: "Luana", idade: 19},
                    {nome: "Lucas", idade: 19},
                    {nome: "Leonardo", idade: 22}];
                  
const nomesL = [];

let media = 0;

// Percorrendo os valores de listaNomesIdades.

for(let i = 0; i<listaNomesIdades.length; i++){

    // Nomes começando com L.

    if(listaNomesIdades[i].nome[0] == "L"){
        nomesL.push(listaNomesIdades[i].nome);
        media += listaNomesIdades[i].idade;
    }
}

// Cálculo da média das idades de nomesL. 

media = media/nomesL.length;

console.log(nomesL);

console.log(media);
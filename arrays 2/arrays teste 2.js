const ListaNomes = [{nome: "Joao Paulo", idade:22},
                    {nome: "Caio", idade:19},
                    {nome: "Gabriel", idade:25},
                    {nome: "Victor", idade:18},
                    {nome: "Matheus", idade:20},
                    {nome: "Ronald", idade:21},
                    {nome: "Caua", idade:16},
                    {nome: "Luana", idade: 19},
                    {nome: "Lucas", idade: 19},
                    {nome: "Leonardo", idade: 22},
                    {nome: "Bruna", idade: 24},
                    {nome: "Breno", idade: 22}];
let nomes =[]
let media = 0
let existe = false;
    // for loop para percorrer o array ListaNomes

           for(let i = 0; i<ListaNomes.length; i++){
   
    // Nomes comecando com a letra proposta

    if(ListaNomes[i].nome[0].toLowerCase() === "a"){
        nomes.push(ListaNomes[i].nome);
        media += ListaNomes[i].idade;
        existe = true;

}
}

if(!existe){
    console.log("Não há nome registrado começando com essa letra");
}

// Media das idades

else{

    media = media/nomes.length;
    console.log(existe);
    console.log(nomes);
    console.log(media);
}





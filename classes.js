class Usuario {
    constructor(nome, login, idade, verificado){
        this.nome = nome;
        this.login = login;
        this.idade = idade;
        this.verificado = verificado;
    }

    imprimir(){
        console.log(this.nome, this.login, this.idade, this.verificado)
    }

}

const usuario1 = new Usuario('Lucas', 'lucas123', 19, true)
const usuario2 = new Usuario('Joao',  'joaojj',   18, false)

    let media = (usuario1.idade + usuario2.idade)/2;

    console.log("a media da idade dos usuarios e: " + media);

    usuario1.imprimir();



//exportando o arquivo para o index
export class Cliente {
    nome;
    //#cpf//
    _cpf;

    get cpf(){
        return this._cpf
    }

    autenticar(){
        return true;
    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha =  senha;
    }
}
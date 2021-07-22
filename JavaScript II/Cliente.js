//exportando o arquivo para o index
export class Cliente {
    nome;
    //#cpf//
    _cpf;

    get cpf(){
        return this._cpf
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}
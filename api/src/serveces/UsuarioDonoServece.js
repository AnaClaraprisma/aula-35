const { canais } = require("../mock/dados.json");
const UsuarioPapel = require("../models/UsuarioPapel")

class UsuarioDonoServece {
    #usuariosDono;
    constructor() {
        this.#usuariosDono = canais.filter((canal) => canal.papel === UsuarioPapel.USUARIO_DONO )
    }

    pegarTodos() {
        return this.#usuariosDono;
    }

    pegarUmPeloId(idUsuario){
    }

    editarVideio(idUsuario,corpoNovo){        
    }

    criarNovo(corpo){
    }

    deletarUm(idUsuario){

    }

}
module.exports = new UsuarioDonoServece()
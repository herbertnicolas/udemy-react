import React, { Component } from "react";

class Membro extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        }
        this.trocar = this.trocar.bind(this);
    }

    trocar(){
        let state = this.state;
        this.state.nome = "Herbert";
        this.setState(state);
    }

    render(){
        return(
            <div>
                <h2>Bem-vindo(a) {this.state.nome}</h2>
                <button onClick={this.trocar}>Entrar como Herbert</button>
                <button onClick={() => this.setState({nome:'Visitante'}) }>Sair</button>
            </div>
            
        )
    }
}

export default Membro;
import React, { Component } from "react";
import Feed from './components/Feed';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            email: 'teste@teste.com',
            senha: ''
        };
        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSexo = this.trocaSexo.bind(this);
    }

    trocaEmail(event){
        let valorDigitado = event.target.value;
        this.setState({email: valorDigitado});
    }

    trocaSexo(event){
        this.setState({sexo: event.target.value});
    }
    render(){
        return(
            <div>
                <h2>Login</h2>
                Email: 
                <input type="email" name="email" value={this.state.email} 
                onChange={this.trocaEmail}/><br/>
                Senha:
                <input type="password" name="senha" value={this.state.senha} 
                onChange={(event)=>this.setState({senha: event.target.value})}/>
                <br/>
                Sexo:
                <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                <h3>
                    <p>{this.state.email}</p>
                    <p>{this.state.senha}</p>
                    <p>{this.state.sexo}</p>
                </h3>
            </div>
        );
    }
}

export default App;
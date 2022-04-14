import React, { Component } from "react";


//criar estado com nome e numero
//criar botao + e - ; quando + for clicado, soma 1, menos, sub 1
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: "Herbert",
            contador: 0
        };
        this.sobe = this.sobe.bind(this);
        this.desce = this.desce.bind(this);
    }

    sobe(){
        let state = this.state;
        this.state.contador += 1;
        this.state.nome = "Felipe";
        this.setState(state);
    }

    desce(){
        let state = this.state;
        this.state.contador -= 1;
        this.setState(state);
    }
    render(){
        return(
            <div>
                <h1>Contador</h1>

                <h3>
                    <button onClick={this.sobe}>+</button>
                    {this.state.nome} | 
                    {this.state.contador}
                    <button onClick={this.desce}>-</button>
                </h3>
                
            </div>
        )
    }
}

export default App;
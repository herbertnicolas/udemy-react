import React, { Component } from "react";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00'
        }
    }

    componentDidMount(){
    //se o component foi montado, executa:
        setInterval(()=>{
            this.setState({hour: new Date().toLocaleTimeString()})
        }, 1000);
    }

    componentDidUpdate(){
    //se o component foi atualizado, executa:
        console.log("ATUALIZOU!")
    }

    shouldComponentUpdate(){

    }
    render(){
        return(
            <div>
                <h2>Olá! O horário de agora é {this.state.hour}</h2> 
            </div>
        )
    }
}

export default App;
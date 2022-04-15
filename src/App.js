import React, { Component } from "react";
import Feed from './components/Feed';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            feed:[
                {id: 1, username: "Herbert", curtidas: 20, comentarios: 15},
                {id: 2, username: "Paulo", curtidas: 17, comentarios: 23},
                {id: 3, username: "Lucicleide", curtidas: 22, comentarios: 33},
                {id: 4, username: "Ricardo", curtidas: 1, comentarios: 22}
            ]
        };
    }

    render(){
        return(
            <div>
                {this.state.feed.map((index) => {
                    return(
                        <Feed key={index.id} username={index.username}
                        curtidas={index.curtidas} comentarios={index.comentarios}/>
                    );
                })}
            </div>
        );
    }
}

export default App;
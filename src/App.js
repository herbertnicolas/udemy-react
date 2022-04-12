import React from 'react';

const Equipe = (props) => {
    return(
        <div>
            <Sobre name = {props.name} cargo = {props.cargo} idade = {props.idade}/> 
            <Social insta = {props.insta} lkdin = {props.lkdin} fb = {props.fb}/>
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.name}!</h2>
            <h3>Nome: {props.name}</h3>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
            <hr/>
            <h2>Redes:</h2>
            <hr/>
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <h3><a href = {props.fb}> Facebook </a></h3>
            <h3><a href = {props.lkdin}> LinkedIn </a></h3>
            <h3><a href = {props.insta}> Instagram </a></h3>
        </div>
    );
}

function App(){
    return (
    <div>
        <h1>Conheça nossa equipe:</h1>
        <Equipe name="Herbert" cargo="Programador" idade="27 anos"
        fb = "https://fb.com/herbertnicolass"
        lkdin = "https://www.linkedin.com/in/herbert-nicolas/"
        insta="https://instagram.com/herbertnicolas"/>
        {/*<Sobre name="Herbert" cargo="Programador" idade="27 anos"/>  
        <Sobre name="Lucas" cargo="Designer" idade="21 anos"/>  
        */}
        <h1>Olá Mundo!</h1>
    </div>
    );
}

export default App;


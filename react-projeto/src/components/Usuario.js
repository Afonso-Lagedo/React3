import React from 'react';

import './components.css';
//create Usuario
function Usuario(props){
    return(
        <div className="Usuario">
            <ul>
                <li><strong>ID: </strong>{props.usuario.id}</li>
                <li><strong>Nome: </strong>{props.usuario.nome}</li>
                <li><strong>Idade: </strong>{props.usuario.idade}</li>
                <li><strong>Email: </strong>{props.usuario.email}</li>
            </ul>
            <button onClick={props.removerUsuario}>&times;</button>
        </div>
    )
}

export default Usuario;
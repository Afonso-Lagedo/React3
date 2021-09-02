import React from 'react';

//$$$$$$$$$$

//create Usuario
function Usuario(props){
    return(
        <div>{/*$$$$$ dentro da div*/}
            <ul>
                <li><strong>ID:</strong>{props.usuario.id}</li>
                <li><strong>Nome:</strong>{props.usuario.nome}</li>
                <li><strong>Idade:</strong>{props.usuario.idade}</li>
                <li><strong>Email:</strong>{props.usuario.email}</li>
            </ul>
            {/*$$$$$$$$$$$$$$$$ */}
        </div>
    )
}

export default Usuario;
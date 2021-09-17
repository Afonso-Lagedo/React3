//to use Components on project
import React, {useState, useEffect} from 'react';

import Usuario from './Usuario';

//create class of component type
function Usuarios() {

    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        fetch('https://reqres.in/api/users') //localization of API //API of test: https://reqres.in/
        //executed in sequence
            .then(resposta=>resposta.json())
            .then (dados=>{
                //tranformation API data to props of my state
                const usuarios = dados.data.map(usuario =>{
                    return{
                        id:usuario.id,
                        nome: usuario.first_name,
                        email:usuario.email
                    }
                })

                //actualization state
                //this.setState({usuarios:usuarios})
                //when have same name
                setUsuarios(usuarios)
            })
    }, [])//empty array, since passing it doesn't need dependencies

    //remove user
    const removerUsuario = usuario =>{
        //if confirm alert, will remove
        if (window.confirm(`Excluir"${usuario.nome}"?`)){

            fetch(`https://reqres.in/api/users/${usuario.id}`,
                {method: 'DELETE'}
            )
            .then(resposta =>{
                //receives state
                let usuarios = this.state.usuarios;
                //geting user of ID
                setUsuarios = usuarios.filter(filtrado => filtrado.id !==usuario.id);
            })
        }
    }


    return(
        <>
            {/*get all usuarios and show*/}
            {usuarios.map(usuario =>(
                <Usuario key={usuario.id}
                    usuario={usuario}
                    //remove user
                    removerUsuario={() =>removerUsuario(usuario)}
                />
            ))}
        </>
    );

}

export default Usuarios;
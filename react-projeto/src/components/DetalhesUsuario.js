import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom' //to get parameters

function DetalhesUsuario(){

    {/*get id*/}
    const {codigo} = useParams();{/*destroy url datas*/}

    const [usuario, setUsuario] =useState({});

    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${codigo}`)
            .then(resposta => resposta.json())
            .then(dados => {
                if (dados.data){
                    setUsuario({
                        id:dados.data.id,
                        nome: dados.data.first_name,
                        email: dados.data.email,
                        foto: dados.data.avatar
                    })
                }
            })
    {/*dependence of id*/}            
    }, [codigo])

    if(usuario.nome !== undefined){
        return <>
            <img src={usuario.foto} alt={usuario.nome}/>
            <h2>{usuario.nome}</h2>
            <p>{usuario.email}</p>
            <Link to="/usuarios">Voltar</Link>
        </>
    }

    return <>
        <h2>Usuário não encontrado</h2>
        <Link to="/usuarios">Voltar</Link>
    </>
}

export default DetalhesUsuario
import React, {useState} from 'react';
import './components.css';

function AdicionarUsuario(props){

    //return the nome, and to actualizetion use setNome
    const [nome, setNome]= useState('');//name >>>state   setName>>>state actualization
    const [idade, setIdade]= useState('');
    const [email, setEmail]= useState('');

    //add user
    const onSubmitHandler = event => {
        event.preventDefault();

        //const usuario ={nome:nome, idade:idade, email:email}
        //when props have same attibute name:
        const usuario ={nome, idade, email}

        //geting API
        fetch('https://reqres.in/api/users', {
            method: 'POST', //url, method(default:get)
            headers: {'Content-Type': 'application/json'}, //configuration
            body: JSON.stringify(usuario)//the which will pass to API, and transformation in JSON for API understand
        })
            .then(resposta =>resposta.json())
            .then(dados => {
                //inputs cleaning
                setNome('')
                setIdade('')
                setEmail('')
                props.adicionarUsuario(dados);
            }
        )
    }


    return(
        <div className="AddUsuario">
            <h2>Adicionar Usuário</h2>
            <form onSubmit={onSubmitHandler}>
                <div className="Linha">
                    <div className="Coluna">
                        <label>Nome</label>
                        <input type="text"
                            name="nome"
                            value={nome}
                            onChange={event => setNome(event.target.value)}
                            required>
                        </input>
                    </div>
                    <div className="Coluna">
                        <label>Idade</label>
                        <input type="number"
                            name="idade"
                            value={idade}
                            onChange={event => setIdade(event.target.value)}>
                        </input>
                    </div>
                </div>
                <div className="Linha">
                    <div className="Coluna">
                        <label>Email</label>
                        <input type="email"
                            name="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            required>
                        </input>
                    </div>
                </div>
                <button type="submit">
                    Adicionar
                </button>
            </form>
        </div>
    )
}

export default AdicionarUsuario;
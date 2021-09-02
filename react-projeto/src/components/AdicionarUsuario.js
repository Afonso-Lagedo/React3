import React, {Component} from 'react';
import './components.css';

//to not repeat the initial state
const INITIAL_STATE ={
    usuario: {nome:'', idade:'', email:''}
}


class AdicionarUsuario extends Component{
    constructor(props){
        super(props);

        this.state = INITIAL_STATE;

        //"connect the method"
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    //altering inputs
    onChangeHandler(event){
        const {name, value} = event.target;
        this.setState({usuario:{...this.state.usuario, [name]:value}});
    }
    //add user
    onSubmitHandler(event){
        event.preventDefault();
        //geting API
        const usuario = this.state.usuario;

        fetch('https://reqres.in/api/users', {
            method: 'POST', //url, method(default:get)
            headers: {'Content-Type': 'application/json'}, //configuration
            body: JSON.stringify(usuario)//the which will pass to API, and transformation in JSON for API understand
        })
            .then(resposta =>resposta.json())
            .then(dados => {
                //inputs cleaning
                this.setState(INITIAL_STATE);
                this.props.adicionarUsuario(dados);
            }
        )
    }

    render(){
        return(
            <div className="AddUsuario">
                <h2>Adicionar Usuário</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="Linha">
                        <div className="Coluna">
                            <label>Nome</label>
                            <input type="text"
                                name="nome"
                                value={this.state.usuario.nome}
                                onChange={this.onChangeHandler}
                                required>
                            </input>
                        </div>
                        <div className="Coluna">
                            <label>Idade</label>
                            <input type="number"
                                name="idade"
                                value={this.state.usuario.idade}
                                onChange={this.onChangeHandler}>
                            </input>
                        </div>
                    </div>
                    <div className="Linha">
                        <div className="Coluna">
                            <label>Email</label>
                            <input type="email"
                                name="email"
                                value={this.state.usuario.email}
                                onChange={this.onChangeHandler}
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
}

export default AdicionarUsuario;